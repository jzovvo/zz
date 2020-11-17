import { initCallback } from '../utils'

function getDefaultCbs() {
  return {
    onPreved: [],
    onNexted: [],
    onBeforeDomBeReset: [],
    onDomBeReseted: [],
    onBeforeDomBeAssyAtResetDom: [],
    onDomBeAssyAtResetDom: [],

    onBeforeCreate: [],
    onCreated: [],
    onBeforeMount: [],
    onMounted: [],
    onBeforeUnmount: [],
    onUnmounted: []
  }
}

export function initCbs(cbObjs) {
  const cbs = getDefaultCbs()
  for (let i = 0; i < cbObjs.length; i++) {
    const cbObj = cbObjs[i]
    initCallback(cbObj, cbs)
  }
  return cbs
}
