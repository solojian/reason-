
    // var Mock = require('mockjs')
    import Mock from 'mockjs'
    import List from './list.json'

    Mock.mock('/about','get',{data: List.data})
