function getAnswer(){
var answer=[];
for(i=1;i<2;i++){
  answer[i]=prompt("猜猜看~(输入官方英文名，每个字之间要空格哦~)");
  if (answer[i]=="Yoo Yeon Seok"){
    alert("恭喜你！答对啦！太聪明了吧！");
  }
  else{
    alert("再仔细想想~给你个提示吧：他出演过上述电视剧");
    answer[i]=prompt("再猜猜看~(输入官方英文名，每个字之间要空格哦~)");
    if (answer[i]=="Yoo Yeon Seok"){
      alert("恭喜你！答对啦！太聪明了吧！");
    }
    else{
      alert("还是不对哦T-T再提示一下：他和上述明星有共同的特点！");
      answer[i]=prompt("再猜猜看~(输入官方英文名，每个字之间要空格哦~)");
      if (answer[i]=="Yoo Yeon Seok"){
        alert("恭喜你！答对啦！太聪明了吧！");
      }
      else{
        alert("不对不对不对！最后一个提示了：他是生于1984年的韩国男演员！最后再试一试！");
        answer[i]=prompt("再猜猜看~(输入官方英文名，每个字之间要空格哦~)");
        if (answer[i]=="Yoo Yeon Seok"){
          alert("恭喜你！答对啦！太聪明了吧！");
        }
        else{
          alert("太遗憾了！正确答案是：Yoo Yeon Seok柳演锡！");
        }
      }
      }
    }
  }
}

window.onload = function() {
  var bigImg = document.createElement("img");
  bigImg.src = "柳演锡.jpg";
  var myp = document.getElementById('myp');
  myp.appendChild(bigImg);
}
