export function initPointers(ymCache) {
  const years = mapObjKeysToNumArr(ymCache)
  const minY = Math.min(...years)
  const maxY = Math.max(...years)
  const pL = {}
  const pR = {}

  pL.year = minY
  pR.year = maxY
  pL.month = Math.min(...mapObjKeysToNumArr(ymCache[minY]))
  pR.month = Math.max(...mapObjKeysToNumArr(ymCache[maxY]))
  return { pL, pR }
}

function mapObjKeysToNumArr(obj) {
  const arr = []
  for (let key in obj) {
    arr.push(key * 1)
  }
  return arr
}