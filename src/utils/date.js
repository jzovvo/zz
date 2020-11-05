export const dateStrToDateObj = dateStr => {
  if (typeof dateStr !== 'string' || !dateStr.includes('-')) {
    return null
  }

  const dateStrArr = dateStr.split('-').map(str => str * 1)
  dateStrArr[1] -= 1
  const dObj = new Date(...dateStrArr)

  if (isNaN(dObj.getTime())) {
    return null
  }
  return dObj
}

export const getDateInfo = dObj => {
  const year = dObj.getFullYear()
  const month = dObj.getMonth() + 1
  const date = dObj.getDate()
  return { year, month, date } 
}


function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}

export const getDays = (year, month) => {
  const day30 = [4, 6, 8, 9, 11];
  const day31 = [1, 3, 5, 7, 8, 10, 12];
  let days = 
    day31.includes(month) ? 31 :
    day30.includes(month) ? 30 :
    isLeapYear(year) ? 29 : 28;

  return days
}

export const getFirstDay = dObj => dObj.getDay()
export const getLastDay = (firstDay, days) => (firstDay + days - 1) % 7
export const getWeek = day => Math.ceil(day / 7)

export const fixYMAfterAdd = (year, month) => {
  if (month > 12) {
    year += 1
    month -= 12
  }
  return { year, month }
}

export const fixYMAfterSub = (year, month) => {
  if (month < 1) {
    year -= 1
    month += 12
  }
  return { year, month }
}

export const addMonth = (ym, number) => {
  let { year, month } = ym
  month += number
  const fixYM = fixYMAfterAdd(year, month)
  ym.year = fixYM.year
  ym.month = fixYM.month
}

export const subMonth = (ym, number) => {
  let { year, month } = ym
  month -= number
  const fixYM = fixYMAfterSub(year, month)
  ym.year = fixYM.year
  ym.month = fixYM.month
}