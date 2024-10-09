import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e3909f2e = () => interopDefault(import('..\\pages\\404Error.vue' /* webpackChunkName: "pages/404Error" */))
const _90b1adb8 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _5f06984a = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _2584880a = () => interopDefault(import('..\\pages\\blog\\11.vue' /* webpackChunkName: "pages/blog/11" */))
const _3ca102ff = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _603d634b = () => interopDefault(import('..\\pages\\blog-grid-left-sidebar.vue' /* webpackChunkName: "pages/blog-grid-left-sidebar" */))
const _3629e946 = () => interopDefault(import('..\\pages\\blog-grid-right-sidebar.vue' /* webpackChunkName: "pages/blog-grid-right-sidebar" */))
const _9db49d9c = () => interopDefault(import('..\\pages\\blog-grid-without-sidebar.vue' /* webpackChunkName: "pages/blog-grid-without-sidebar" */))
const _c2de0e10 = () => interopDefault(import('..\\pages\\blog-left-sidebar.vue' /* webpackChunkName: "pages/blog-left-sidebar" */))
const _7b6ded8e = () => interopDefault(import('..\\pages\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog-right-sidebar" */))
const _6cfe4477 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _1bb58bcd = () => interopDefault(import('..\\pages\\FAQ.vue' /* webpackChunkName: "pages/FAQ" */))
const _5eafb5f7 = () => interopDefault(import('..\\pages\\game\\index.vue' /* webpackChunkName: "pages/game/index" */))
const _4529dcb4 = () => interopDefault(import('..\\pages\\match\\index.vue' /* webpackChunkName: "pages/match/index" */))
const _7f1577e8 = () => interopDefault(import('..\\pages\\player\\index.vue' /* webpackChunkName: "pages/player/index" */))
const _67afb3de = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _5141f82e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _5cf914af = () => interopDefault(import('..\\pages\\game\\_slug.vue' /* webpackChunkName: "pages/game/_slug" */))
const _48971f44 = () => interopDefault(import('..\\pages\\match\\_slug.vue' /* webpackChunkName: "pages/match/_slug" */))
const _7d5ed6a0 = () => interopDefault(import('..\\pages\\player\\_slug.vue' /* webpackChunkName: "pages/player/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404Error",
    component: _e3909f2e,
    name: "404Error"
  }, {
    path: "/about",
    component: _90b1adb8,
    name: "about"
  }, {
    path: "/blog",
    component: _5f06984a,
    name: "blog",
    children: [{
      path: "11",
      component: _2584880a,
      name: "blog-11"
    }, {
      path: ":slug?",
      component: _3ca102ff,
      name: "blog-slug"
    }]
  }, {
    path: "/blog-grid-left-sidebar",
    component: _603d634b,
    name: "blog-grid-left-sidebar"
  }, {
    path: "/blog-grid-right-sidebar",
    component: _3629e946,
    name: "blog-grid-right-sidebar"
  }, {
    path: "/blog-grid-without-sidebar",
    component: _9db49d9c,
    name: "blog-grid-without-sidebar"
  }, {
    path: "/blog-left-sidebar",
    component: _c2de0e10,
    name: "blog-left-sidebar"
  }, {
    path: "/blog-right-sidebar",
    component: _7b6ded8e,
    name: "blog-right-sidebar"
  }, {
    path: "/contact",
    component: _6cfe4477,
    name: "contact"
  }, {
    path: "/FAQ",
    component: _1bb58bcd,
    name: "FAQ"
  }, {
    path: "/game",
    component: _5eafb5f7,
    name: "game"
  }, {
    path: "/match",
    component: _4529dcb4,
    name: "match"
  }, {
    path: "/player",
    component: _7f1577e8,
    name: "player"
  }, {
    path: "/signup",
    component: _67afb3de,
    name: "signup"
  }, {
    path: "/",
    component: _5141f82e,
    name: "index"
  }, {
    path: "/game/:slug",
    component: _5cf914af,
    name: "game-slug"
  }, {
    path: "/match/:slug",
    component: _48971f44,
    name: "match-slug"
  }, {
    path: "/player/:slug",
    component: _7d5ed6a0,
    name: "player-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
