import React, { useState, useEffect } from "react"
import request from '../../api/requset'
import { Button, List } from 'antd-mobile'

import styles from "./home.css"


export default function Home(props) {
  const [data, setData] = useState("你就好啦")

  function loadData(params) {
    request({method: 'get', url: '/test/list', params: {name: '123'}}).then(res => {
      const {data} = res
      console.log(data)
    })
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <div className={styles.home_container} onClick={() => test()}>{data}</div>
    </div>
  )
}
