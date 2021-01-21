[TOC]

# 1、文字溢出处理

- 溢出容器部分的文本要打点展示

  - 单行文本溢出

    ```html
    <p style="height: 20px; 
              width:300px; 
              line-height: 20px; 
              border: 1px solid black;  
              
              white-space: nowrap;  
              overflow:hidden; 
              text-overflow:ellipsis">
      aaaaabbbbbbccccccdddddeeeeeeeffffffffff</p>
    
    white-space: nowrap;  <!--溢出不换行-->
    text-overflow:ellipsis;  <!--打点-->
    ```

    <p style="height: 20px; width:300px; line-height: 20px; border: 1px solid black;  white-space: nowrap; overflow:hidden; text-overflow:ellipsis">
      aaaaabbbbbbccccccdddddeeeeeeeffffffffff</p>

  - 多行文本溢出
    - 老版本浏览器对此功能支持不够，所以在老版本浏览器不实现，手动打点
    - 移动端（新版本浏览器）都支持此功能（CSS3）
    - 多行溢出一般只做溢出处理（截断）

# 2、背景图片处理

- 背景图片的设置属性如下
  - `background-image: url(img_url)`    设置背景图片
  - `background-size: 100px 100px;`    设置背景图片大小（宽高）
  - `background-repeat: ...`    设置背景图片的重复选项
  - `background-position: 20px 20px`    设置背景图片位置（两个坐标）
    - `background-position: center center`      居中
- 图片代替文字（链接）的正确方法
  - 第一种方法：让文字溢出不换行，并且让溢出消失，这样当有CSS时不会看见文字，当没有CSS时（比如网速慢），可以显示链接 
  - 第二种方法：让图片显示在padding内（使盒子高度为0），这样文字会溢出，图片也能正常展示（图片不在盒子内容区，但是在padding区，padding也是盒子的一部分），然后再隐藏溢出即可

# 3、实现两边留白

- 用属性`margin: 0 auto;`即可

  - 0表示上下margin为0；auto表示自动调整左右margin

- 例子

  <div style="width: 500px; background-color: yellow">
    <div style="width:300px; margin: 0 auto; background-color: red">123</div>
  </div>

# 4、文本类属性

- 文本类：有inline的标签就叫文本类（inline, inline-block）

- 文本类的一个属性就是有文字分隔符，如下

  ```html
  <span>没有</span><span>空格</span><br>
  <span>有</span> <span>空格</span><br>
  <span>有</span>             <span>空格</span>
  ```

  - 第二种和第三种情况都只会有一个空格

- 因为img标签也是文本类标签，所以若想要两张图片之间无缝隙，可以再源代码中让两个标签无缝隙

- 文本类元素的对齐方式：低对齐

  - 但是，当一个文本类元素包含文字时：外部的文字会和文本类元素里的文字低对齐

  - 解决办法：使用`vertical-align`属性调整

  - 例子：

    - 第一个没用vertical属性，第二个使用属性调整对齐位置

    <span style="font-size: 70px; background-color:yellow">111</span><span style="background-color:green;">22</span>

    <span style="font-size: 70px; background-color:yellow">111</span><span style="background-color:green; vertical-align:-15px">22</span>

# 5、浏览器内核机理

## （1）查找选择器标签顺序

- 以上下文选择器为例，首先查找第一个标签时是从头到尾浏览一遍
- 找到第一个选择器后，是从左到右查找的（从树枝到树根）