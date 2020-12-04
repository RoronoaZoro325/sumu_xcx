module.exports = Behavior({
  data: {
    sharedText: '来自behavior组件的数据'
  },
  methods: {
    sharedMethod: function() {
      console.log('来自behavior组件的方法')
    },
  },
  // created: function() {
  //   this.sharedMethod()
  // }
})