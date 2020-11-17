import { isObj } from '../../utils'

function createEl(tag, attrs, children) {
  const parent = document.createElement(tag)
  if (isObj(attrs)) {
    for (let key in attrs) {
      if (key === 'style') {
        const oStyle = attrs[key]
        if (typeof oStyle === 'string') {
          parent.setAttribute('style', oStyle)
        } else if (isObj(oStyle)) {
          for (let key_s in oStyle) {
            parent.style[key_s] = oStyle[key_s]
          }
        }
      } else if (key !== 'direct' || key !== 'step') {
        parent.setAttribute(key, attrs[key])
      }
    }
  }

  // eslint-disable-next-line
  handleChildren(children, parent)
  return parent
}

function handleChildren(elem, parent) {
  if (typeof elem === 'string') return parent.appendChild(document.createTextNode(elem))

  for (let i = 0; i < elem.length; i++) {
    const el = elem[i]
    if (typeof el === 'string') {
      parent.appendChild(document.createTextNode(el))
    } else {
      parent.appendChild(createEl(...el))
    }
  }
}

export function initSwBtnDoms(opts) {
  const { swBtns } = opts
  if (swBtns === null) return null

  const els = []
  for (let i = 0; i < swBtns.length; i++) {
    const btnSet = swBtns[i]
    const el = createEl(...btnSet)
    els.push(el)
  }
  return els
}
