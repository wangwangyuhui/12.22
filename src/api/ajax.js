/* ajax二次封装 
1. 配置通用的基础路径和超时
2. 显示请求进度条
3. 成功返回的数据不再是response, 而直接是响应体数据response.data
4. 统一处理请求错误, 具体请求也可以选择处理或不处理
*/

import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 配置通用的基础路径和超时
const service = axios.create({
    baseURL:'/api',//基础路径
    timeout:20000,//超时时间
})







//添加请求拦截器
service.interceptors.request.use((config)=>{
    // 显示请求进度调2
    // 显示在请求中拦截器中显示
    NProgress.start()



    //必须返回config
    return config  //后面会根据返回的的config ，使用xhr对象发ajax请求
})

//添加响应拦截器
service.interceptors.response.use(
    response => {//请求成功的返回回调
        //隐藏请求进度条 在响应成功中
        NProgress.done()


         /* 3. 成功返回的数据不再是response, 而直接是响应体数据response.data */
        return response.data
    },
    error=>{ //请求失败返回的回调
         //隐藏请求进度条 在响应失败中
         NProgress.done()
        
 /* 4. 统一处理请求错误, 具体请求也可以选择处理或不处理 */
        alert(error.message || '未知错误')



        return Promise.reject(error)
    }
)

//向外暴露 service
export default service
































// // 请求拦截器
// service.interceptors.request.use((config) => {
//     // 显示请求进度条
//     NProgress.start()


//     //必须 返回config
//     return config //后面就会根据返回的config，使用xhr对象ajax请求


// })


// //添加响应拦截器
// service.interceptors.response.use(
//     response => {//请求成功的返回回调
//         NProgress.done()
//         /* 成功返回的数据不再是response, 而直接是响应体数据response.data */
//         return response.data

//     },  
//     error => {//请求失败的回调
//         NProgress.done()
//        /*  统一处理请求错误, 具体请求也可以选择处理或不处理 */
//   alert (error.message || '未知错误')


//         //传递下去
//         // return reeor 不能折磨写
//         //throw error
//         return Promise.reject(error)

//     }
// )



// //伪代码↓
// // service.get('/xxx').then(result => {

// // }).catch(error => {
// //     //做一些提示之外的特定工作

// // })





// // 向外暴露service
// export default service