import { dCls, dCbs } from './default'
import { initClass } from '../../utils/dom'
import { deepcopy, initCallback } from '../../utils/common'
import { dateStrToDateObj, getDateInfo } from '../../utils/date'

function initSelectDate(options) {
  const { cmz_initSelectDate } = options
  

  let dateObj
  if (cmz_initSelectDate) {
    dateObj = dateStrToDateObj(cmz_initSelectDate)
    delete options.cmz_initSelectDate
  }


  let init = null
  let cur = null
  if (dateObj) {
    const dateInfo = getDateInfo(dateObj)
    init = { ...dateInfo }
    cur = { ...dateInfo }
  }
  return { cur, init }
}


function getZZSPSetting(opts) {
  const set = {}
  for (let k in opts) {
    if (k.startsWith('zzsp_')) {
      set[k.slice(5)] = opts[k]
      delete opts[k]
    }
  }
  return set
}


function handleInitCb(options) {
  const cbs = deepcopy(dCbs)
  initCallback(options, cbs, true)
  return cbs
}

export function initOpts(opts) {
  opts.zzsp = {}
  const zzspSetting = getZZSPSetting(opts)
  const selectDate = initSelectDate(zzspSetting)
  const cls = initClass(zzspSetting, dCls)
  const cbs = handleInitCb(zzspSetting)

  opts.zzsp.cls = cls
  opts.zzsp.selectDate = selectDate
  return { selectDate, cls, cbs }
}