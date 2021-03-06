// 生产环境配置
module.exports = {

    url: {
        // 请求源  
        origin: 'http://ycpdapi.hotgz.com',
        
        // java 那边的请求源
        originJAVA: 'http://charging.sz2.ichebaoyang.com/charging',

        // 图片的请求源地址
        picture: 'http://ycpdapi.hotgz.com',
        
        // 初始化微信JS-SDK
        getWxConfig: 'http://picc.hotgz.com/wx/apiHandler.ashx',
    }
};
