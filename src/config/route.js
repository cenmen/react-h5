import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const lazyLoader = (path) => lazy(() => import(/* webpackChunkName: "chunk-[request]" */ `../pages${path}`))

const config = [
  { path: '/mine', component: lazyLoader('/mine/mine') },
  { path: '/cart', component: lazyLoader('/cart/cart') },
  { path: '/detail/:id', component: lazyLoader('/detail/detail') },
  { path: '/', component: lazyLoader('/home/home') }
]

export default function RouterConfig() {
  return (
    <Suspense fallback={<p>加载中...</p>}>
      <Switch>
        {config.map((config, index) => (
          <Route path={config.path} component={config.component} key={index} />
        ))}
      </Switch>
    </Suspense>
  )
}
