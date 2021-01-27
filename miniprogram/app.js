//app.js
App({
  onLaunch: function (options) {
    console.log('onLaunch 执行')
    console.log(options)
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'hezi-0g43s95655e54fb7',
        traceUser: true,
      })
    }
    this.globalData = {}
  },

  onShow(options){
    console.log('onLaunch 执行')
    console.log(options)
  }
})
