require "./basic.css"
window.customElements.define "ceri-tooltip", require "../src/tooltip.coffee"
createView = require "ceri-dev-server/lib/createView"
module.exports = createView
  mixins: [
    require "ceri/lib/#model"
    require "ceri/lib/computed"
  ]
  structure: template 1, """
    <button class="absolute" style="top:10px;left:10px;"
      #ref=topleft>responsive anchor</button>
    <ceri-tooltip #ref=toplefttt :on-body=onBody>Content</ceri-tooltip>

    <button class="absolute" style="top:10px;right:10px;"
      #ref=topright>responsive anchor</button>
    <ceri-tooltip #ref=toprighttt :on-body=onBody>Content</ceri-tooltip>
      
    <button class="absolute" style="bottom:10px;left:10px;"
      #ref=bottomleft>responsive anchor</button>
    <ceri-tooltip #ref=bottomlefttt :on-body=onBody>Content</ceri-tooltip>
      
    <button class="absolute" style="bottom:10px;right:10px;"
      #ref=bottomright>responsive anchor</button>
    <ceri-tooltip #ref=bottomrighttt :on-body=onBody>Content</ceri-tooltip>
    <br>
    <br>
    <p>hover or touch-hold button</p>
    <button class="margin" #ref=south >south</button>
    <ceri-tooltip anchor="s" #ref=southtt :on-body=onBody>so much Content. wow</ceri-tooltip>

    <button class="margin" #ref=east >east</button>
    <ceri-tooltip anchor="e" #ref=easttt :on-body=onBody>so much Content. wow</ceri-tooltip>

    <button class="margin" #ref=west>west</button>
    <ceri-tooltip anchor="w" #ref=westtt :on-body=onBody>so much Content. wow</ceri-tooltip>

    <br><br>
    
    <br>
    <a href="https://github.com/ceri-comps/ceri-tooltip/blob/master/dev/basic.coffee">source</a>
    <div style="height:2000px;"></div>
  """
  data: ->
    onBody: false
  computed:
    onBodyText: -> "onBody: #{@onBody}"

