//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '需要授权小程序获取您的信息',
    userInfo: {}
  },
  onLoad: function () {

this.getUserInfo();
    

    
  },
  handlerGetUserInfo(data){
    console.log(data)
    if(data.detail.rawData){
      console.log("aaa")
      this.getUserInfo();
    }
  },
  getUserInfo(){
    wx.getSetting({
      success: (data) => {
        console.log(data)
        if (data.authSetting['scope.userInfo']) {
          console.log("授权了")
          this.setData({
            isShow: false
          })
        } else {
          console.log("没有授权")
          this.setData({
            isShow: true
          })
        }
      }
    }),
    //获取用户登录的信息
    wx.getUserInfo({
      success: (data) => {
        console.log(data)
        this.setData({
          userInfo: data.userInfo
        })
      },
      fail: (data) => {
        console.log("fail");
      }
    })  
  }
  
})
