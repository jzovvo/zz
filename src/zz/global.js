import { isObj, isFunc } from './utils'

export function use(plugin, plugins) {
  if ((isObj(plugin) || isFunc(plugin)) && !plugins.includes(plugin)) {
    const { install } = plugin
    if (install && isFunc(install)) {
      plugins.push(plugin)
    }
  }
}

export function mixin(cbObj, mixins) {
  cbObj && isObj(cbObj) && mixins.push(cbObj)
}
