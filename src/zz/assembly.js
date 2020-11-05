import { parentAppendChildren } from '../utils'

/**
 * @description assembly year month doms
 */
function assyYMD(ymDs, ymCD, opts) {
  const { ymPos } = opts

  for (let y in ymDs) {
    const ms = ymDs[y]
    for (let m in ms) {
      const mInfo = ms[m]
      const { mWD, mHD, mCD, yD, mD, wDs, wMD, empFDDs, empBDDs, dDs } = mInfo
      const header = assyHeader({ mHD, yD, mD }, ymPos)
      const content = assyContent({ mCD, wDs, wMD, empFDDs, empBDDs, dDs })
      const mDom = assyWrap({ mWD, header, content })
      ymCD.appendChild(mDom)
    }
  }
  return ymCD
}

function assyHeader({ mHD, yD, mD }, ymPos) {
  if (ymPos === 'ym') {
    yD && mHD.appendChild(yD)
    mD && mHD.appendChild(mD)
  } else if (ymPos === 'my') {
    mD && mHD.appendChild(mD)
    yD && mHD.appendChild(yD)
  }
  
  return mHD
}

export function assyContent({ mCD, wDs, wMD, empFDDs, empBDDs, dDs }) {
  wMD && mCD.appendChild(wMD)

  const dDoms = [...empFDDs, ...dDs, ...empBDDs]
  let j = -1
  for(let i = 0; i < dDoms.length; i++) {
    if (i % 7 ===0) {
      j++
    }
    wDs[j].appendChild(dDoms[i])
  }

  parentAppendChildren(mCD, wDs)
  return mCD
}

function assyWrap({ mWD, header, content }) {
  mWD.appendChild(header)
  mWD.appendChild(content)
  return mWD
}


function assyIntegrDom(doms) {
  const fg = document.createDocumentFragment()
  parentAppendChildren(fg, doms)
  return fg
}

export function assyDoms(doms, opts) {
  let { ymDs, ymCD, swBtnDs } = doms
  const integrYMD = assyYMD(ymDs, ymCD, opts)
  !swBtnDs && (swBtnDs = [])
  return assyIntegrDom([...swBtnDs, integrYMD])
}