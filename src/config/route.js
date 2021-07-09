import React from "react"
import {Switch, Route} from "react-router-dom";

import Home from '../pages/home/home'
import Cart from '../pages/cart/cart'
import Mine from '../pages/mine/mine'
import Detail from '../pages/detail/detail'

const config = [
  { path: '/mine', component: Mine },
  { path: '/cart', component: Cart },
  { path: '/detail/:id', component: Detail },
  { path: '/', component: Home }
]

export default function RouterConfig() {
  return (
    <Switch>
      {config.map((config, index) => 
        <Route path={config.path} component={config.component} key={index} />
      )}
    </Switch>
  )
}
  