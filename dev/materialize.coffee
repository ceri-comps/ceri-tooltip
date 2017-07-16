require("./materialize.config.scss")
createView = require "ceri-dev-server/lib/createView"
module.exports = createView

  structure: template 1, """
    <br/>
    <p>hover or touch-hold button</p>
    <br/>
    <button class=btn>south</button>
    <ceri-tooltip class=materialize anchor="s">Content</ceri-tooltip>
    
    <button style="margin-left: 30px" class=btn>north</button>
    <ceri-tooltip class=materialize anchor="n">Content</ceri-tooltip>

    <br><br><br>

    <button class=btn>east</button>
    <ceri-tooltip class=materialize anchor="e">Content</ceri-tooltip>
    
    <button style="margin-left: 30px" class=btn>west</button>
    <ceri-tooltip class=materialize anchor="w">Content</ceri-tooltip>

"""
  tests: dropdown: ->
    it "should work", =>
      should.exist @