# 1、flex元素可以设置的属性

## （1）设置到flex盒子（即容器）上的属性

- `justify-content`    在主轴对齐flex元素，可取值如下（下面的说明都特指`flex-direction: row`的情况）
  - `flex-start`    第一个元素和盒子（容器）的左边对齐（默认情况）
  - `flex-end`    最后一个元素和盒子的右边对齐
  - `center`    所有元素在盒子里居中
  - `space-between`    元素之间保持相等的距离（第一个元素对齐盒子左边，最后一个元素对齐盒子右边）
  - `space-around`    元素周围保持相等的距离（每个元素两侧的留白都一样大）
- `align-items`    在交叉轴上对齐flex元素，可取值如下（下面的说明都特指`flex-direction: row`的情况）
  - `flex-start`    第一行元素和盒子的顶部对齐（默认情况）
  - `flex-end`    最后一行元素和盒子的底部对齐
  - `center`    所有元素以行为单位在盒子里纵向居中
  - `baseline`    元素在容器的基线位置显示（不理解）
  - `stretch`    元素被拉伸以填满整个容器（不理解）
- `flex-direction`    定义主轴的方向，可取值如下
  - `row`    定义主轴方向为横向（默认情况）
  - `row-reverse`    定义主轴方向为横向，且元素逆序从右到左排列
  - `column`    定义主轴方向为纵向
  - `column-reverse`     定义主轴方向为纵向，且元素逆序从下到上排列
- `flex-wrap`    定义flex元素是否自动换行，可取值如下
  - `nowrap`    所有的元素都在一行（默认情况）
  - `wrap`    元素自动换行
  - `wrap-reverse`    元素自动换成逆序的多行
- `flex-flow`    `flex-direction`和`flex-wrap`的合并属性，先写  `flex-direction`的取值，再写`flex-wrap`的取值
- `align-content`    当交叉轴有多余空间时，对齐容器内的轴线
  - 以`flex-direction: row`的情况为例，`align-content`是用来设置每行元素在纵向上的排列    <kbd>**对应第21题**</kbd>
    - `flex-start`    多行都集中在顶部（第一行对齐顶部，行与行之间无间隔）
    - `flex-end`    多行都集中在底部（最后一行对齐底部，行与行之间无间隔）
    - `center`    多行居中（行与行之间无间隔）
    - `space-between`    类似`justify-content`的`space-between`
    - `space-around`    类似`justify-content`的`space-around`

## （2）设置到flex盒子内子元素的属性

- `order`    设置指定元素的权重以决定flex元素的顺序，可取值为`... -2 -1 0 1 2 ...`
  - 每个flex元素的`order`属性默认值为0
  - `order`属性取值越大，该元素的位置越靠后
- `align-self`    在交叉轴上对齐一个元素，覆盖`align-items`的属性取值，取值和`align-items`相同
  - 其实本质上就是`align-items`，只不过`align-items`针对的是所有元素（以行为单位），而`align-self`针对的是具体指定元素
  - 以`flex-direction: row`的情况为例（即该元素的横向位置不变），说明该属性的三个取值的含义    <kbd>**对应第16题**</kbd>
    - `flex-start`    该元素落到盒子顶部（纵向方向）
    - `flex-end`     该元素落到盒子底部（纵向方向）
    - `center`    该元素落到盒子中间（纵向方向）

# 2、注意点

- 主轴和交叉轴

  - 主轴：由`flex-direction`决定
    - `flex-direction: row/row-reverse`    主轴方向为横向
    - `flex-direction: column/column-reverse`    主轴方向为纵向
  - 交叉轴：与主轴方向相垂直的方向
    - `flex-direction: row/row-reverse`    交叉轴方向为纵向
    - `flex-direction: column/column-reverse`    交叉轴方向为横向

- 当`flex-direction`的取值为`row-reverse/column-reverse`时（即调转了行或列的方向时），`flex-start`和`flex-end`对应的方向也被调转了    <kbd>**对应第10题**</kbd>

- 当`flex-direction`的取值为`column/column-reverse`是（即flex以列为方向时），`justify-content`控制纵向对齐，`align-items`控制横向对齐（其实就是此时主轴变成了纵向方向）    <kbd>**对应第11题**</kbd>

  