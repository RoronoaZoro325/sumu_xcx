// pages/import_include/import_include.js
import tempObj  from "./importDemo"
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[1,2,3],
      name:'zrc',
      obj:{
        a:1,
        b:'b'
      }
  },
  fatherClick(e){
    console.log(e,'ghj')
    tempObj.clickView()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(9090)
    let obj = {
      a:1,
      b:2
    }
    let arr = [1,2,3,4,5]
    console.log(...obj,...arr)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})