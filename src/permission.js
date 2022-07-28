import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
const whiteList = ['/login', '/404']
// to 去 from 从  next放行
// 前置路由守卫
router.beforeEach(async (to, from, next) => {
  // 开启进度效果
  NProgress.start()
  const token = store.state.user.token
  if (token) {
    if (to.path === '/login') {
      NProgress.done()
      next('/')
    } else {
      if (!store.state.user.userInfo.id) {
        const userInfo = await store.dispatch('user/getInfo')
        console.log(userInfo.roles.menus)
        store.dispatch('permission/filter', userInfo.roles.menus)
      }
      // 当用户手里有token并且访问的不是login页面，那就应该请求个人信息
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
// 开启后置路由守卫
router.afterEach(() => {
  // 结束进度效果
  NProgress.done()
})
