import { calendar } from './calendar'
import { isObj, gcObj, gcArr, callCallbacks } from './utils'
import { initCbs } from './init'
import { use, mixin } from './global'

let plugins = []
let mixins = []

export default function zz(option) {
  option = isObj(option) ? option : {}

  if (plugins) {
    for (let i = 0; i < plugins.length; i++) {
      const plugin = plugins[i]
      plugin.install.call(null, zz)
    }
    gcArr(plugins)
    plugins = null
  }

  let cbs = initCbs(mixins)
  let app = calendar(option, cbs)

  let { mount, unmount } = app

  let parent;
  app.mount = (select) => {
    const { opts, ymData, pointers, doms, integrFg } = app
    callCallbacks(cbs.onBeforeMount, null, { opts, ymData, pointers, doms })

    parent = mount(select, integrFg)
    delete app.integrFg

    callCallbacks(cbs.onMounted, null, { opts, ymData, pointers, doms })

    return app
  }

  app.unmount = () => {
    const { opts, ymData, pointers, doms } = app

    callCallbacks(cbs.onBeforeUnmount, null, { opts, ymData, pointers, doms })
    unmount(parent)
    callCallbacks(cbs.onUnmounted, null)

    parent = null
    gcObj(cbs)
    cbs = null
    gcObj(app)
    app = null
    mount = null
    unmount = null

    return app
  }
  return app
}

zz.use = plugin => use(plugin, plugins)
zz.mixin = cb => mixin(cb, mixins)
