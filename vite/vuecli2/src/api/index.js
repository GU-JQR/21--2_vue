const axios = require('axios');
import base from './base.js'

const api = {
    //注册
    register(params) {
        return axios.post(base.baseURL + base.register, params)

    }
}

export default api;