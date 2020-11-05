import { addClass, removeClass } from '../utils/dom'
import { callCallbacks } from '../utils/common'
import { initOpts } from './initOptions'


export const zzsper = {}


zzsper.install = (zz) => {
  
  zz.mixin({
    onCreated(datas) {
      if (datas.opts.zzsp === true) {
        const opts = initOpts(datas.opts)
        handleInitSeleted(datas, opts)
        dDsRegistClickEv(datas, opts)
      } else if (datas.opts.zzsp !== undefined) {
        delete datas.opts.zzsp
      }
    },
    onBeforeDomBeAssyAtResetDom(datas) {
      const zzsp = datas.opts.zzsp
      if (zzsp) {
        handlebeMoveDoms(datas, zzsp)
      }
    }
  })
}


function handleInitSeleted(datas, opts) {
  const { selectDate: { cur }, cls: { cls_selected } } = opts
  const { doms: { ymDs } } = datas
  if (cur === null) return false

  const { year, month, date } = cur
  const dD = ymDs[year] && ymDs[year][month] && ymDs[year][month].dDs[date - 1]
  dD && addClass(dD, cls_selected)
}

function dDsRegistClickEv(datas, opts) {
  const ymDs = datas.doms.ymDs
  const cls_date = datas.opts.cls_date

  for(let y in ymDs) {
    const ms = ymDs[y]
    for (let m in ms) {
      const mDoms = ms[m]
      mDoms.mCD.addEventListener('click', (ev) => {
        const dom = ev.target
        if ([...dom.classList].includes(cls_date[0])) {
          handleSelectDate(dom, datas, opts)
        }
      })
    }
  }
}

function handleSelectDate(dD, datas, opts) {
  const { cls: { cls_selected }, cbs, selectDate } = opts
  const { ymDs } = datas.doms

  const selectedDate = selectDate.cur
  const selectingDate = getSelectingDate(dD, datas)
  
  callCallbacks(cbs.onSelected, null, { selectedDate, selectingDate })
  removeLastSelectedClass(selectedDate, selectingDate, cls_selected, ymDs)

  selectDate.cur = selectingDate
  addClass(dD, cls_selected)
}

function removeLastSelectedClass(edDate, ingDate, cls, ymDs) {
  if (edDate === null) return

  const { year: ingY, month: ingM, date: ingD } = ingDate
  const { year: edY, month: edM, date: edD } = edDate

  if (ingY === edY && ingM === edM && ingD === edD) return
  
  if (ymDs[edY] && ymDs[edY][edM]) {
    const edDom = ymDs[edY][edM].dDs[edD - 1]
    removeClass(edDom, cls)
  }
}

function getSelectingDate(dD, datas) {
  const { cls_monthContent } = datas.opts
  
  const mWD = findParentNodeByClassList(dD, cls_monthContent)
  const ym = mWD.$_ym
  

  const year = ym.year
  const month = ym.month
  const date = dD.textContent * 1
  
  return { year, month, date }
}

function findParentNodeByClassList(dD, cls_monthWrap) {
  
  const p = dD.parentElement || dD.parentNode
 
  if ([...p.classList].includes(cls_monthWrap[0])) {
    return p
  } else if (p === null) {
    return false
  } else {
    return findParentNodeByClassList(p, cls_monthWrap)
  }
}

function handlebeMoveDoms(datas, zzsp) {
  const { cls: { cls_selected }, selectDate } = zzsp
  if (selectDate.cur === null) return false
  
  const { 
    contentDs, 
    diffM: {
      beforeYM: { year: bY, month: bM }, 
      nextYM: { year: nY, month: nM } 
    }
  } = datas
  const { year: sY, month: sM, date: sD } = selectDate.cur

  const dD = contentDs.dDs[sD - 1]

  if (sY === bY && sM === bM && dD) {
    removeClass(dD, cls_selected)
  }

  if (sY === nY && sM === nM && dD) {
    addClass(dD, cls_selected)
  }
}

export const getDateInfo = dObj => {
  const year = dObj.getFullYear()
  const month = dObj.getMonth() + 1
  const date = dObj.getDate()
  return { year, month, date } 
}