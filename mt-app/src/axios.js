import axios from 'axios'

//默认值
axios.defaults.baseURL = 'http://api.duyiedu.com'

axios.interceptors.request.use(function(config){
    //在发送请求之前做些什么
    // console.log(config)
    config.params = {
        //代表把之前的config放到这里，在加上后边的数据
        ...config.params,
        appkey:"jlhmn2_1556032109232"
    }
    return config
},function(error){
    //对请求错误做些什么
    return Promise.reject(error)
})

export default axios;