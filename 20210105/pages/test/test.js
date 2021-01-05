// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "name":"zhf",
    "flag":false,
    users:[{
      name:"zhf",
      age:22
    },{
      name:'lmx',
      age:21
    }]
  },
  viewTap:function(){
    console.log(this.data)
  },
  changeTap:function(){
    this.setData({
      name : 'lmx'
    })
  }
})