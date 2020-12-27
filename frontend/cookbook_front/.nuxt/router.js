import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9af01a44 = () => interopDefault(import('..\\pages\\fun.vue' /* webpackChunkName: "pages/fun" */))
const _62b5d47e = () => interopDefault(import('..\\pages\\recipes\\index.vue' /* webpackChunkName: "pages/recipes/index" */))
const _2961cc66 = () => interopDefault(import('..\\pages\\recipes\\add.vue' /* webpackChunkName: "pages/recipes/add" */))
const _ebea4334 = () => interopDefault(import('..\\pages\\recipes\\_id.vue' /* webpackChunkName: "pages/recipes/_id" */))
const _62d436f1 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/fun",
    component: _9af01a44,
    name: "fun"
  }, {
    path: "/recipes",
    component: _62b5d47e,
    name: "recipes"
  }, {
    path: "/recipes/add",
    component: _2961cc66,
    name: "recipes-add"
  }, {
    path: "/recipes/:id",
    component: _ebea4334,
    name: "recipes-id"
  }, {
    path: "/",
    component: _62d436f1,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
