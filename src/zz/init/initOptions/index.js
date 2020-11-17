import { dCls, dMNames, dWMark, dQuan, dTags, dSwBtns, dSwBtnStep, dYMPosition } from './default'
import { isObj, isArr, isNaN, dateStrToDateObj, getDateInfo, isTag, tsEnumToObj, deepcopy, initClass } from '../../utils'

// UTILS
function initCmzName(dN, cN) {
  const init = {}
  for (let key in dN) {
    const cmz = cN[key]
    init[init[key] = cmz !== undefined ? cmz : dN[key]] = key
  }
  return init
}

function handleCmzName(options, key, defaultNames) {
  const cmzName = options[key]
  let names;
  if (cmzName !== undefined) {
    if (isObj(cmzName)) {
      names = initCmzName(defaultNames, cmzName)
    } else {
      names = tsEnumToObj(defaultNames)
    }
    delete options[key]
  } else {
    names = tsEnumToObj(defaultNames)
  }
  return names
}

function initTags(options) {
  const oTags = {}
  for (let tagKey in dTags) {
    let tag = options[tagKey];
    if (tag !== undefined) {
      if (!isTag(tag)) {
        tag = dTags[tagKey]
      }
      delete options[tagKey]
    } else {
      tag = dTags[tagKey]
    }
    oTags[tagKey] = tag
  }
  return oTags
}

function initMNames(options) {
  return handleCmzName(options, 'cmz_mNames', dMNames)
}

function initWMarks(options) {
  return handleCmzName(options, 'cmz_wMarks', dWMark)
}

function initYMPosition(options) {
  const { cmz_ymPos } = options

  const accept = ['my', 'ym']
  if (cmz_ymPos) {
    let pos;
    if (accept.includes(cmz_ymPos)) {
      pos = cmz_ymPos
    } else {
      console.warn('cmz_ymPos just accept "ym" or "my"')
      pos = dYMPosition
    }
    delete options.cmz_ymPos
    return pos
  }

  return dYMPosition
}

function initYMStart(options) {
  const { cmz_ymStart } = options
  let ymDObj
  if (cmz_ymStart !== undefined) {
    ymDObj = dateStrToDateObj(cmz_ymStart) || new Date()
    delete options.cmz_ymStart
  } else {
    ymDObj = new Date()
  }
  return getDateInfo(ymDObj)
}

function initYM(options) {
  const ymS = initYMStart(options)
  const ymPos = initYMPosition(options)
  return { ymS, ymPos }
}

function initIgnore(options) {
  const { cmz_ignore } = options
  if (isArr(cmz_ignore)) {
    const ignore = [...cmz_ignore]
    delete options.cmz_ignore
    return ignore
  }
  return null
}

function initQuan(options) {
  const { cmz_quan } = options
  let quan;
  if (cmz_quan !== undefined) {
    if (typeof cmz_quan === 'number' && cmz_quan > 0) {
      quan = Math.floor(cmz_quan)
    } else {
      quan = dQuan
    }
    delete options.cmz_quan
  } else {
    quan = dQuan
  }
  return quan
}

function initYNames(options) {
  const { cmz_yNames } = options
  if (cmz_yNames !== undefined) {
    if (!isObj(cmz_yNames)) return null

    const years = []
    for (let year in cmz_yNames) {
      !isNaN(year * 1) && typeof cmz_yNames[year] === 'string' && years.push(year)
    }

    if (!years.length) return null

    const YNames = {}
    for (let i = 0; i < years.length; i++) {
      const year = years[i]
      YNames[YNames[year] = cmz_yNames[year]] = year
    }

    delete options.cmz_yNames
    return YNames
  }

  return null
}

function btnRules(btn) {
  return (
    isArr(btn) &&
    isTag(btn[0]) &&
    (isObj(btn[1]) || btn[1] === null) &&
    (typeof btn[2] === 'string' || isArr(btn[2]))
  )
}

function handleBtnArrayChild(children) {
  return children
    .filter(child => {
      if (typeof child === 'string') {
        return true
      } else if (isArr(child)) {
        if (btnRules(child)) {
          const len = child.length
          child.length = len <= 3 ? len : 3

          if (isArr(child[2])) {
            child[2] = handleBtnArrayChild(child[2])
          }
          return true
        }
      }
      return false
    })
}

function filterCompilanceBtns(btns) {
  return btns
    .filter(btn => {
      if (btnRules(btn)) {
        const len = btn.length
        btn.length = len <= 3 ? len : 3

        const attrs = btn[1]
        if (attrs) {
          if (attrs.direct && !attrs.step) {
            attrs.step = dSwBtnStep
          } else if (attrs.step) {
            if (typeof attrs.step !== 'number') {
              attrs.step = dSwBtnStep
            } else {
              attrs.step = Math.floor(attrs.step)
            }
          }
        }

        const children = btn[2]
        if (isArr(children)) {
          btn[2] = handleBtnArrayChild(children)
        }
        return true
      }
      return false
    })
}

function initSwBtns(options) {
  const { cmz_swBtns } = options
  if (cmz_swBtns !== undefined) {
    let btns;
    if (cmz_swBtns === null) {
      btns = null
    } else if (isArr(cmz_swBtns)) {
      btns = filterCompilanceBtns(cmz_swBtns)
      btns = btns.length === 0 ? deepcopy(dSwBtns) : btns
    } else {
      btns = deepcopy(dSwBtns)
    }
    delete options.cmz_swBtns
    return btns
  }
  return deepcopy(dSwBtns)
}

export function initOptions(options = {}) {
  const cls = initClass(options, dCls)
  const tags = initTags(options)
  const mNames = initMNames(options)
  const wMarks = initWMarks(options)
  const ym = initYM(options)
  const quan = initQuan(options)
  const ignore = initIgnore(options)

  const yNames = initYNames(options)
  const swBtns = initSwBtns(options)

  return { ...options, ...cls, ...tags, mNames, wMarks, ...ym, ignore, quan, yNames, swBtns }
}
