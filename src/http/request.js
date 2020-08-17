
    import {request} from './axios.js'

    export const reqList = () => {
        return request({
            url: '/about',
            method: 'get'
        })
    }