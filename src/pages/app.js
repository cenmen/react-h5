import React, { useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Tabbar from '../components/tabbar/tabbar'
import Home from './home/home'
import Cart from './cart/cart'
import Mine from './mine/mine'

import '../assets/font/iconfont.css';
import styles from "./app.css"

/* 
  1.--iconfont
  2.--rem
  3.--pages
  4.--route
  5.--css modules
  6.--axios
  7.--mock
  8.redux
  9.think.js
*/

const tabbar = [
  {class: 'iconfont icon-shouye', name: '首页', path: '/'},
  {class: 'iconfont icon-zhinanzhen', name: '社区', path: '/cart'},
  {class: 'iconfont icon-yonghu', name: '我的', path: '/mine'},
]

const tabPaths = tabbar.map(val => val.path)

export default function App(props) {
  const [tabbarHeight, setTabbarHeight] = useState(0)
  const [location, setLocation] = useState(useLocation())
  // let location = useLocation()
  console.log('location', location)

  useEffect(() => {
    const {offsetHeight: tabbarHeight} = document.getElementById('tabbar')
    setTabbarHeight(tabbarHeight + 'px')
  }, [])

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/mine">
            <Mine />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <div>
          <Tabbar tabbar={tabbar} />
          <div className={styles['tabbar-place']} style={{height: tabbarHeight}}></div>
        </div>
      </div>
    </Router>
    
  )
}
