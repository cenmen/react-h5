import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import styles from './detail.css'
import request from '../../api/requset'

export default function Detail(props) {
  let { id } = useParams()
  let history = useHistory()
  const [detail, setDetail] = useState([])

  function getDetail(params) {
    request({method: 'get', url: '/h5/detail', params}).then(res => {
      setDetail(res.data)
    })
  }

  useEffect(() => {
    getDetail({id})
  }, [])

  return (
    <div className={styles.home_container}>
      <div className={styles.title}>{detail.title}</div>
      <div className={styles.action}>{detail.action}</div>
      <div className={styles.content}>{detail.content}</div>
      <button onClick={() => history.goBack()}>返回</button>
    </div>
  )
}
