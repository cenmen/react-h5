import React, { useState, useEffect } from "react"
import request from '../../api/requset'
import { Button, ListView } from 'antd-mobile'
import GoodCard from './good-card/good-card'

import styles from "./home.css"


export default function Home(props) {
  const [list, setList] = useState([])

  function loadData(params) {
    request({method: 'get', url: '/h5/list', params: {name: '123'}}).then(res => {
      setList(res.data.dataSource)
    })
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className={styles.home_container}>
      {list.map(val => 
        <GoodCard value={val} key={val.id}></GoodCard>
      )}
    </div>
  )
}
