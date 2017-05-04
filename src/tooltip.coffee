ceri = require "ceri/lib/wrapper"
module.exports = ceri

  mixins: [
    require "ceri/lib/props"
    require "ceri/lib/computed"
    require "ceri/lib/style"
    require "ceri/lib/animate"
    require "ceri/lib/open"
    require "ceri/lib/getViewportSize"
    require "ceri/lib/getScrollPos"
  ]

  props:
    anchor:
      type: String
    delayHover:
      type: Number
      default: 400
    delayTouch:
      type: Number
      default: 200
    onBody:
      type: Boolean
      
  initStyle:
    position: "absolute"
    display: "block"

  events:
    mouseover:
      target:
        active: -> !@openingOrOpen
        cbs: "show"
        defer: 
          cancel: ["mouseleave","click"]
          delay: "delayHover"
        destroy: true
    click:
      target:
        active: "openingOrOpen"
        cbs: "hide"
        destroy: true
    mouseleave:
      target:
        active: "openingOrOpen"
        cbs: "hide"
        destroy: true
    touchstart:
      target:
        active: -> !@openingOrOpen
        cbs: -> @touched = setTimeout @show.bind(@), @delayTouch
        destroy: true
    touchmove:
      body:
        el: document.body
        active: "touched"
        cbs: ->
          clearTimeout(@touched)
          @touched = false
        stop: true
        destroy: true
    touchend:
      body:
        el: document.body
        active: -> @touched or @openingOrOpen
        cbs: -> 
          clearTimeout(@touched)
          @touched = false
          @hide()
        destroy: true

  data: ->
    touched: false

  computed:
    target: ->
      if @__placeholder.previousElementSibling
        return @__placeholder.previousElementSibling
      else
        return @__parentElement
    cAnchor: ->
      return @anchor if @anchor
      windowSize = @getViewportSize() 
      return "wnse" if windowSize.width < 992
      return "senw"

  
  methods:
    enter: (o) ->
      o.preserve = ["overflow"]
      o.init = overflow: "hidden", top: @top + "px", left: @left + "px"
      o.duration = 150
      o.style = 
        opacity: [0,1]
      switch @direction
        when "s"
          o.style.translateY = [-@offsetTop,0,"px"]
        when "n"
          o.style.translateY = [@offsetTop,0,"px"]
        when "e"
          o.style.translateX = [-@offsetLeft,0,"px"]
        when "w"
          o.style.translateX = [@offsetLeft,0,"px"]
      return @$animate(o)

    leave: (o) ->
      o.preserve = ["overflow"]
      o.init = overflow: "hidden"
      o.duration = 150
      o.style =
        opacity: [1,0]
      return @$animate(o)
    onShow: ->
      targetPos = @target.getBoundingClientRect()
      # get real pos depending on position in viewport
      windowSize = @getViewportSize()
      @style.top = 0
      @style.left = 0
      height = @offsetHeight + @offsetTop
      width = @offsetWidth + @offsetLeft

      pos = null
      for a in @cAnchor
        pos = a
        if a == "w" and targetPos.left - width >= 0
          break
        else if a == "n" and targetPos.top - height >= 0
          break
        else if a == "s" and targetPos.bottom + height <= windowSize.height
          break
        else if a == "e" and targetPos.right + width <= windowSize.width
          break
      @direction = pos
      # get top/left relative to parent nw corner (w/o offset)
      parentHeight = targetPos.height
      parentWidth = targetPos.width
      width += @offsetLeft
      height += @offsetTop
      if pos == "s"
        top = parentHeight
        left = parentWidth/2 - width/2
      else if pos == "n"
        top = - height
        left = parentWidth/2 - width/2
      else if pos == "w"
        top = parentHeight/2 - height/2
        left = - width
      else if pos == "e"
        top = parentHeight/2 - height/2
        left = parentWidth

      # positioning in document
      if @onBody
        scroll = @getScrollPos()
        top += scroll.top + targetPos.top
        left += scroll.left + targetPos.left
      else
        parentStyle = getComputedStyle(@parentElement)
        isPositioned = /relative|absolute|fixed/.test(parentStyle.getPropertyValue("position"))
        if @parentElement == @target and isPositioned
          left -= parseInt(parentStyle.getPropertyValue("border-left-width"))
          top -= parseInt(parentStyle.getPropertyValue("border-top-width"))
        else
          top += @target.offsetTop
          left += @target.offsetLeft
        

      @top = top
      @left = left 