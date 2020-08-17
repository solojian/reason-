    import axios from 'axios'

    const instance = axios.create({
        // baseURL:'localhost:8080',
        timeout: 3000
    })

    export function request(config) {
        return instance(config)
    }