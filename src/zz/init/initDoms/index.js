import { initYMDoms, initYMContainer } from './initYMDoms'
import { initSwBtnDoms } from './initSwBtnDoms'

export * from './initYMDoms'

export function initDoms(opts, mCache) {
  const ymDs = initYMDoms(opts, mCache)
  const ymCD = initYMContainer(opts)
  const swBtnDs = initSwBtnDoms(opts)
  return { ymDs, ymCD, swBtnDs }
}
