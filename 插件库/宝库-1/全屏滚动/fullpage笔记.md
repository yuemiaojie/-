# fullpage笔记

## 基本介绍

> fullPage.js 是一个基于**jQuery 的插件** ，它能够很方便、很轻松的制作出全屏网站

fullpage的主要功能有：

- 支持鼠标滚动
- 支持前进后退和键盘控制
- 多个回调函数
- 支持手机、平板触摸事件
- 支持 CSS3 动画
- 支持窗口缩放
- 窗口缩放时自动调整
- 可设置滚动宽度、背景颜色、滚动速度、循环选项、回调、文本对齐方式等等

github 官网     https://github.com/alvarotrigo/fullPage.js  

中文演示地址   http://www.dowebok.com/demo/2014/77/    

## 使用步骤

+ 引包

```html
<!--引入fullpage的样式文件-->
<link rel="stylesheet" href="fullpage/jquery.fullpage.css">


<!--引入jquery文件，因为fullpage是基于jquery的插件，必须先引入jquery-->
<script src="jquery/jquery-1.12.4.js"></script>
<!--引入fullpage的js文件-->
<script src="fullpage/jquery.fullpage.js"></script>
```

+ HTML结构

每个 section 代表一屏，section需要放到一个div中，不能直接放到body元素下。

```
<div id="myPage">
  <div class="section"><h3>第一屏</h3></div>
  <div class="section"><h3>第二屏</h3></div>
  <div class="section"><h3>第三屏</h3></div>
  <div class="section"><h3>第四屏</h3></div>
</div>
```

+ 初始化

```javascript
$(function () {
  //调用fullpage方法初始化插件
  $("#myPage").fullpage();
});
```

## 常见参数

| 选项                 | 类型   | 默认值        | 说明                                       |
| ------------------ | ---- | ---------- | ---------------------------------------- |
| verticalCentered   | 字符串  | true       | 内容是否垂直居中                                 |
| sectionsColor      | 数组   | 无          | 设置每一屏的背景颜色                               |
| scrollingSpeed     | 整数   | 700        | 滚动速度，单位为毫秒                               |
| navigation         | 布尔值  | false      | 是否显示项目导航                                 |
| navigationPosition | 字符串  | right      | 项目导航的位置，可选 left 或 right                  |
| navigationTooltips | 数组   | 空          | 项目导航的提示文本                                |
| slidesNavigation   | 布尔值  | false      | 是否显示左右滑块的项目导航                            |
| slidesNavPosition  | 字符串  | bottom     | 左右滑块的项目导航的位置，可选 top 或 bottom             |
| loopBottom         | 布尔值  | false      | 滚动到最底部后是否滚回顶部                            |
| loopTop            | 布尔值  | false      | 滚动到最顶部后是否滚底部                             |
| loopHorizontal     | 布尔值  | true       | 左右滑块是否循环滑动                               |
| css3               | 布尔值  | true       | 是否使用 CSS3 transforms 滚动                  |
| easing             | 字符串  | easeInQuad | 需要把css3值设置为false, 之后你就可以随意选择easing.js里面的动画效果名称了 |
| paddingTop         | 字符串  | 0          | 与顶部的距离                                   |
| paddingBottom      | 字符串  | 0          | 与底部距离                                    |
| keyboardScrolling  | 布尔值  | true       | 是否使用键盘方向键导航                              |
| continuousVertical | 布尔值  | false      | 是否循环滚动，与 loopTop 及 loopBottom 不兼容        |

## 常见方法

方法的使用规则：`$.fn.fullpage.method(param)` ，比如：`$.fn.fullpage.moveTo(1)`

| 方法名称                   | 方法说明            |
| ---------------------- | --------------- |
| moveSectionUp()        | 向上滚动            |
| moveSectionDown()      | 向下滚动            |
| moveTo(section, slide) | 滚动到             |
| moveSlideRight()       | slide 向右滚动      |
| moveSlideLeft()        | slide 向左滚动      |
| setAllowScrolling()    | 添加或删除鼠标滚轮/触控板控制 |
| setKeyboardScrolling() | 添加或删除键盘方向键控制    |
| setScrollingSpeed()    | 定义以毫秒为单位的滚动速度   |

## 回调函数

| 名称             | 说明                                       |
| -------------- | ---------------------------------------- |
| afterLoad      | 滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算 |
| onLeave        | 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；nextIndex 是滚动到的“页面”的序号，从1开始计算；direction 判断往上滚动还是往下滚动，值是 up 或 down。 |
| afterRender    | 页面结构生成后的回调函数，或者说页面初始化完成后的回调函数            |
| afterSlideLoad | 滚动到某一水平滑块后的回调函数，与 afterLoad 类似，接收 anchorLink、index、slideIndex、direction 4个参数 |
| onSlideLeave   | 某一水平滑块滚动前的回调函数，与 onLeave 类似，接收 anchorLink、index、slideIndex、direction 4个参数 |