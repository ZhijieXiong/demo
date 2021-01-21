[TOC]

# 1、ID选择器

```css
#id_name {
	property:value;
  ...
}
```

- 一个页面允许给元素一个唯一的id
- 每个id必须唯一
- `<a>`的锚点就是使用了id

```html
<p id="new">这里是new锚点</p>

<a href="#new">跳转到new锚点</a>
```

# 2、类选择器

```css
.class_name {
	property:value;
	...
}
```

- 类选择器是设置一组元素的
- 类名可以不唯一，可以多类混合使用

```html
<p class="new">类选择器的使用</p>

<!--css文件如下-->
<!--
.new {
 font-color:red;
}
/*或者*/
p.new {
	font-color:red;
}
-->
```

# 3、伪类选择器

- 伪类选择用于定义链接的各种不同状态的样式

|   属性   |               描述               |
| :------: | :------------------------------: |
| :active  |        被激活的元素的样式        |
|  :hover  |   当鼠标悬浮在元素上方时的样式   |
|  :link   |       未被访问的链接的样式       |
| :visited |       已被访问的链接的样式       |
|  :focus  | 向拥有键盘输入焦点的元素添加样式 |

```html
<a>链接</a>

<!--css文件如下-->
<!--
a:link {
	color:blue;
}
a:visited {
	color:red;
}
-->
```

# 4、上下文选择器

- 上下文选择器是选择器的嵌套使用

```
p .special li {
	color:red;
} 
```

- 上面的选择器只对`<p>`标签的`special`类里的`<li>`标签生效，如下

```html
<p>
	<ol class="special">
    <li>第一项</li>
    <li>第二项</li>
    <li>第三项</li>
	</ol>
</p>
```

# 5、子选择器

- 子选择器和上下文选择器类似，但是子选择器更严格，每一层选择器都必须符合条件

```css
p > .special > li {
	color:red;
}
```

以下面的html为例

```html
<p>
	<ol class="special">
    <li>第一项</li>
    <li>第二项</li>
    <li>第三项</li>
	</ol>
</p>
```

- `p li {color:red;}`是上下文选择器，对`<p>`标签里的`<li>`标签都生效
- `p > li {color:red;}`是子选择器，只对`<p>`标签里的下一层`<li>`标签生效