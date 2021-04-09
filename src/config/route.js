import App from '../pages/app'
import Home from '../pages/home/home'
import Cart from '../pages/cart/cart'
import Mine from '../pages/mine/mine'

export const route = [
  {
    path: '/',
      component: App,
      indexRoute: { component: Home },
      childRoutes: [
        { path: 'home', component: Home },
        { path: 'cart', component: Cart },
        { path: 'mine', component: Mine },
        // { path: 'inbox',
        //     component: Inbox,
        //     childRoutes: [
        //       { path: '/messages/:id', component: Message }
        //     ]
        // }
      ]
  }
]
  