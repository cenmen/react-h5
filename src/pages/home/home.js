import React, { useState, useEffect } from "react"
import request from '../../api/requset'
import { Button, List } from 'antd-mobile'

import styles from "./home.css"
import '../../mock/api'


export default function Home(props) {
  const [data, setData] = useState("你就好啦")

  function test(params) {
    request({method: 'get', url: '/test/list', params: {name: '123'}}).then(res => {
      debugger
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setData("最紧要开心")
      
    }, 1500)
  }, [])

  return (
    <div>
      <div className={styles.home_container} onClick={() => test()}>{data}</div>
    </div>
  )
}
