// pages/counter/counter.js
Page({
  data: {
    res:'0',
    temp:'0',//取上次的临时结果
    lastoper:'+',//上一次的运算符标志
    flag:'false',//上一次的非数字按钮标志
    id1:'num_1',
    id2:'num_2',
    id3:'num_3',
    id4:'num_4',
    id5:'num_5',
    id6:'num_6',
    id7:'num_7',
    id8:'num_8',
    id9:'num_9',
    id10:'num_0',
    id11:'add',
    id12:'sub',
    id13:'mul',
    id14:'div',
    id15:'oth',

    id16:'dot',
    id17:'equ',
    id18:'del1',
    id19:'delA',
    id20:'what'
    // chars:['+','-','*','%','.']
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
  calculate:function(temp,ope,data1){
    var data;
    temp = parseFloat(temp);
    data1 = parseFloat(data1);
    switch(ope){
      case "+":
        data = temp + data1;
        break;
      case "-":
        data = temp - data1;
        break;
      case "*":
        data = temp * data1;
        break;
      case "/":
        data = temp / data1;
        break;
      case "%":
        data = temp % data1;
        break;
    }
    console.log(data);
    return data;
  },

  clickButton:function(e){
    var data = this.data.res;
    var noNumflag = this.data.flag;
    var temp = this.data.temp;
    var lastoper1 = this.data.lastoper;
    var id = e.target.id;

    if(id>="num_0" && id<="num_9"){
      data += id.split('_')[1];
      if(this.data.res == 0 || noNumflag){
        data = id.split('_')[1];
      }
      noNumflag = false;
    }else{//非数字的时候
      noNumflag = true;
      // 先处理点，删除一个，删除所有，然后再处理加减乘除等于
      // 点
      if(id == 'dot'){
        if(data.toString().indexOf(".") == -1){
          data += '.';
        }
      }else if(id == 'del1'){
        if(data.toString().length>1){
          data = data.toString().substr(0,data.toString().length-1);
        }else{
          data = 0;
        }
      }else if(id == 'delA'){
        data = 0;
      }else if(id == 'add'){
        data = this.calculate(temp,lastoper1,data);
        temp = data;
        lastoper1 = '+';
      }else if(id == 'sub'){
        data = this.calculate(temp,lastoper1,data);
        temp = data;
        lastoper1 = '-';
      }else if(id == 'mul'){
        data = this.calculate(temp,lastoper1,data);
        temp = data;
        lastoper1 = '*';
      }else if(id == 'div'){
        data = this.calculate(temp,lastoper1,data);
        temp = data;
        lastoper1 = '/';
      }else if(id == 'equ'){
        data = this.calculate(temp,lastoper1,data);
        temp = 0;
        lastoper1 = '+';
      }else if(id == 'what'){
        console.log("what");
      }
    }

    this.setData({
      res:data,
      lastoper:lastoper1,
      temp:temp,
      flag:noNumflag
    })
  }

  


})

// getChar:function(char){
//   let result = this.data.res;
//   let nI = result[result.length-1];
//   let item = 0;
//   if(nI !="+" && nI != "-" && nI != "*" && nI != "/"){
//     item = -1;
//   }
//   if (item == -1){
//     result += char;
//   }else{
//     if(nI != char){
//       result = result.toString().substring(0,result.length-1) + char;
//     }
//   }
//   this.setData({
//     res:result
//   });
// },
// clickButton:function(e){
  //   var result = this.data.res;
  //   let getInput = e.target.id;
  //   var dotitem = 0;
  //   // 处理了数字
  //   if(getInput.split('_')[0] == 'num'){
  //     if (result != '0'){
  //       result += getInput.split('_')[1];
  //     }else{
  //       result = getInput.split('_')[1];
  //     }
  //     this.setData({
  //       res:result
  //     });
  //   }else{      //处理了运算符
  //     switch(getInput)
  //     {
  //       case "add":
  //         this.getChar("+");
  //         break;
  //       case "sub":
  //         this.getChar("-");
  //         break;
  //       case "mul":
  //         this.getChar("*");
  //         break;
  //       case "div":
  //         this.getChar("/");
  //         break;
  //       case "oth":
  //         this.getChar("%");
  //         break;
  //       case "dot":
  //         this.getDot();
  //         break;
  //     }
  //   }  
  // }