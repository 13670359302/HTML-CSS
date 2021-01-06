// pages/addtitle/add.js
Page({
  data:{
    num1:'',
    num2:'',
    resnum:''
  },
  bindAdd:function(e){
    var r = this.data.num1*1 + this.data.num2*1;
    this.setData({
      resnum:r
    });
  },
  slider1change:function(e){
    console.log(e);
    var num = e.detail.value;
    // 如果是数字则赋值过去
    if(!isNaN(num)){
      console.log(num);
      this.setData({
        num1:num
      });
    }
  },
  slider2change:function(e){
    var num = e.detail.value;
    // 如果是数字则赋值过去
    if(!isNaN(num)){
      console.log(num);
      this.setData({
        num2:num
      });
    }
  }
})