# 总结

## 距离浏览器顶部距离兼容写法

var scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
document.body.scrollTop

## qs 的使用方法

var url = 'name=ming&age=18'  
var obj = qs.parse(url)  ```{name:min, age:18}```
let param = qs.stringify({"email": 1615@qq.com, "age": 18}) ```email=1615@qq.com&age=18```
**对象与地址栏中结构切换**

## props

props: {name:{type:Boolean,dafault: true}}

## nuxt 中的 head()

| 注意: static 文件中直接写 JS(根目录的方式)
head() {
return {
script: [

{src: 'js/demo.js'}

]
}
}

## endWith

endWith(): 用来判断是不是以参数为结尾
if(!config.url.endWith('/login')){}

## 正则

- 回车转br标签   ```(/\n/gm, '<br>')```
- 空格转nbsp   ```(/\s/gm, '&nbsp;')```
- 转为数字部分  ```var val = "98.8元/斤"; val.replace(/[^(0-9).]/ig,'')```

## scheme 协议

scheme 协议: scheme 是一种页面跳转的协议,H5 可以通过 scheme 来跳转到 app 页面

## es6 字符串判断语法

arr.includes('value'):检测数据是否有这个值   str.startswith('value') str.endswith('value')
obj.getOwnPropertyNames('value'): 检测对象是否有这个值

## reverse()

reverse(): 用于颠倒数组的顺序

## 强化版的滚动条插件

import BScroll from 'better-scroll'

## 解决浏览器的缓存问题

`?_r = {Math.random()}&`来解决

## js-cookie 插件

Cookies.set('','') Cookies.get('')

## 阻止默认行为

@click.prevent

## vue 常用的事件

@click @dbclick @mouseenter @mouseover @mouseleave

## vue 中的\$set()

用来触发 data 中 study 对象中属性的更新,并触发视图
mouted() {
this.\$set(this.study,"age",24)
}

## flex

1. 行显示 flex-wrap: wrap;  **不换行**
2. 里面的元素垂直显示 flex-direction: column;
3. 列居中 justify-content: center;
4. 行居中 align-items: center;
5. 两侧显示 justify-content: space-between;
6. 左右有空间  justify-content:space-around;

## 将 html 后缀转 php 后缀

`rename *.html *.php`

## git 设置为 origin 提交

- git remote add origin "地址"
- git push -u origin master

注意: **工作中代码 一:拉取 git pull origin 分支名二:git push origin 分支名**

![git设置origin截图](./demo/捕获.PNG)

## vuex 数据持久化

npm install vuex-persistedstate
import createPersistedState from 'vuex-persistedstate'
const store = new Vuex.Store({
plugins: [createPersistedState()]
})

- 这里只有经过函数操作才操作永久存储

## 解析地址

```js
// 获取 URL 参数方法
$.getUrlParam = function(name) {
  // 用该属性获取页面 URL 地址从问号 (?) 开始的 URL（查询部分）
  var url = window.location.search
  // 正则筛选地址栏
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  // 匹配目标参数
  var result = url.substr(1).match(reg)
  //返回参数值
  return result ? decodeURIComponent(result[2]) : null
}
// 获取URL参数方法
getUrlParam = function(name) {
  // 用该属性获取页面 URL 地址从问号 (?) 开始的 URL（查询部分）
  var url = window.location.search
  // 正则筛选地址栏
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  // 匹配目标参数
  var result = url.substr(1).match(reg)
  //返回参数值
  return result ? decodeURIComponent(result[2]) : null
}
```

## ajax 发送请求格式的变化

```js
$.ajax({
    method: "POST",
    url: "",
    headers: {token: 123456},
    contentType: 'application/json',
    data:JSON.stringify({
            "id": id
    }),
    success: function( res ) {
      if(res === 200) {
      }
   }
})
```

## emment语法

```js
div>span
div.info>span
div#info>span
div{hehe $}*12
(div>span.info)^(div>span.info)
```

## mui页面loading

```js
(function($, window) {  

  //显示加载框
  $.showLoading = function(message, type) {
    if ($.os.plus && type !== 'div') {
      $.plusReady(function() {
        plus.nativeUI.showWaiting(message)
      })
    } else {
      var html = ''
      html += '<i class="mui-spinner mui-spinner-white"></i>'
      html += '<p class="text">' + (message || '数据加载中') + '</p>'
      //遮罩层
      var mask = document.getElementsByClassName('mui-show-loading-mask')
      if (mask.length == 0) {
        mask = document.createElement('div')
        mask.classList.add('mui-show-loading-mask')
        document.body.appendChild(mask)
        mask.addEventListener('touchmove', function(e) {
          e.stopPropagation()
          e.preventDefault()
        })
      } else {
        mask[0].classList.remove('mui-show-loading-mask-hidden')
      }
      //加载框
      var toast = document.getElementsByClassName('mui-show-loading')
      if (toast.length == 0) {
        toast = document.createElement('div')
        toast.classList.add('mui-show-loading')
        toast.classList.add('loading-visible')
        document.body.appendChild(toast)
        toast.innerHTML = html
        toast.addEventListener('touchmove', function(e) {
          e.stopPropagation()
          e.preventDefault()
        })
      } else {
        toast[0].innerHTML = html
        toast[0].classList.add('loading-visible')
      }
    }
  }
  $.hideLoading = function(callback) {
    if ($.os.plus) {
      $.plusReady(function() {
        plus.nativeUI.closeWaiting()
      })
    }
    var mask = document.getElementsByClassName('mui-show-loading-mask')
    var toast = document.getElementsByClassName('mui-show-loading')
    if (mask.length > 0) {
      mask[0].classList.add('mui-show-loading-mask-hidden')
    }
    if (toast.length > 0) {
      toast[0].classList.remove('loading-visible')
      callback && callback()
    }
  }
})(mui, window)
```

- 显示loading：mui.showLoading('正在加载..', 'div')
- 隐藏loading：mui.hideLoading()
- mui的旋转小图标的类：mui-spinner

## obj赋值后不改变原来的obj

```js
var obj = {1, 2, 3}
var newObj = $.extend(true, {}, obj) //这样newObj改变后不影响原来的obj了
```

## 如何检测某个元素是否存在

```js
if($('.box').length){
  console.log('存在)
}
```

## 如何替换字符串中的特定的词

```js
$('.box').html($('.box').html().replace(/word/ig, ''));
```

## 判断元素是否可见？

```js
$('.box').is(':visible');
```

## 返回顶部

```js
$('a.top').click(function(){
    $(document.body).animate({scrollTop:0},800);
    return false
});
```

## 检查图片是否加载完成

```js
$('img').load(function() {})
```

## 图片加载失败后的函数

```js
$('img').on('error', function() {
  $(this).attr('src', '/pass')
})
```

## Ajax错误处理

```js
  $(document).ajaxError(function() {
    console.log('error')
  })
```

## JQ创建元素

```js
var div = $('<div>',{
    'class': 'small',
    'css': 'background-color': 'blue',
    'width': 100,
    'animate': {
      'width': 200
    }
  })

  $('body').append(div)
```

## 只使用一次事件监听

```js
  $('box').one('click', function() {})
```

## 快速的阻止a链接的默认行为

```js
  <a href="aaaaa" onclick = (flase)></a>
```

## async与await：异步代码同步处理

```js
async fn() {
  var res = await axios.get(`地址`)
  conosle.log(res)
}
```

## 字符串转数组

```js
> 第一个以什么分开形成数组，第二个参数：返回的数据不会多于指定的数组的长度
str.split(',', 2) **长度为2的数组**
```

## activated，deactivated两个函数只有在路由有缓存的情况下生效

- activated: 进入页面就会触发，不管缓不缓存
- deactivated：离开页面触发

## beforeRouterEnter,beforeRouterLeave

- 每次路由发生变化时进入的钩子函数

```js
  beforeRouterEnter(to, from, next) {
    next(vm => {
      // vm可以访问方法以及变量
    })
  }
```

## 使用默认变量替代短路运算或条件

```js
  Bad: function( val ) {
    var value = val || 'one'
  }

  Good: function( val === 'one') {  }
```

## 理想函数参数不应该超过2个

```js
  Bad: function(title, name, age, gender) {  }

  Good: function fn({title, name, age, gender}) {}
  
  fn({
    title: 'Foo',
    name: 'yueSir',
    age: 18,
    gender: 'man'
  })
```

## es6转es5

```js
1. cnpm i
2. cnpm install -g babel-cli
3. cnpm install --save-dev babel-preset-es2015 babel-cli
4. 创建.babelrc.
5. 在.babelrc.中创建 {
  "presets": [
    "es2015"
  ],
  "plugins": []
}
6. 在package.json中设置   "scripts": {
    "build": "babel index-es6.js -o index.js"
  }
  下次打包直接用cnpm run build转到index.JS中

注意：**这里将es6的js写在单独的文件中，容易区分。下次打包到上线地址是打包后的文件**
```

## 判断IOS相机是否旋转

```js
setTimeout(() => {
  var orient = getPhotoOrientation($('.uploadImg')[0])
  //旋转了90°，需要做处理
  if (orient == 6) {
    rotate = 1
    alert(1)
  } else {
    rotate = 0
  }
}, 0.001)
// 处理IOS图片传送至后台旋转的问题
function getPhotoOrientation(img) {
  var orient
  EXIF.getData(img, function() {
    orient = EXIF.getTag(this, 'Orientation')
  })
  return orient
}

 <script src="https://cdn.jsdelivr.net/npm/exif-js"></script> // 引入文件
```

## 评分插件

```js
  // 基于Jquery
  demo地址：'http://www.fxss5201.cn/project/plugin/fxss-rate/'
  github地址：'https://github.com/fxss5201/fxss-rate'

```

## 快速取对象值的方法

```js
var obj = {1: 1, 2: 2, 3: 3};
var arr = [1, 2];
var newObj = JSON.stringify(obj, arr);
/*
  JSON.parse(newObj)
  {1: 1, 2: 2}
*/
```

## 避免多个变量声明

```js
// 避免
var i = 0;
var j = 1;
var m = 2;
// 提倡
var i = 0;
    j = 1;
    m = 2;
// 避免
var obj = {}
obj.name = '张三';
// 提倡
var obj = {
  name: '张三'
}
```

## calc,计算属性

```js
  div {
    width: calc(100% - 100px);
  }
```

## 移除被点链接的点框

```js
  a {outline: none}
   或者
  a {outline: 0}
```

## Object.values()

```js
  var obj = {
    1: 1,
    2: 2,
    3: 3
  }

  var arr = Object.values(obj);
  // arr => [1, 2, 3]
  // Object.values可将对象值转为数组
```

## 用来设置网站图标标签大小

```js
   <link rel="icon" href="" type="hq" sizes="16*16">
```

## 兼容各个浏览器的事件处理

```js
   // 解决各浏览器
    var EventUtil = {

      addHandler: function (element, type, handler) { //添加事件
        if (element.addEventListener) {
          element.addEventListener(type, handler, false); //使用DOM2级方法添加事件
        } else if (element.attachEvent) { //使用IE方法添加事件
          element.attachEvent("on" + type, handler);
        } else {
          element["on" + type] = handler; //使用DOM0级方法添加事件
        }
      },

      removeHandler: function (element, type, handler) { //取消事件
        if (element.removeEventListener) {
          element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
          element.detachEvent("on" + type, handler);
        } else {
          element["on" + type] = null;
        }
      },

      getEvent: function (event) { //使用这个方法跨浏览器取得event对象
        return event ? event : window.event;
      },

      getTarget: function (event) { //返回事件的实际目标
        return event.target || event.srcElement;
      },

      preventDefault: function (event) { //阻止事件的默认行为
        if (event.preventDefault) {
          event.preventDefault();
        } else {
          event.returnValue = false;
        }
      },

      stopPropagation: function (event) { //立即停止事件在DOM中的传播
        //避免触发注册在document.body上面的事件处理程序
        if (event.stopPropagation) {
          event.stopPropagation();
        } else {
          event.cancelBubble = true;
        }
      },

      getRelatedTarget: function (event) { //获取mouseover和mouseout相关元素
        if (event.relatedTarget) {
          return event.relatedTarget;
        } else if (event.toElement) { //兼容IE8-
          return event.toElement;
        } else if (event.formElement) {
          return event.formElement;
        } else {
          return null;
        }
      },

      getButton: function (event) { //获取mousedown或mouseup按下或释放的按钮是鼠标中的哪一个
        if (document.implementation.hasFeature("MouseEvents", "2.0")) {
          return event.button;
        } else {
          switch (event.button) { //将IE模型下的button属性映射为DOM模型下的button属性
            case 0:
            case 1:
            case 3:
            case 5:
            case 7:
              return 0; //按下的是鼠标主按钮（一般是左键）
            case 2:
            case 6:
              return 2; //按下的是中间的鼠标按钮
            case 4:
              return 1; //鼠标次按钮（一般是右键）
          }
        }
      },

      getWheelDelta: function (event) { //获取表示鼠标滚轮滚动方向的数值
        if (event.wheelDelta) {
          return event.wheelDelta;
        } else {
          return -event.detail * 40;
        }
      },

      getCharCode: function (event) { //以跨浏览器取得相同的字符编码，需在keypress事件中使用
        if (typeof event.charCode == "number") {
          return event.charCode;
        } else {
          return event.keyCode;
        }
      }

    };
    handler = function() {
      console.log('点击了。');
    }
    var command = document.querySelector('a');
    console.log(command);
    EventUtil.addHandler(command,"click",handler);
```

## DOMO,DOM2

- DOMO: onclick注册事件;
- DOM2: addEventListener('click', function(){}, false);

## 数组合并

```js
  var arr = [1, 2, 3];
  var arr2 = [4, 5, 6];
  var arr3 = arr.concat(arr2);
  // arr3 => [1, 2, 3, 4, 5, 6];

  or(或者):

  arr.push.apply(arr, arr2);
```

## 对象合并

```js
  var obj1= {'a': 1};
  var obj2= {'b': 1};
  var obj3 = $.extend({}, obj1, obj2)
  //obj3 => {'a': 1, 'b': 1};
```

## 对象的深拷贝与浅拷贝

```js
   var obj1= {'a': 1};
   var obj2= {'b': 1};
   $.extend(obj1, obj2); // obj1浅拷贝了obj2的属性（仅拷贝了对象的指针而已，所以原对象发生改变后，自己也会跟着改变）
   obj2.b = 2;
   // obj1.b => 2;

   --------------------深拷贝-------------------

    var obj1= {'a': 1};
   var obj2= {'b': 1};
   $.extend(true, obj1, obj2); // obj1深拷贝了obj2的属性（传true后就不受原对象的影响了）
   obj2.b = 2;
   // obj1.b => 1;
```

## 对象的扩展  $.fn.extend

$.fn.extend({
  fn1: function(a, b) {
    return a - b
  }
})
相等于
$.prototype.fn1

## Markdown插入图片

```js
  ![图片名称 Alt](./src)
```

## 实现三角形

```js
  .xygj.rate .section-title:before {
  top: 4px;
  left: 0;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  // 让鼠标不能捕获
  pointer-events: none;
  border-color: rgba(7, 128, 213, 0);
  border-bottom-color: #0780d5;
  border-width: 11px;
  margin-left: -11px;
  transform: rotate(135deg);
}
```

## 背景渐变

```js
  background: -webkit-linear-gradient(#183eda, #23b4ff);
  /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#183eda, #23b4ff);
  /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#183eda, #23b4ff);
  /* Firefox 3.6 - 15 */
  background: linear-gradient(#183eda, #23b4ff);
  /* 标准的语法 */
```

## Object

```js
  o.hasOwnProperty("x"); // o对象里面是否有这个属性
  arr.includes('x'); // 判断arr数组里面是否有这个值
  Object.keys(obj);  // {1: 1, 2: 2}  => [1, 2];
  Object.is(a, b); // 判断两个值是否完全相同（值与类型）
```

## 将数组，对象，数字，字符串设为空

```js
  objectNull(obj) {
    for (var key in obj) {
      if (Array.isArray(obj[key])) {
        obj[key] = []
      } else if (typeof obj[key] === 'object') {
        obj[key] = {}
      } else if (typeof obj[key] === 'number') {
        obj[key] = 0
      } else {
        obj[key] = ''
      }
    }
    return obj
  },
```

## 异步加载图片

```js
    // 异步加载图片
  loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
      var image = new Image()
      image.src = url
      // 图片加载成功
      image.onload = function () {
        resolve(image)
      }
      // 图片加载失败
      image.onerror = function () {
        reject(new Error('Could not load image at ' + url))
      }
    })
  }
  // loadImageAsync(url).then(img => {w = img.width;})
  })
```

## npm install

> 如果执行了`npm i`,先去node_modules目录中去找有没有指定的模块，如果有就不安装了，即使远程仓库有新版本（npm install git://github.com/package/path.git，如果您希望强制安装，则输入`npm install <packageName> -f`
> `devDependencies`用于本地环境开发时候。`dependencies`用户发布环境

## package-lock.json，shrinkwrap

1. 其实用一句话来概括很简单，就是锁定安装时的包的版本号，并且需要上传到git，以保证其他人在npm install时大家的依赖能保证一致。

## 低耦合

- 什么是低耦合: 说简单点就是这段代码通用。

## 兼容H5标签

```js
  //  <!-- 小于等于 ie 8 才进行引包, 用于兼容 html5 语义化标签 -->
  <!--[if lte IE 8]>
    <script src="./html5shiv.js"></script>
   <![endif] -->

  动态创建一个元素：document.createElement("header");
```

## DOM操纵优化点

1. ajax渲染数据之前应该将数据先总和在一起，然后在一起innerHTML渲染；
2. 修改DOM样式：```el.style.cssText = 'border-left: 1px; border-right: 2px; padding: 5px;```
3. 将所有```<script>```标签放置在页面的底部，紧靠body关闭标签```</body>```的上方。这样可以保证页面在脚本运行之前完成解析

## 滚动动画插件集合

- 让数字，条目，柱状图根据滚动条响应的插件；jquery.running.js
- 滚动到一定位置展示的动画WOW.js （依赖Animate.css）

## output标签

- 执行计算，显示结果的标签

## 如何实现文字两端对齐

```js
  <div>手机号</div>
  <div>姓名</div>

  <style>
    div {
       margin:10px 0;
       width:100px;
       border:1px solid red;
       text-align-last: justify;
     }
  </style>
```

## ajax全局事件

```js
    $(document).ajaxSend(function () {
        alert('发送请求之前执行');
    }).ajaxComplete(function () {
        alert('请求完成后，不管是否失败成功');
    }).ajaxSuccess(function () {
        alert('请求成功后');
    }).ajaxError(function () {
        alert('请求失败后');
```

## Markdown流程图

```flow
st=>start: 开始
e=>end: 结束
op1=>operation: 起步
op2=>operation: 完成
cond=>condition: 判断

st->op1->cond
cond(yes)->op1
cond(no)->op2->e
```

## onload与onDOMContentLoaded

| |window.onload|document.onDOMContentLoaded|
| -- | ------ | -----|
| 描述 | 当资源以及依赖项加载完成触发 | 当HTML文档加载完触发（不包含外联的文件）|
| 目标 | window | document |

## 标签集合

```js
*通过 <optgroup> 标签把相关的选项组合在一起*
 <select>
  <optgroup label="Swedish Cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
  </optgroup>
  <optgroup label="German Cars">
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </optgroup>
</select>
----------------------------------------------------------------------------------
*HTML <dl> 标签*
<dl>
   <dt>计算机</dt>
   <dd>用来计算的仪器的（内容） ... ...</dd>
   <dt>显示器</dt>
   <dd>以视觉方式显示信息的装置（内容） ... ...</dd>
</dl>
----------------------------------------------------------------------------------
*秘钥*
<keygen></keygen>
----------------------------------------------------------------------------------
*em*
<em>定义强调文本</em>
----------------------------------------------------------------------------------
*pre
<pre>
&lt;html&gt;

&lt;head&gt;
  &lt;script type=&quot;text/javascript&quot; src=&quot;loadxmldoc.js&quot;&gt;
&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;

  &lt;script type=&quot;text/javascript&quot;&gt;
    xmlDoc=<a href="dom_loadxmldoc.asp">loadXMLDoc</a>(&quot;books.xml&quot;);
    document.write(&quot;xmlDoc is loaded, ready for use&quot;);
  &lt;/script&gt;

&lt;/body&gt;

&lt;/html&gt;
</pre>
----------------------------------------------------------------------------------
*code*
- 只用在表示计算机程序源代码或者其他机器可以阅读的文本内容上
- 暗示这段文本是源程序代码
- 用于写单行的代码，如果要写一段段则需要<pre>
<code></code>
----------------------------------------------------------------------------------
*table*
<table>
  <thead>
    <tr>
      <th>
        我是加粗居中的，哈哈哈！
      </th>
      <td>
        我是专门放普通字体与标签的的，哈哈哈！
      </td>
    </tr>
  </thead>
  <tbody></tbody>
  <tfoot></tfoot>
</table>

- 优点：不必等整个表格都下载完后显示，而是先显示tbody的东西。比网页其他的内容先下载下来，可以让用户看到网页的实质性。
------------------------------------------------------------------------------------
*dl，dt，dd*
<dl>
  <dt>苗杰</dt>
  <dd>我是帅帅的苗杰</dd>
  <dd>我是酷酷的苗杰</dd>
</dl>

- dt: 标题，dd: 描述。
```

## 数组去重

```js
  var arr = [1, 2, 3, 1];
  var newArr = [...new set(arr)]; // [1, 2, 3]
```

## es6遍历

```js
  for(let [index, item] of arr.entries()) {
    // index->下标 item->值
  }
```

## 解决npm install下载慢的问题

```js
  npm install --registry=https://registry.npm.taobao.org
```

## Promise

```js
  // 简单案列
  function Promise( imgUrl ) {
    new Promise(function(resolve, reject)){
        var img = new Image()
        img.src = imgUrl
        // 异步操作
        img.onload = function() {
        resolve(img)
      }
        img.onerror = function() {
          reject('500')
        }
    })
  }
  Promise('https://uploadimgSrc.com').then(val) {
    imgWidth = val.width;
  }
  .catch(val) {
    alert(val);
  }
  // 经典操作（ 状态传递 ）
    new Promise(function(resolve, reject)){
      setTimeout(function(){
        resolve(bannerList)
      }, 1000)
    })
  Promise.then(function(bannerList) {
    // 到这里说明最新的banner列表，在执行某些方法
    return bannerList
  })
  .then(function(data) {
    return promise2
  })
```
 
## VI编辑器基本命令

* 进入VI后，`i`进入编辑模式
* `Esc`退出编辑，`:q!`强制离开

## animation动画基本理解

```js
  animation: dong 1s steps(12) infinite(如果有多个函数，隔开);
dadad
  **dong为设定好的状态函数**
  @keyframes dong {
    0%: {
      background-position: 0 0;
    }
    100%: {
      background-position: 0 -1512px;
    }
  }
  0% -> from   100% -> to

  定义这个动画的盒子
  animation-duration: 0.8s(如果有多个函数，隔开)   注意：与transition不一样，这个只能设置动画效果
 ```

 ## indexedDB 数据库的各种操作

* 用于存储数据
* 大量数据操作就用indexedDB
* 优点： 存储的信息更加明了，可以存储对象进去，直接可以获取主键，用于存储大量的数据
 https://blog.csdn.net/qiqingjin/article/details/53435863

 ## 防止流氓网站（Frame）将你的网页嵌入自己的网页

 ```js
//  在头部引入
 <script type="text/javascript">
   if (window!=top)  // 判断当前的window对象是否是top对象
   top.location.href =window.location.href; // 如果不是，将top对象的网址自动导向被嵌入网页的网址
 </script>
```

 ## QRCode.js(二维码)

[http://code.ciaoca.com/javascript/qrcode/]

## call与apply的妙用

```js
--- 运用apply调用函数 ---
  function fn1(a, b) {
    return a + b
  }
  function fn2(a, b) {
    return a - b
  }
  fn1.apply(fn2, [1,2]); // fn2调用了fn1方法，传递1,2进去，并且返回 1 + 2
  fn1.call(fn2, 1, 2);

--- 继承 ---
  function Cat(dog) {
    this.name = 'wowowow'
    this.dog = dog
  }

  function Dog() {
    cat.call(this); // 就有name值了
    cat.call(this, 18); // dog的年龄为18
  }

  var dog = new Dog()
--- 列子 ---
* Math.max.apply(null, [1,2,3]) // 获取数组最大值
* Math.min.apply(null, [1,2,3]) // 获取数组的最小值
* var arr1 = [1, 2, 3];   var arr2 = [4, 5, 6];  ---> Array.prototype.push.apply(arr1, arr2);  // arr1追加arr2
```

## parseFloat 与 parseInt

- parseInt: 遇到小数点会停止解析,解析字符串为数字（16进制转为数字，2进制转数字）-> var num = 'abc'  parseInt(num, 16) -> 2748
- parseFloat： 转为数字

## 扩展jq方法

```js
 $.fn = jQuery.fn = jQuery.prototype;
 $.fn.abc = function(a, b) {
   return a - b;
 }
```

## ES6 模块化

```js
  // a.js
  var a = 111;
  function fn() {
    console.log('fn');
  }
  export { a, fn }
  // b.js
  import { a, fn } from './a.js'
  console.log(a)
  fn()

  // b.js中有a了，就可以起[别名]
  import { a as a1, fn } './a.js'
  // 还有一种情况，将A看为一个对象
  import * as A from './a.js'
  console.log(A.a)
  console.log(A.fn())
  // 笨方法，一个一个导出，会导致导出的值不统一，不直观
  export c1 = 222;
  export function fn() {}
  // export default（加一个default其实就是引入的时候少一个大括号，直接起别名）
  export default c1 = 222;
  import c1111 from './a,js';  -> import c1 as c111 from './a.js';
```

## 注册事件

```js
  var obj = {
    name: 'tom',
    handleEvent: function(e) {
      // this -> obj
      switch(e.type) {
        case 'click':
          cosole.log('trigger')
      }
    }
  }
  document.addEventListener('click', obj, false);
```

## C# 与 .net

> 读C sharp：一种实现功能的语言
> .net：微软推出的一种编程环境。

## 编译型语言，解释性语言，混合性语言

### 编译性语言

#### 代表：C，C++，Pascal（结构化编程语言），Object-c

> 编译性语言：代码运行时转化为机器码，运行时进行预编译一次，然后通过链接将关联的文件关联起来运行，不需要环境也可以独立执行。
> 优点：性能高，因为在编译前会预编译一次
> 缺点：每次修改都会全部编译一次

### 解释性语言

#### 代表：JS，PHP，Python

> 解释性语言：在运行程序时会翻译该语言
> 优点；良好的兼容性，在任何环境都可以执行，前提是安装了虚拟机
> 缺点：性能没有编译性语言高，每次运行都要解释一次

### 混合性语言

#### 代表作：C#

> 混合型语言：在运行前先将代码转为中间码，通过.NET平台识别中间码，保存dll中，缓存在内存中，下次之间执行缓存的代码
> java执行前先在java虚拟机中解释语言
> 严格来说C#更像编译性语言，也是编译代码执行

## 动态语言，静态语言

### 动态语言

> 动态语言：改变了原先的代码结构
 
### 静态语言

> 静态语言：运行代码之前就写好了类型，进行判断代码是否合法


## 动态类型语言，静态类型语言

### 动态类型语言

> 动态类型语言：代码运行时才会检测数据类型
> 代表：JS，Python，PHP

### 静态类型语言

> 静态类型语言：编写代码时就会检测数据类型
> 代表：Java，C#，C，C++

## 强类型语言，弱类型语言

### 强类型语言

> 代码类型定以后不允许修改为其他类型
> 代表：Java，Python

### 弱类型语言

> 一个变量可以声明不同的值
> 代表：JS，PHP

## css的奇妙写法

1. 选择偶数的选择器  `div: nth-of-type(2n) {}`
2. 选择第5-10的位置的div `div :nth-child(n+5) :nth-child(-n+10) {}`
3. 文字两边对齐  `text-align-last: justify`
4. 改变光标的颜色 `caret-color: red`

## JS奇妙写法

1. 遍历  `var i = 0; for(; i < 20; i++) {}`
2. 函数自执行  `(function(){})()    (function(){}())  [function(){}]  ~ function(){} + function(){} !; -; delete function(){}()  new function(){}()`
3. 定义undefined `var data = void 0; // undefined`
4. 长度为6，值都为8  `Array(6).fill(8)`
5. 短路 
```js
  var a;
  if(b) {
    a = b
  }else {
    a = 1
  }
  写成:
  var a = 1 && b
```
6. 让浏览器不报错 
```js
  window.onerror = function() {
    return true;
  }
```
7. 取数组最大值  `Math.max(...[1, 2, 3])`
8. 交换值 
```js
var a = 1, b = 2
[a, b] = [b, a];
```
9. 将argruments对象转为数组 Array.from(argruements)
10. 展示页面的cookie   `alert(document.cookie)`

fastclick.js 解决移动端300ms的延迟

## ajax格式

```js
 $.ajax({
   headers: {token: 12},
   contentType: 'application/json', 【发送时候的格式】
   data: JSON.stringify({})  【设置了json格式加入JSON.stringify()】
   timeout: 10000, 【超过设置的时间默认失败】
   dataType: 'json', 【预算接受的格式】
   beforeSend: function() { 【发送请求之前，一般用于loading】 },
   complete: function() { 【当请求完成时调用的函数，无论成功与失败】 }
 })
```

## 判断格式

```js
  objectNull(val) {
      if (Array.isArray(val)) {
        val = []
      } else if (Object.prototype.toString.call(val) === '[Object Object]') {
        val = {}
      } else if (typeof val === 'number') {
        val = 0
      } else if (typeof val === 'undefined') {
        val = undefined
      } else if (!val && typeof (val) != "undefined" && val != 0) {
        val = null
      } else if (isNaN(val)) {
        val = NaN
      } else {
        val = ''
      }
    return obj
  }
```

## 判断属性是否在对象内

```js
  var obj = { a: 11 }
  'a' in obj //true
  !!obj.a // true
  obj.hasOwnProperty('a') // true
```

## 找出字符串对应的字母

```js
  var str = 'asdfghhhh';
  str.charAt(0) // a
  str[0] // a
```

## 函数调用

```js
  function a() {}
  function b() {}
  var x = 1
  if(x === 1) {
    a()
  }else {
    b()
  }
  ------>
  (x === 1?a:b)();
```

## 对应的时间戳

``` moment([2019, 0, 16, 0, 0, 0, 0]).valueOf() ```  【注意】：momentjs月数比实际月要多一个月比如： 11月代码就要写为12月

## 连接字符串

` str1.concat(str2) `

## 字符串遍历

` for( let val in 'str' ) `  // val : s t r

## 将字符串重复n次

` 'hello'.repeat(2) | 'hello'.repeat(2.9) ` //  hellohello

## padStart()，padEnd() 指定数字后补全

` 'x'.padStart(5, 'ab') ` ababx
` 'x'.padEnd(5, 'ab') ` xabab

## reduce

` [1, 2, 3, 4, 5].reduce((x, y) => x + y) ` 求和

## 转数组

- Array.form([1, 2, 3])
- Array.prototype.slice.call([1, 2, 3])

```js
  Array.form
  console.log(Array.from('foo'));
  // expected output: Array ["f", "o", "o"]
  
  // 第二个参数：生成的数组为处理后的数组 x => 对应的值
  console.log(Array.from([1, 2, 3], x => x + x));
  // expected output: Array [2, 4, 6]
  
  // 获取字符串的长度
  Array.form(string).length
  
  // 控制函数的执行次数
  Array.form({length: 3}, _ => { console.log('我要执行3次！！！') })
```

## 修改选中文字后样式

```js
    ::selection { background:#409eff; color: #ffffff; }
   ::-moz-selection { background:#409eff;color: #ffffff; }
   ::-webkit-selection { background:#409eff; color: #ffffff; }
```

## 判断设备信息

```js
  var browser = {
  versions: (function() {
    var u = navigator.userAgent,
      app = navigator.appVersion
    return {
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
      weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
      isIE9 : UA && UA.indexOf('msie 9.0') > 0, // 判断是否为IE9
      isEdge : UA && UA.indexOf('edge/') > 0; // 判断是否为edge
    }
  })(),
  language: navigator.language.toLowerCase()
}

//实际使用的时候如下：
if (browser.versions.webKit) {
  console.log('谷歌内核')
}

```
## arguments

用于获取函数参数不确定的时候
【注意】：箭头函数没有grguments伪数组

`arguments[0]:第一个参数`

## grid布局

grid：网格布局，二维布局
属性

```js
  .container: {
    display: grid; // 定义为grid布局；
    grid-template-columns: 100px 100px; // 定义两列为宽度100px； 100|100|
    grid-templete-rows: 100px 100px; // 定义两行高度为100px; -100 -100
    grid-gap: 40px 10px; // 定义网格之间的间隙  第一参数行与行间隙，第二个列与列间隙
    grid-column-start: 2; // 列开始
    grid-column-end: 4; // 列结束
    grid-row-start: 1; // 行开始
    grid-row-end: 2; // 行结束
    grid-area: 3 / 1 / 4 / 4; // 行开始，列开始，行结束，列结束
  }

  --- 几种常见的布局 ---
1. 两边固定，中间自适应
` grid-template-columns: 100px 1fr 100px `
2. 宫格代码
 .container {
  display: grid;
  text-align: center;
  line-height: 100px;
  width: fit-content;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px;
  grid-gap: 10px 20px;
}

.item {
  background-color: aqua;
  border-right: 2px solid #000000;
  border-bottom: 2px solid #000000;
}

.container :nth-child(3n) {
  border-right: none;
}

.container :nth-child(n+4):nth-child(-n+6) {
  border-bottom: none;
}
3. 页面布局
.container{
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 50px 300px;
}
.header{
    grid-area: 1 / 1 / 2 / 3; // 注意列为3最大行为2；
}
```

## css计算属性

- 计算可视区的高度 `calc(100vh)`
- 注意：使用原生JS获取不到css外联的样式的宽度与不设置元素宽度的宽度，可以通过JS的offsetWidth来获取（offsetHeight获取内外补丁与border）

## 区分IOS与android

```js
    //判断是否为ios端访问
   function _IsIOS() {
       if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
           return true;
       } else {
           return false;
       }
   }
   //判断是否为android端访问
   function _IsAndroid() {
       if (/(Android|Adr)/i.test(navigator.userAgent)) {
           return true;
       } else {
           return false;
       }
   }
   // IOS与android交互
   `WKWebView-MessageHandler`   JS中调用分享：window.webkit.messageHandlers.share.postMessage(param);
```

## 鼠标滚动整屏滚动插件

[整屏滚动插件](http://www.dowebok.com/demo/181/index4.html#slide4)

## sass

[sass技巧](https://www.jianshu.com/p/ef2ca6fbf944)
$.box($代表父class)

## bootstrap表单验证

[bootstrapValidator使用](https://www.cnblogs.com/woodk/p/5546847.html)

## 解决vue的webpack不对部分css打包的问题

```js
  .box {
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  }
```

## 解析http网站

```js
  var str = '这是一个很好玩的网站：https://www.baidu.com哈哈哈'
  var reg = /(https?|http):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
  var urls = str.match(reg); // urls -> https://www.baidu.com
  for (const key in urls) {
    if (urls.hasOwnProperty(key)) {
      const url = urls[key]
    }
  }
```

## 对url进行编码

` encodeURIComponent(URIstring) `

## 第三方登陆流程

[获取Appid](https://www.qifeiye.com/%E5%A6%82%E4%BD%95%E8%8E%B7%E5%BE%97qq%E7%99%BB%E5%BD%95%E7%9A%84appid%E5%92%8Ckey%EF%BC%9F/)
[第三方登陆流程](https://www.cnblogs.com/v-weiwang/p/5732423.html)

## Vue配置环境

1. [Vue配置测试与开发环境](http://returnc.com/detail/3740)

2. Vue配置启动时的环境：1. 在build中赋值webpack.dev.js,创建一个同级的webpack.devtest.js，将`'process.env': require('../config/dev.env')` 改为`'process.env': require('../config/devtest.env')` 2. 在config文件中赋值dev.env.js，创建一个同级的devtest.env.js文件，将API_ROOt（启动项目的地址改为其他环境）修改为其他环境 3. 在package.json中找到scripts，添加`"dev:test": "webpack-dev-server --inline --progress --config build/webpack.devtest.conf.js"`

3. [Vue配置打包环境](https://segmentfault.com/a/1190000016664571)



## Vue不同组件引入公共子组件时，改变样式

```js
<style scoped>
  .box >>> .courseContentList {
    border: 1px solid #ccc;
  }
</style>
```

## Vue接受父组件传递过来的数据验证

```js
  props: {
    A: Number,
    B: [String, Number]
    C: null,    // null：任何类型
    // 如果子组件未接受到值，或者是接受的值不一致时定义的默认值
    B: {
      type: Number,
      default: 101
    },
    D: {
      type: Object,
      default: function() {
        return { message: '呵呵呵' }
      }
    },
    // 自定义验证函数
    E: {
       isValid: function(value) {
        return value > 100;
      }
    }
  }
```

## JS中的.map文件

[map文件详解](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)

> 我们一般引入的插件基本都是压缩后的代码，调试会非常困难，map文件就是解决这些问题的，他会返回原始代码而不是压缩后的代码

## vue文件的说明

- 1. build: webpack打包构建环境时的配置
- 2. cinfig：配置环境，打包后的文件..
- 3. src: 项目文件
- 4. dist: 打包后的文件
- 5. static: 静态文件（公共css，图片..）
- 6. .babelrc: 解决兼容问题的文件
- 7. .editorconfig: 开发规范定义文件
- 8. .eslintignore： esList不进行效验的文件
- 9. .eslintrc：配置esList的效验规则的文件
- 10. .gitignore：配置git忽略管理的文件
- 11. .postcssrc：打包后的css添加私有属性文件

## 禁止选中文字

```js
  -webkit-touch-callout: none; /* iOS Safari */

  -webkit-user-select: none; /* Chrome/Safari/Opera */
  
  -khtml-user-select: none; /* Konqueror */
  
  -moz-user-select: none; /* Firefox */
  
  -ms-user-select: none; /* Internet Explorer/Edge */
  
  user-select: none; /* Non-prefixed version, currently
  
  not supported by any browser */
```

## 禁止点击

`pointer-events: none;`

## 判断类型

```js
var _toString = Object.prototype.toString;
// 对象类型
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}
// 数字类型
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Number]'
}
// regExp类型
function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}
// 布尔类型
function isRegExp (v) {
  return _toString.call(v) === '[object Boolean]'
}
// null类型
function isRegExp (v) {
  return _toString.call(v) === '[object Null]'
}
// 数组类型
function isRegExp (v) {
  return _toString.call(v) === '[object Array]'
}
// 字符串类型
function isRegExp (v) {
  return _toString.call(v) === '[object String]'
}
```

## 冻结一个对象
> 不能赋值修改
`var emptyObject = Object.freeze({})`

## 查看元素

`nodeName === 'DIV' nodeValue:元素里面的值`


## 判断对象是否存在这个值

```js
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}
```

## 字符串返回指定位置的unicode编码

`str.charCodeAt(1)`

> 补充：unicode码的优点：突破ASCII码256个字符的限制而诞生的，unicode码为每个字符都提供唯一的数字

## 字符串返回指定位置的字符串

`str.charAt(1)`

## 判断IE浏览器

`if('__proto__' in {}){非IE}else{IE}`

## entries方法

```js
  var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  firits.entries()

  /** 
   * {
   *  [
   *   0, 'Banana'
   *  ]...
   *  }
   * 
   * 
  */
```

## Set与Map类型

```js
 [Set]:
 var set = new Set([1,2,3,1,1])
 console.log(Array.form(set)) // [1,2,3]

 set.add(4) // [1,2,3,4]
 set.clear()
 Array.form() // []
 set.delete(2) 
 Array.form(set) // [1,3,4]
 set.has(3) // true

 // 找到一样的值
 var intersect = (set1, set2) => {
    return new Set([...set1].filter(x => set2.has(x)));
}
console.log(intersect(new Set([1,2,3,4]), new Set([2,3,4,5]))); //输出：Set {2,3,4}
 --------------------------------------------
 [Map]:
 var map = new Map();
 map.add('a', 1);
 map.add('b', 2);
 map.delete('a');
 console.log(map) // {b: 2}
 ```

 ## 获取数组最后下标的值

 `arr.slice(-1)[0]`

 ## 判断原生是否支持

 ```js
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

typeof Symbol !== 'undefined' && isNative(Symbol) // 是否支持Symbol
typeof Set !== 'undefined' && isNative(Set)
typeof Promise !== 'undefined' && isNative(Promise)
 ```

 ## 验证手机号

 `/^1[3456789]{1}\d{9}$/`

 ## html中执行事件

 ```js
 play() {
   console.log(播放)
 }
 // 在a链接执行以上事件
 href="javascript:play('http://ivi.bupt.edu.cn/hls/cctv6.m3u8');
 ```

 ##  arguments对象的使用

 > 注意：箭头函数没有arguments，arguments是一个伪数组（Array.form(arguments)）

```js
  function arguments(n, b) {
    console.log(arguments[0], arguments[1])
  }

  arguments(1, 4);

  // 1 4  

- 大多数情况下用于一个函数多次调用，需要区分参数的情况下
```

## Proxy对象的使用

```js
const hander = {
  get: function(obj, prop) {

  },
  /**
   * @param {Object} - 对象原始值
   * @param {String} - 传入的key值
   * @param {*} - 传入的value值
   * 
   */
  set: function(obj, prop, value) {
    if (Object.prototype.toString.call(value) !== '[object String]') {
      // setting error information 设置报错信息
      throw new Error('传入的类型不正确！')
    }else {
      // if the input is correct 如果传入的正确，则赋值
      obj[prop] = value;
    }
  }
}

let obj = {};
var proxyObj = new Proxy(obj, hander);

proxyObj.name = 1;
```

## Xhell6命令简单应用（目前仅用于备份）

- 切换目录 `cd 文件名` 2. `cd ~` 切换到主目录
- 查看当前目录的文件 `ll`
- 删除文件  1. `rm *`删除当前目录的所有文件  2. `rm -rf 文件名` 删除指定的文件  3. `rm -i a*` 删除a开头的文件，并且提示用户确认
- 备份文件 `tar -zcvf beifen.tar /目录名`

## 上传图片至阿里云

![上传图片至阿里云文档](https://blog.csdn.net/shidewen1125/article/details/53442820)

## video标签

- video包含<source src="^.mp4"></source>:用于兼容一些视频格式
- video中poster属性：无法数据时加载的图片

## 根据不同的User-Agent来访问不同的网站

> 说明：每次访问网站都在请求头部携带UA，根据不同的UA来给用户呈现不同的排版

nginx代码
```js
	if ($http_user_agent ~ "(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)") {
           root  E:/temp/phone;
           }
  #index  index.html  index.htm;
```

## nginx命令

> 命令行工具跳转至nginx文件夹下，配置哪些文件需要放至服务器上，在nginx.conf中配置，这样就可以模仿文件夹在服务器上的操作了

1. 启用服务： `start nginx.ex`
2. 停止服务： `nginx.exe -s stop`

## jquery扩展功能

```js
$.extend({})
```
## git简写配置  

- [git简写配置](https://www.cnblogs.com/mamaguai/p/8081826.html)

## css的:not

```js
  // 类名不为fancy的p标签
  p:not(.fancy) {}
  // body下面不为p标签
  body :not(p) {}
  // body下不为div与span
  body :not(div):not(span) {}
```
## font-weight的问题

> 当我们发现设置`font-weight: 400 | 700`都不符合我们审美时，可以适当的设置`font-size: *%`查看

## h5的cookie操作

- [cookie操作](https://www.cnblogs.com/jf-67/p/9096911.html)

## vue的provide/inject

> 解决深层的组件嵌套问题
- [讲解使用](https://blog.csdn.net/Garrettzxd/article/details/81407199)

## 图片懒加载(利用了函数节流技术)

- [](https://blog.csdn.net/lost_wen/article/details/62416521)

## nodeVPN

> 作用：在公用网络上设置专有网络（fanQiang）
> 使用：打开后设置为混淆模式，点击下面国家进行连接
> 技巧：1.尝试多连接几个国家，数字越大说明这个服务器刚出来 2.打开软件帮助中心，搜索china点击下方索引，官方就有推荐的服务点

## jsbridge使用

> 说明：jsbridge用于java（安卓）与H5功能数据的互调 (https://www.jianshu.com/p/c80ceb1ff417?from=groupmessage)

```js
 // 当然，在vue中注册的事件都是在组件中注册的，没有绑定至window中，所以我们要将指定的方法绑定至window中
 mounted() {
   window['fn'] = () => {
     this.fn1()
   }
 },
 methods: {
   fn1() {
     // to do something
   }
 }
```

## stylus预编译

> 省略括号的css预处理器
> 不需要添加return...

## ++i与i++

> 注意：当变量运算时，会有区别

```js
// 相同点
++a 与 a++ 
for(i = 0; i < 100; i++) { a++ }
for(i = 0; i < 100; i++) { ++a }
// 不同点
i = 0;
if(i++ < 10) {} // 这时i先比较，在i++ -> 1
if(++i < 10) {} // 这时i先+1

a = i++; // a = 0; i = 1;
a = ++i; // a = 1; i = 1;
```

## 判断元素是否为undefined与null

```js
  // 注意：只有这种情况下使用双等于
  if(obj == null) {  }
```

## $.get与$.post

> 一般用于简单的请求实列

```js
  $.post('url', data: 'params', function(data, status) {}, dataType: 'JSON')
```

## flat()与flatMap()

> flat: 拉平数组
> flatMap: 展开一层，获取新数组

```js
  var arr = [1, , 2, 3];
  arr.flat() // [1, 2, 3]

  arr = [1, [1, 2], 2];

  arr.flat() // [1, 1, 2, 2];
  arr = [1, [1, 1, [1, 2]], 1];
  // 拉平为一维数组
  arr.flat(Infinity) // [1, 1, 1, 1, 2, 1]
```

## 获取数组符合位置的下标

```js
  arr.findIndex(v => {})
```

## 获取系统占用的端口号

`netstat -an`
如果出现不是外部命令，是因为你当时不在系统文件中，输入`cd c:\WINDOWS\system32\`切换至系统文件中

## 获取某个链接是否可以正常链接

`ping 端口号`

## 兼容IE的css3，与h5标签的插件

`
  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
`

## vsCode快捷键

- Shift + Ctrl + f (搜索)
- Ctrl + o (打开当前的文件夹)
- Ctrl + e (打开最近打开的文件列表)
- Ctrl + h (替换代码)

## 直播格式

- [](https://www.cnblogs.com/qianduantuanzhang/p/7795044.html)

## vue实现WebSocket

- [](https://www.cnblogs.com/qisi007/p/10213886.html)

## normalize.css

1. 保护了浏览器有价值的默认属性
2. 对不同浏览器进行了一般化
3. 优化了部分css的BUG

- [](https://www.cnblogs.com/zhibu/p/5176838.html)

## 兼容ES6的插件

`<script type="text/javascript" src ="https://cdn.polyfill.io/v2/polyfill.min.js?features=es6"></script>`
- 支持promise，箭头函数...

## vue实现直播功能

- [](https://www.jianshu.com/p/a045f3bacb6f)

## ES6语法

1. Number.isFinite() 是否为有限循环
2. Number.isNaN() 是否为NaN
3. Number.parseInt(12.1) 转为数字 12 
4. Number.parseFloat(12.12￥) 转为数字 12.12
5. Number.isInterger() 是否为整数
6. Math.trunc(1.1) 转整数（移除小数点后面）   返回整数 Math.trunc(true) 1 false -> false
7. Math.sign(-1) -1   Math.sign(1) 1   Math.sign(0) +0 对于非数字先转数字
8. 指数运算符 2 ** 2 -> 2 * 2   |    2 ** 3 -> 2 * 2 * 2  

[](https://blog.csdn.net/qq_38718629/article/details/96994747)

## 宏任务与微任务

1. JS异步分为宏任务与微任务，先执行宏，在执行微，然而先拿微，后拿宏
2. script，setTimeOut: 宏  Promise,process.nextTick:微 

process.nextTick：Node.js技术

[](https://blog.csdn.net/lc237423551/article/details/79902106)
