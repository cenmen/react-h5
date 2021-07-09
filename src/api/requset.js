import axios from 'axios'

export default function request({method, url, data, params} = {}) {
    return axios({method, url, data, params})
}