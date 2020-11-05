import { addMonth, subMonth, judgeInterval, addClass, removeClass, getClassByInterval, callCallbacks } from '../utils'
import { 
  getCache, handleContentWeeksClass, 
  initEmptyFDDoms, initEmptyBDDoms, initDDoms, initWDoms
} from './init'
import { assyContent } from './assembly'

// utils
function node2FragmentFromLast(parent) {
  const fg = document.createDocumentFragment()
  let child;
  while (child = parent.lastChild) {
    fg.appendChild(child)
  }
  return fg
}

/**
 * @param bS before status
 * @param nS next status
 * @param classes [-1 class, 0 class, 1 class]
 */
function resetClassByInterval(dom, bS, nS, classes) {
  const removeCls = getClassByInterval(bS, classes)
  const addCls = getClassByInterval(nS, classes)
  removeClass(dom, removeCls)
  addClass(dom, addCls)
}

// step1. diff
function diff(nextYMCache, beforeYMCache) {
  const { firstDay: nFd, lastDay: nLd, days: nDs, weeks: nWs, ymStatus: { yStatus: nYS, mStatus: nMS } } = nextYMCache
  const { firstDay: bFd, lastDay: bLd, days: bDs, weeks: bWs, ymStatus: { yStatus: bYS, mStatus: bMS } } = beforeYMCache

  const calcFD = nFd - bFd
  const calcLD = nLd - bLd
  const calcDs = nDs - bDs
  const calcWs = nWs - bWs
  const statusChange = {
    ys: nYS === bYS ? false: true,
    ms: nMS === bMS ? false: true
  }
  return { calcFD, calcLD, calcDs, calcWs, statusChange }
}

// step2. move
function moveDoms(doms, diffMs, direct, opts, cbs) {

  const { ymCD, ymDs } = doms
  const { quan } = opts
  const len = diffMs.length

  let fg = node2FragmentFromLast(ymCD)

  let needResetDoms = null;
  let unNeedResetDoms = null;
  if (len < quan) {
    const { fgForBeMoveDom, fgForUnMoveDom } = getBeMoveDoms(fg, direct, len)
    needResetDoms = fgForBeMoveDom
    unNeedResetDoms = fgForUnMoveDom
  } else {
    fg = node2FragmentFromLast(fg)
    needResetDoms = fg
  }

  callCallbacks(cbs.onBeforeDomBeReset, null, { doms, diffMs, direct, opts, needResetDoms, unNeedResetDoms })
  resetBeMoveDoms(needResetDoms, diffMs, opts, ymDs, cbs)
  callCallbacks(cbs.onDomBeReseted, null, { doms, diffMs, direct, opts, needResetDoms, unNeedResetDoms })

  if (len < quan) {
    if (direct === 'prev') {
      needResetDoms = node2FragmentFromLast(needResetDoms)
      ymCD.appendChild(needResetDoms)
      ymCD.appendChild(unNeedResetDoms)
    } else if (direct === 'next') {
      unNeedResetDoms = node2FragmentFromLast(unNeedResetDoms)
      ymCD.appendChild(unNeedResetDoms)
      ymCD.appendChild(needResetDoms)
    }
  } else {
    ymCD.appendChild(needResetDoms)
  }
}

// step2.1 getBeMoveDom
/**
 * @param fg all yearMonthContentDom's Children By Backward
 * @param direct click direct
 * @param len will Be Move Dom count
 */
function getBeMoveDoms(fg, direct, len) {
  const fgForBeMoveDom = document.createDocumentFragment()

  /**
   * @description because direct prev's be move dom is in front of all, so backward for pop it
   */
  if (direct === 'prev') {
    fg = node2FragmentFromLast(fg)
  }

  const children = [...fg.children]
  for(let i = 0; i < len; i++) {
    const child = children.pop()
    fgForBeMoveDom.appendChild(child)
  }

  return { fgForBeMoveDom, fgForUnMoveDom: fg }
}

// step2.2 resetBeMoveDom
function resetBeMoveDoms(needResetDoms, diffMs, opts, ymDs, cbs) {
  const children = needResetDoms.children
  const len = children.length
  for (let i = 0; i < len; i++) {
    const mWD = children[i]
    const diffM = diffMs[i]
    const headerDs = resetBeMoveDomsHeader(mWD, diffM, opts)
    const contentDs = resetBeMoveDomsContent(mWD, diffM, opts)
    resetYMDs(ymDs, diffM, { ...headerDs, ...contentDs, mWD})
    callCallbacks(cbs.onBeforeDomBeAssyAtResetDom, null, { mWD, diffM, headerDs, contentDs, opts, ymDs, needResetDoms, diffMs })
    assyContent(contentDs)
    callCallbacks(cbs.onDomBeAssyAtResetDom, null, { mWD, diffM, headerDs, contentDs, opts, ymDs, needResetDoms, diffMs })
  }
}

function resetBeMoveDomsHeader(mWD, diffM, opts) {
  const { cls_monthHeader } = opts
  const mHD = mWD.querySelector(`.${cls_monthHeader[0]}`)
  if (!mHD) return null
  
  const yD = resetBeMoveDomsYear(mHD, diffM, opts)
  const mD = resetBeMoveDomsMonth(mHD, diffM, opts)
  return { mHD, yD, mD }
}

function resetBeMoveDomsYear(mHD, diffM, opts) {
  const { yNames, cls_year } = opts
  const yD = mHD.querySelector(`.${cls_year[0]}`)
  if (!yD) return null

  const {
    diffResult: { statusChange: { ys } },
    nextYM: { year }
  } = diffM
  
  const yName = (yNames && yNames[year]) || year
  yD.textContent = yName

  if (ys) {
    const { cls_passYear, cls_curYear, cls_unPassYear } = opts
    const {
      nextYMCache: { ymStatus: { yStatus: nYS } },
      beforeYMCache: { ymStatus: { yStatus: bYS } }
    } = diffM
    const classes = [cls_passYear, cls_curYear, cls_unPassYear]
    resetClassByInterval(yD, bYS, nYS, classes)
  }
  return yD
}

function resetBeMoveDomsMonth(mHD, diffM, opts) {
  const { mNames, cls_month } = opts
  const mD = mHD.querySelector(`.${cls_month[0]}`)
  if (!mD) return null

  const {
    diffResult: { statusChange: { ms } },
    nextYM: { month },
  } = diffM

  const mName = mNames[month]
  
  mD.textContent = mName

  if (ms) {
    const {
      nextYMCache: { ymStatus: { mStatus: nMS } },
      beforeYMCache: { ymStatus: { mStatus: bMS } }
    } = diffM

    const { cls_passMonth, cls_curMonth, cls_unPassMonth } = opts
    const classes = [cls_passMonth, cls_curMonth, cls_unPassMonth]

    resetClassByInterval(mD, bMS, nMS, classes)
  }
  return mD
}

function resetBeMoveDomsContent(mWD, diffM, opts) {
  const { cls_monthContent, cls_weekMarkWrap } = opts
  const mCD = mWD.querySelector(`.${cls_monthContent[0]}`)
  if (!mCD) return null

  handleContentClass(mCD, diffM, opts)
  handleContentYMFlag(mCD, diffM)
  
  const wMD = mWD.querySelector(`.${cls_weekMarkWrap[0]}`)
  const empFDDs = resetBeMoveDomsEmpFDDs(mCD, diffM, opts)
  const empBDDs = resetBeMoveDomsEmpBDDs(mCD, diffM, opts)
  const dDs = resetBeMoveDomsDDs(mCD, diffM, opts)
  const wDs =  resetBeMoveDomsWDs(mCD, diffM, opts)
  mCD.textContent = ''

  return { mCD, wDs, wMD, empFDDs, empBDDs, dDs }
}

function handleContentClass(mCD, diffM, opts) {
  const { diffResult: { calcWs } } = diffM
  if (calcWs !== 0) {
    const { cls_w4Content, cls_w5Content, cls_w6Content } = opts
    const { nextYMCache: { weeks: nWs }, beforeYMCache: { weeks: bWs } } = diffM

    const classes = [cls_w4Content, cls_w5Content, cls_w6Content]
    const removeCls = handleContentWeeksClass(bWs, classes)
    const addCls = handleContentWeeksClass(nWs, classes)
    removeClass(mCD, removeCls)
    addClass(mCD, addCls)
  }
}

function handleContentYMFlag(mCD, diffM) {
  mCD.$_ym = diffM.nextYM
}

function resetBeMoveDomsWDs(mCD, diffM, opts) {
  const { cls_week } = opts
  const { diffResult: { calcWs, statusChange: { ms } } } = diffM
  let wDs = mCD.querySelectorAll(`.${cls_week[0]}`)
  if (!wDs) return null

  wDs = [...wDs]

  let newWDs = []
  if (calcWs > 0) {
    const {
      beforeYMCache: { weeks: bWs },
      nextYMCache: { weeks: nWs, ymStatus }
    } = diffM
    newWDs = initWDoms(bWs + 1, nWs, ymStatus, opts)
  } else if (calcWs < 0) {
    for (let i = 0; i < Math.abs(calcWs); i++) {
      wDs.pop()
    }
  }

  if (ms) {
    const {
      beforeYMCache: { ymStatus: { mStatus: bMS, wStatus: bWS }},
      nextYMCache: { ymStatus: { mStatus: nMS, wStatus: nWS }}
    } = diffM
    const { cls_passWeek, cls_curWeek, cls_unPassWeek } = opts
    const classes = [cls_passWeek, cls_curWeek, cls_unPassWeek]
    handleClassForDW(wDs, bMS, nMS, bWS, nWS, classes)
  }

  for (let i = 0; i < wDs.length; i++) {
    const wD = wDs[i]
    wD.textContent = ''
  }

  return [...wDs, ...newWDs]
}

function resetBeMoveDomsEmpFDDs(mCD, diffM, opts) {
  const { cls_empFDate } = opts
  const { diffResult: { calcFD, statusChange: { ms } } } = diffM
  let empFDDs = mCD.querySelectorAll(`.${cls_empFDate[0]}`)
  if (!empFDDs) return null

  empFDDs = [...empFDDs]

  let newEmpFDDs = []
  if (calcFD > 0) {
    const { nextYMCache: { ymStatus } } = diffM
    newEmpFDDs = initEmptyFDDoms(calcFD, ymStatus, opts)
  } else if (calcFD < 0) {
    for (let i = 0 ; i < Math.abs(calcFD); i++) {
      empFDDs.pop()
    }
  }

  if (ms) {
    const {
      nextYMCache: { ymStatus: { mStatus: nMS } },
      beforeYMCache: { ymStatus: { mStatus: bMS } }
    } = diffM

    if ((nMS <= 0 && bMS > 0) || (nMS > 0 && bMS <= 0)) {
      const { cls_passEmpFDate, cls_unPassEmpFDate } = opts
      const classes = [ cls_passEmpFDate, cls_passEmpFDate, cls_unPassEmpFDate ]
      for (let i = 0; i < empFDDs.length; i++) {
        const empFDD = empFDDs[i]
        resetClassByInterval(empFDD, bMS, nMS, classes)
      }
    }
  }

  return [...empFDDs, ...newEmpFDDs]
}

function resetBeMoveDomsEmpBDDs(mCD, diffM, opts) {
  const { cls_empBDate } = opts
  const { diffResult: { calcLD, statusChange: { ms } } } = diffM
  let empBDDs = mCD.querySelectorAll(`.${cls_empBDate[0]}`)
  if (!empBDDs) return null

  empBDDs = [...empBDDs]

  let newEmpBDDs = []
  if (calcLD < 0) {
    const { nextYMCache: { ymStatus } } = diffM
    newEmpBDDs = initEmptyBDDoms(6 - Math.abs(calcLD), ymStatus, opts)
  } else if (calcLD > 0) {
    for (let i = 0 ; i < calcLD; i++) {
      empBDDs.pop()
    }
  }

  if (ms) {
    const {
      nextYMCache: { ymStatus: { mStatus: nMS } },
      beforeYMCache: { ymStatus: { mStatus: bMS } }
    } = diffM
    
    if ((nMS < 0 && bMS >= 0) || (nMS >= 0 && bMS < 0)) {
      const { cls_passEmpBDate, cls_unPassEmpBDate } = opts
      const classes = [ cls_passEmpBDate, cls_unPassEmpBDate, cls_unPassEmpBDate ]
      for (let i = 0; i < empBDDs.length; i++) {
        const empBDD = empBDDs[i]
        resetClassByInterval(empBDD, bMS, nMS, classes)
      }
    }
  }

  return [...empBDDs, ...newEmpBDDs]
}

function resetBeMoveDomsDDs(mCD, diffM, opts) {
  const { cls_date } = opts
  const { diffResult: { calcDs, statusChange: { ms } } } = diffM
  let dDs = mCD.querySelectorAll(`.${cls_date[0]}`)
  if (!dDs) return null

  dDs = [...dDs]

  let newDDs = []
  if (calcDs > 0) {
    const {
      beforeYMCache: { days: bDs },
      nextYMCache: { days: nDs, ymStatus }
    } = diffM
    newDDs = initDDoms(bDs + 1, nDs, ymStatus, opts)
  } else if (calcDs < 0) {
    for (let i = 0; i < Math.abs(calcDs); i++) {
      dDs.pop()
    }
  }

  if (ms) {
    const {
      beforeYMCache: { ymStatus: { mStatus: bMS, dStatus: bDS }},
      nextYMCache: { ymStatus: { mStatus: nMS, dStatus: nDS }}
    } = diffM
    const { cls_passDate, cls_curDate, cls_unPassDate } = opts
    const classes = [cls_passDate, cls_curDate, cls_unPassDate]
    handleClassForDW(dDs, bMS, nMS, bDS, nDS, classes)
  }

  return [...dDs, ...newDDs]
}

// handle class for dates and weeks
function handleClassForDW(dom, bMS, nMS, beforeP, nextP, classes) {
  if (bMS !== 0 && nMS !== 0) {
    for (let i = 0; i < dom.length; i++) {
      const dD = dom[i]
      resetClassByInterval(dD, bMS, nMS, classes)
    }
  } else if (bMS !== 0) {
    const removeCls = getClassByInterval(bMS, classes)
    for (let i = 0; i < dom.length; i++) {
      const dD = dom[i]
      const date = i + 1
      const interval = judgeInterval(date, nextP)
      const addCls = getClassByInterval(interval, classes)
      removeClass(dD, removeCls)
      addClass(dD, addCls)
    }
  } else if (nMS !== 0) {
    const addCls = getClassByInterval(nMS, classes)
    for (let i = 0; i < dom.length; i++) { 
      const dD = dom[i]
      const date = i + 1
      const interval = judgeInterval(date, beforeP)
      const removeCls = getClassByInterval(interval, classes)
      removeClass(dD, removeCls)
      addClass(dD, addCls)
    }
  }
}

/**
 * @description delete past dom and add the new
 */
function resetYMDs(ymDs, diffM, doms) {
  const {
    beforeYM: { year: by, month: bm },
    nextYM: { year: ny, month: nm }
  } = diffM

  ymDs[ny] || (ymDs[ny] = {})
  ymDs[ny][nm] = doms
  delete ymDs[by][bm]
}

export function goBack(step, doms, opts, ymData, pointers, cbs) {
  const { ymCache, todayInfo } = ymData
  const { pL, pR } = pointers
  const { quan } = opts

  let diffMs;
  if (step < quan) {
    const beforeP = pR
    const nextP = pL
    diffMs = handleStepSmaller(step, { beforeP, nextP }, ymCache, todayInfo, subMonth)
  } else {
    diffMs = handleStepBigger(step, quan, pointers, ymCache, todayInfo, subMonth)
  }

  moveDoms(doms, diffMs, 'prev', opts, cbs)
  callCallbacks(cbs.onPreved, null, { doms, diffMs, opts, step, ymData, pointers })
}

export function goNext(step, doms, opts, ymData, pointers, cbs) {
  const { ymCache, todayInfo } = ymData
  const { pL, pR } = pointers
  const { quan } = opts

  let diffMs = []
  if (step < quan) {
    const beforeP = pL
    const nextP = pR
    diffMs = handleStepSmaller(step, { beforeP, nextP }, ymCache, todayInfo, addMonth)
  } else {
    diffMs = handleStepBigger(step, quan, pointers, ymCache, todayInfo, addMonth)
  }
  
  moveDoms(doms, diffMs, 'next', opts, cbs)
  callCallbacks(cbs.onNexted, null, { doms, diffMs, opts, step, ymData, pointers })
}

function handleStepSmaller(step, pointers, ymCache, todayInfo, handleMonthFn) {
  const { beforeP, nextP } = pointers
  
  const diffMs = []
  for (let i = 0; i < step; i++) {
    const beforeYMCache = ymCache[beforeP.year][beforeP.month]
    const beforeYM = { ...beforeP }
    
    handleMonthFn(beforeP, 1)
    handleMonthFn(nextP, 1)

    const nextYMCache = getCache(nextP, ymCache, todayInfo)
    const nextYM = { ...nextP }
    const diffResult = diff(nextYMCache, beforeYMCache)
    diffMs.push({ beforeYMCache, nextYMCache, beforeYM, nextYM, diffResult })
  }
  return diffMs
}

function handleStepBigger(step, quan, pointers, ymCache, todayInfo, handleMonthFn) {
  const { pL, pR } = pointers
  const beforePoint = { ...pL }
  handleMonthFn(pL, step)
  handleMonthFn(pR, step)
  const nextPoint = { ...pL }

  const diffMs = []
  for (let i = 0; i < quan; i++) {
    const beforeYM = { ...beforePoint }
    const beforeYMCache = getCache(beforePoint, ymCache, todayInfo)
    const nextYM = { ...nextPoint }
    const nextYMCache = getCache(nextPoint, ymCache, todayInfo)
    const diffResult = diff(nextYMCache, beforeYMCache)

    addMonth(beforePoint, 1)
    addMonth(nextPoint, 1)

    diffMs.push({ beforeYMCache, nextYMCache, beforeYM, nextYM, diffResult })
  }
  return diffMs
}
