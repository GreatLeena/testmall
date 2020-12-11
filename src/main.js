import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
    // router,
    // store,
    render: h => h(App)
}).$mount('#app')

// axios({
//     url: 'http://123.207.32.32:8000/home/data',
//     params: {
//         type: 'pop',
//         page: 1
//     }
// }).then(res => {
//     console.log(res)
// })

//发送并发请求
// axios.all([axios({
//         url: 'http://123.207.32.32:8000/home/multidata'
//     }), axios({
//         url: 'http://123.207.32.32:8000/home/data',
//         params: {
//             type: 'pop',
//             page: 1
//         }
//     })])
//     .then(results => {
//         console.log(results)
//     })

// axios.all([axios({
//         url: 'http://123.207.32.32:8000/home/multidata'
//     }), axios({
//         url: 'http://123.207.32.32:8000/home/data',
//         params: {
//             type: 'pop',
//             page: 1
//         }
//     })])
//     .then(axios.spread((res1, res2) => {
//         console.log(res1),
//             console.log(res2)
//     }))


//默认配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// axios.all([axios({
//         url: '/home/multidata'
//     }), axios({
//         url: '/home/data',
//         params: {
//             type: 'pop',
//             page: 1
//         }
//     })])
//     .then(axios.spread((res1, res2) => {
//         console.log(res1),
//             console.log(res2)
//     }))

//创建对应的axios实例
// const instance1 = axios.create({
//     baseURL: "http://123.207.32.32:8000",
//     timeout: 5000
// })

// instance1({
//     url: '/home/multidata'
// }).then(res => console.log(res))

import { request } from "./network/request"
request({
        url: '/home/data'
    }).then(res => console.log(res))
    .catch(err => console.log(err))