import { createDom, judgeInterval, addClass, getClassByInterval } from '../../utils'

// init O1 Empty Doms
export function initO1EmptyDoms(start, end, tag, cls) {
  const doms = []
  for (let i = start; i <= end; i++) {
    const dom = createDom(tag, '', cls)
    doms.push(dom)
  }
  return doms
}

// init On Empty Doms
export function initOnEmptyDoms(start, end, tag, count, baseCls, classes) {
  const doms = []
  for (let i = start; i <= end; i++) {
    const interval = judgeInterval(i, count)
    const sCls = getClassByInterval(interval, classes)
    const dom = createDom(tag, '', [...baseCls, ...sCls])
    doms.push(dom)
  }
  return doms
}

// init O1 Content Number Doms
export function initO1CNDoms(start, end, tag, cls) {
  const doms = []
  for (let i = start; i <= end; i++) {
    const dom = createDom(tag, i, cls)
    doms.push(dom)
  }
  return doms
}

// init On Content Number Doms
export function initOnCNDoms(start, end, tag, dStatus, baseCls, classes) {
  const doms = []
  for (let i = start; i <= end; i++) {
    const interval = judgeInterval(i, dStatus)
    const sCls = getClassByInterval(interval, classes)
    const dom = createDom(tag, i, [...baseCls, ...sCls])
    doms.push(dom)
  }
  return doms
}

// Month' Container
function initMWrapDom(opts) {
  const { cls_monthWrap, tag_monthWrap } = opts
  return createDom(tag_monthWrap, '', cls_monthWrap)
}

// Month' Header Container
function initMHeaderDom(opts) {
  const { cls_monthHeader, tag_monthHeader } = opts
  return createDom(tag_monthHeader, '', cls_monthHeader)
}

export function handleContentWeeksClass(weeks, classes) {
  if (weeks === 6) {
    return classes[2]
  } else if (weeks === 5) {
    return classes[1]
  } else if (weeks === 4) {
    return classes[0]
  }
}

// Month's Content Container
function initMContentDom(weeks, opts, ym) {
  const { cls_monthContent, cls_w4Content, cls_w5Content, cls_w6Content, tag_monthContent } = opts

  const classes = [cls_w4Content, cls_w5Content, cls_w6Content]
  const sCls = handleContentWeeksClass(weeks, classes)
  const mCD = createDom(tag_monthContent, '', [...cls_monthContent, ...sCls])
  mCD.$_ym = ym
  return mCD
}

// Year
function initYDom(year, ymStatus, opts) {
  const {
    yNames, tag_year,
    cls_year, cls_passYear, cls_curYear, cls_unPassYear
  } = opts
  const { yStatus } = ymStatus

  const classes = [cls_passYear, cls_curYear, cls_unPassYear]
  const sCls = getClassByInterval(yStatus, classes)
  const yname = (yNames && yNames[year]) || year
  return createDom(tag_year, yname, [...cls_year, ...sCls])
}

// Month
function initMDom(month, ymStatus, opts) {
  const {
    mNames, tag_month,
    cls_month, cls_passMonth, cls_curMonth, cls_unPassMonth
  } = opts
  const { mStatus } = ymStatus

  const classes = [cls_passMonth, cls_curMonth, cls_unPassMonth]
  const sCls = getClassByInterval(mStatus, classes)

  const mname = mNames[month]
  return createDom(tag_month, mname, [...cls_month, ...sCls])
}

// Week
export function initWDoms(start, end, ymStatus, opts) {
  const {
    tag_week,
    cls_week, cls_passWeek, cls_curWeek, cls_unPassWeek
  } = opts
  const { mStatus, wStatus } = ymStatus

  let wDoms;
  if (mStatus === 0) {
    const classes = [cls_passWeek, cls_curWeek, cls_unPassWeek]
    wDoms = initOnEmptyDoms(start, end, tag_week, wStatus, cls_week, classes)
  } else {
    const sCls = mStatus === 1 ? cls_unPassWeek : cls_passWeek
    wDoms = initO1EmptyDoms(start, end, tag_week, [...cls_week, ...sCls])
  }
  return wDoms
}

// WeekMark
let wmInnerHTML;
function initWMDom(opts) {
  const { cls_weekMark, cls_weekMarkWrap, wMarks, tag_weekMarkWrap, tag_weekMark } = opts
  const wMWD = createDom(tag_weekMarkWrap, '', cls_weekMarkWrap)
  if (wmInnerHTML) {
    wMWD.innerHTML = wmInnerHTML
  } else {
    const { sun, mon, tue, wed, thu, fri, sat } = wMarks
    const markContents = [sun, mon, tue, wed, thu, fri, sat]
    for (let i = 0; i < markContents.length; i++) {
      const content = markContents[i]
      const wMD = createDom(tag_weekMark, content, cls_weekMark)
      wMWD.appendChild(wMD)
    }
    wmInnerHTML = wMWD.innerHTML
  }
  return wMWD
}

// empty position in front of months
export function initEmptyFDDoms(fd, yms, opts) {
  const { tag_empFDate, cls_empFDate, cls_passEmpFDate, cls_unPassEmpFDate } = opts
  const { mStatus } = yms

  const sCls = mStatus <= 0 ? cls_passEmpFDate : cls_unPassEmpFDate

  return initO1EmptyDoms(1, fd, tag_empFDate, [...cls_empFDate, ...sCls])
}

// empty position behind months
export function initEmptyBDDoms(ld, yms, opts) {
  const { tag_empBDate, cls_empBDate, cls_passEmpBDate, cls_unPassEmpBDate } = opts
  const { mStatus } = yms

  const sCls = mStatus < 0 ? cls_passEmpBDate : cls_unPassEmpBDate

  return initO1EmptyDoms(1, 6 - ld, tag_empBDate, [...cls_empBDate, ...sCls])
}

// date
export function initDDoms(start, end, yms, opts) {
  const {
    tag_date,
    cls_date, cls_passDate, cls_curDate, cls_unPassDate
  } = opts
  const { mStatus, dStatus } = yms

  let dDoms;
  if (mStatus === 0) {
    const classes = [cls_passDate, cls_curDate, cls_unPassDate]
    dDoms = initOnCNDoms(start, end, tag_date, dStatus, cls_date, classes)
  } else {
    const sCls = mStatus === 1 ? cls_unPassDate : cls_passDate
    const cls = [...cls_date, ...sCls]
    dDoms = initO1CNDoms(start, end, tag_date, cls)
  }
  return dDoms
}

// garbage collection
function gc() {
  wmInnerHTML = null
}

function initYMDom(year, month, mInfo, opts) {
  const { firstDay, lastDay, days, weeks, ymStatus } = mInfo
  const { ignore } = opts

  let yD = null

  const mWD = initMWrapDom(opts)
  const mHD = initMHeaderDom(opts)
  const mCD = initMContentDom(weeks, opts, { year, month })

  if (!ignore || !ignore.includes('y')) {
    yD = initYDom(year, ymStatus, opts)
  }

  const mD = initMDom(month, ymStatus, opts)
  const wDs = initWDoms(1, weeks, ymStatus, opts)
  const wMD = initWMDom(opts)
  const empFDDs = initEmptyFDDoms(firstDay, ymStatus, opts)
  const empBDDs = initEmptyBDDoms(lastDay, ymStatus, opts)
  const dDs = initDDoms(1, days, ymStatus, opts)

  gc()
  return { mWD, mHD, mCD, yD, mD, wDs, wMD, empFDDs, empBDDs, dDs }
}

export const initYMDoms = (opts, ymCache) => {
  const ymDoms = {}
  for (let y in ymCache) {
    const ms = ymCache[y]
    ymDoms[y] || (ymDoms[y] = {})
    for (let m in ms) {
      const mInfo = ms[m]
      ymDoms[y][m] = initYMDom(y * 1, m * 1, mInfo, opts)
    }
  }
  return ymDoms
}

export const initYMContainer = (opts) => {
  const { cls_ymContainer, tag_ymContainer } = opts
  const ymCD = document.createElement(tag_ymContainer)
  cls_ymContainer.length && addClass(ymCD, cls_ymContainer)
  return ymCD
}
