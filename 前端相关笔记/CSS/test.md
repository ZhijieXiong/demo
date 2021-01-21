- CSS中，每个元素都被视为一个盒模型
- 盒模型 = 盒子（height、width、border和padding属性） + 外边距（margin属性）

<img style="height:500px" src="/Users/dream/Desktop/StudyData/前端相关/img/CSS-盒模型示意图.jpg">

- 在盒模型中，子元素只能位于父元素的内容区（元素区），该区域大小由height和width属性决定

- 例子：利用盒模型做一个远视图

  - html代码如下：

  ```html
  <div class="wrapper">  <!--最外层容器，用于实现居中-->
    <div class="content1">
      <div class="content2">
        <div class="content3">
          <div class="content4">
            <div class="content5">
              <div class="content6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  ```

  - CSS代码如下

  ```css
  *{
  	margin: 0;
  	padding: 0;
  	border: 0;
  }
  
  .wrapper{
  	position: absolute;
  	left: 50%;
  	top: 50%;
  	margin-left: -65px;  /* wrapper的大小是130*130，left和top定位是以左边框和上边框为边界的 
    												所以需要将wrapper往回挪动一点*/
  	margin-top: -65px;
  }
  
  .content6{
  	height: 10px;
  	width: 10px;
  	background-color: green;
  	border: 10px solid white;
  }
  
  .content5{
  	height: 30px;  /* 要实现盒内元素居中，就要使外层的内容区大小和内层的盒子大小一样
    									比如content6总大小是30*30（margin不加入计算），所以content5内容区大小要一样*/
  	width: 30px;
  	border: 10px solid green;
  }
  
  .content4{
  	height: 50px;
  	width: 50px;
  	border: 10px solid white;
  }
  
  .content3{
  	height: 70px;
  	width: 70px;
  	border: 10px solid green;
  }
  
  .content2{
  	height: 90px;
  	width: 90px;
  	border: 10px solid white;
  }
  
  .content1{
  	height: 110px;
  	width: 110px;
  	border: 10px solid green;
  }
  ```

  - 效果如下

    <img src="/Users/dream/Desktop/StudyData/前端相关/img/CSS-远视图制作.png">