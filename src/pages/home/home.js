import React, { useState, useEffect } from "react"
import { Button, List } from 'antd-mobile'

import styles from "./home.css"


export default function Home(props) {
  const [data, setData] = useState("你就好啦")

  useEffect(() => {
    setTimeout(() => {
      setData("最紧要开心")
    }, 1500)
  }, [])

  return (
    <div>
      <div className={styles.home_container}>{data}</div>
    </div>
  )
}
