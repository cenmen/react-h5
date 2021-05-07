import Mock from "mockjs"

const getPath = (url) => RegExp(url + ".*")

export default Mock.mock(getPath('/test/list'), "get", {
  "dataSource|5": [
    {
      "key|+1": 1,
      "title|1": ["哑巴", "Butter-fly", "肆无忌惮", "摩天大楼", "初学者"],
      "content|1": [
        "你翻译不了我的声响",
        "数码宝贝主题曲",
        "摩天大楼太稀有",
        "像海浪撞破了山丘",
      ],
      "action|1": ["下载", "试听", "喜欢"],
    },
  ],
})
