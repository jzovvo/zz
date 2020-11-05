import { calendar } from './calendar'
import { isObj, isFunc, gcObj, gcArr, callCallbacks } from '../utils'
import { initCbs } from './init'

let plugins = []
let mixins = []

export function zz(option) {
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

  let mount = app.mount
  let unmount = app.unmount

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


zz.use = (plugin) => {
  if ((isObj(plugin) || isFunc(plugin)) && !plugins.includes(plugin)) {
    const install = plugin.install
    if (install && isFunc(install)) {
      plugins.push(plugin)
    }
  }
}


zz.mixin = (cbObj) => {
  cbObj && isObj(cbObj) && mixins.push(cbObj)
}