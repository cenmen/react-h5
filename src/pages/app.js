import React, { useEffect, useState } from "react"
import Tabbar from '../components/tabbar/tabbar'
import Home from './home/home'

import "./app.css"
import caifu from "../assets/caifu.jpg"

/* 
  1.route
  2.rem
  3.pages
  4.axios
  5.mock
  6.think.js
*/

const tabbar = [
  {icon: caifu, name: '首页'},
  {icon: caifu, name: '社区'},
  {icon: caifu, name: '我的'},
]

export default function App(props) {
  const [tabbarHeight, setTabbarHeight] = useState(0)
  useEffect(() => {
    const {offsetHeight: tabbarHeight} = document.getElementById('tabbar')
    setTabbarHeight(tabbarHeight + 'px')
  }, [])

  return (
    <div>
      <Home></Home>
      <Tabbar tabbar={tabbar} />
      <div className="tabbar-place" style={{height: tabbarHeight}}></div>
    </div>
  )
}
