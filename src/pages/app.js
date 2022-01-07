import React, { Fragment, useEffect, useState } from "react"
import {
  HashRouter as Router,
  useLocation
} from "react-router-dom";
import RouterConfig from '../config/route'
import Tabbar from '../components/tabbar/tabbar'

import '../assets/font/iconfont.css';
import styles from "./app.css"

const tabbar = [
  {class: 'iconfont icon-shouye', name: '首页', path: '/'},
  {class: 'iconfont icon-zhinanzhen', name: '社区', path: '/cart'},
  {class: 'iconfont icon-yonghu', name: '我的', path: '/mine'},
]

const tabPaths = tabbar.map(val => val.path)

export default function App(props) {
  return (
    <Router>
      <PageViews />
    </Router>
  )
}

function PageViews() {
  const [tabbarHeight, setTabbarHeight] = useState(0)

  useEffect(() => {
    const dom = document.getElementById('tabbar')
    const tabbarHeight = (dom && dom.offsetHeight) || null
    tabbarHeight && setTabbarHeight(tabbarHeight + 'px')
  }, [])

  let location = useLocation()
  console.log('==> location', location)

  function IsTabbar() {
    const {pathname} = location
    if (tabPaths.includes(pathname)) {
      return (
        <div>
          <Tabbar tabbar={tabbar} />
          <div className={styles['tabbar-place']} style={{height: tabbarHeight, width: '100%'}}></div>
        </div>
      )
    }
    return (<Fragment></Fragment>)
  }

  return (
    <div>
      <RouterConfig/>
      <IsTabbar/>
    </div>
  )
}
