import axios from 'axios'

export default function request({method, url, data, params, untie = true} = {}) {
    return axios({method, url, data, params})
}