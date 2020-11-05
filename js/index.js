function flebix(){
    //获取设备宽度
     let d = document.documentElement.clientWidth  //  设计稿的宽度 参照设备 iphone 6/7/8
    // 根据设备宽度换算html: font-size值
    document.documentElement.style.fontSize = d / 7.5 + 'px'
}
flebix()
window.onresize = function () {
    flebix()
}