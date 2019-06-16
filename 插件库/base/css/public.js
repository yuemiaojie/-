jQuery.extend({
  /**
   * 获取地址栏参数值
   * @author 苗杰
   * @param {String} -地址栏参数
   * @example - var id = getUrlParam('id')
   *
   */

  getUrlParam: function(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return decodeURIComponent(r[2])
    return null
  },

  // 在app中关闭H5页面，如果关闭失败，则用JS方法关闭，从而兼容PC端
  closePage: function() {
    try {
      hqBridge.closePage()
    } catch (e) {
      window.close()
    }
  },

  /**
   * 返回页面顶部
   * @param {String} - id|class
   * @example - $.goTop('.goTopBtn')
   *
   */
  goTop: function(elementy) {
    $gotop = $(elementy)
    //隐藏go to top按钮
    $gotop.hide()

    // 页面滚动事件
    $(window).scroll(function() {
      //当window的scrolltop距离大于200时，go to
      if ($(this).scrollTop() > 200) {
        $gotop.fadeIn()
      } else {
        $gotop.fadeOut()
      }
    })

    $gotop.click(function() {
      $('html, body').animate(
        {
          scrollTop: 0
        },
        800
      ) // 总耗间800ms
      return false
    })
  },

  // 数字万字格式化
  numberFormat: function(val, fixed) {
    var num = parseFloat(val)
    return num > 9999 ? (num / 10000).toFixed(2) + '万' : num.toFixed(fixed)
  }
})
