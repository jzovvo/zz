import { getDateInfo, getDays, getFirstDay, getLastDay, getWeek, addMonth } from '../utils'

function initTodayInfo() {
  const todayObj = new Date()
  const dateInfo = getDateInfo(todayObj)
  return { todayObj, ...dateInfo }
}

function getYMStatus(ymInfo, todayInfo) {
  const { year, month, firstDay } = ymInfo
  const { year: todayY, month: todayM, date: todayD } = todayInfo

  let yStatus = null
  let mStatus = null
  let wStatus = null
  let dStatus = null

  if (year === todayY) {
    yStatus = 0
    if (month === todayM) {
      mStatus = 0
      dStatus = todayD
      wStatus = getWeek(firstDay + todayD)
    } else if (month > todayM) {
      mStatus = 1
    } else {
      mStatus = -1
    }
  } else if (year > todayY) {
    yStatus = 1
    mStatus = 1
  } else {
    yStatus = -1
    mStatus = -1
  }

  return { yStatus, mStatus, wStatus, dStatus }
}

function initYMCache(ym, ymCache, today) {
  const { year, month } = ym

  ymCache[year] || (ymCache[year] = {})
  if (ymCache[year][month]) return false

  const dObj = new Date(year, month - 1, 1)
  const days = getDays(year, month)
  const firstDay = getFirstDay(dObj)
  const lastDay = getLastDay(firstDay, days)
  const weeks = getWeek(firstDay + days)
  const ymStatus = getYMStatus({ year, month, firstDay }, today)

  const c = { days, firstDay, lastDay, weeks, ymStatus }
  ymCache[year][month] = c
  return c
}

export function getCache(ym, ymCache, today) {
  const { year, month } = ym

  let c;
  if (ymCache[year] && ymCache[year][month]) {
    c = ymCache[year][month]
  } else {
    c = initYMCache(ym, ymCache, today)
  }
  return c
}

function initYMCaches(opts, today) {
  let { ymS, quan } = opts
  const copyYM = { ...ymS }

  let ymCache = {}
  for (let i = 0; i < quan; i++) {
    initYMCache(copyYM, ymCache, today)
    addMonth(copyYM, 1)
  }
  return ymCache
}

export function initYMData(opts) {
  const todayInfo = initTodayInfo()
  const ymCache = initYMCaches(opts, todayInfo)
  return { todayInfo, ymCache }
}
