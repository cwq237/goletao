// 实现 一些公共的js 功能

// 什么时候开始,什么时候停

// 当ajax请求开始的时候,显示进度条
// 当ajax请求结束的时候,隐藏进度条
// jquery.ajax的全局事件
// jquery的ajax全局事件, 会在任意一个ajax请求执行的时候触发

// 6个全局事件
// ajaxStart  开始进度条
// ajaxSend  
// ajaxSuccess
// ajaxError
// ajaxComplete
// ajaxStop  结束进度条
// Nprogress.start()
// Nprogress.done()

$(document).ajaxStart(function(){
    // console.log('ajax开始发送了')
    NProgress.start()
})
$(document).ajaxStop(function(){
    // console.log('ajax发送结束')
    setTimeout(function(){
        NProgress.done()
    },5000)
})