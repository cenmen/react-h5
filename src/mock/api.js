import Mock from 'mockjs'

const baseUrl = '/h5'
const toRex = (url) => RegExp(baseUrl + url + '.*')
const getRandomStr = (length = 8, str) => {
  str = str + Math.random().toString(36)
  if (str.length > length) {
    return str.slice(0, length)
  }
  return getRandomStr(length, str)
}

const getQueryString = (url) => {
  const query = url.split('?').pop().split('&')
  const obj = {}
  query.forEach((val) => {
    const arr = val.split('=')
    obj[arr[0]] = arr[1]
  })
  return obj
}

Mock.mock(toRex('/list'), 'get', () => {
  return Mock.mock({
    'dataSource|10-20': [
      {
        'id|+1': 1,
        'title|1': ['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
        'content|1': ['你翻译不了我的声响', '数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘'],
        'action|1': ['下载', '试听', '喜欢'],
        cover: Mock.Random.image('180x180')
      }
    ]
  })
})

Mock.mock(toRex('/detail'), 'get', (req) => {
  const { id } = getQueryString(req.url)

  return Mock.mock({
    id: id,
    'title|1': ['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
    'content|1': getRandomStr(500),
    'action|1': ['下载', '试听', '喜欢'],
    cover: Mock.Random.image('300x300')
  })
})
