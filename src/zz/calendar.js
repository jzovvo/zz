
import { initOptions, initYMData, initPointers, initDoms, initEvent } from './init'
import { assyDoms } from './assembly'
import { initCallback, callCallbacks } from '../utils'


function mount(selector, app) {
  const container = document.querySelector(selector)
  container.appendChild(app)
  return container
}

function unmount(parent) {
  parent.textContent = ''
}

export function calendar(options, cbs) {

  initCallback(options, cbs, true)
  const opts = initOptions(options)
  callCallbacks(cbs.onBeforeCreate, null, opts)

  const ymData = initYMData(opts)
  const pointers = initPointers(ymData.ymCache)
  const doms = initDoms(opts, ymData.ymCache)
  const integrFg = assyDoms(doms, opts)

  
  initEvent(doms, opts, ymData, pointers, cbs)
  callCallbacks(cbs.onCreated, null, { opts, ymData, pointers, doms })

  return {
    opts,
    ymData,
    pointers,
    doms,
    integrFg,
    mount,
    unmount,
  }
}