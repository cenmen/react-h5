import React, { useState, useEffect } from "react"
import { Button, List } from 'antd-mobile'

import "./home.css"

const Card = function (params) {
  return (
    <div className="card-content">
      <h3>{params.title}</h3>
      <img src={caifu}></img>
    </div>
  )
}


export default function App(props) {
  const [data, setData] = useState("你就好啦")

  useEffect(() => {
    setTimeout(() => {
      setData("最紧要开心")
    }, 1500)
  }, [])

  return (
    <div>
      <div className="home-container">{data}</div>
    </div>
  )
}
