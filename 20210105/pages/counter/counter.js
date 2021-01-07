// pages/counter/counter.js
Page({
  data: {
    res:'',
    height: 600,
    id1:'',
    id2:'',
    id3:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        let h = res.screenHeight;
        this.setData({
          height: h
        });
      },
    })
  },

})