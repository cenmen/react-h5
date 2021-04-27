import Mock from 'mockjs'

const baseUrl = '/h5'
const toRex = (url) => RegExp(baseUrl + url + '.*')
const getRandomStr = (length = 8) => Math.random().toString(36).slice(length);

const getQueryString = (url,name) => {
    let urlObj = new URL(url)
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = urlObj.search.substr(1).match(reg);
    if(r!=null)return unescape(r[2]); return null;
}

Mock.mock(toRex('/list'), 'get', (params) => {
    return Mock.mock({
        'dataSource|10-20':[{
            'id|+1': 1,
            'title|1':['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
            'content|1': ['你翻译不了我的声响', '数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘'],
            'action|1': ['下载', '试听', '喜欢'],
            'cover': Mock.Random.image('180x180')
        }]
    })
})
