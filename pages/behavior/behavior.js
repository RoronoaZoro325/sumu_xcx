var myBehavior = require('./demo.js')
Page({
  behaviors: [myBehavior],
  onLoad: function() {
    console.log(this.data.sharedText,'xixi')
    this.sharedMethod()
  }
})