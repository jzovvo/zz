import { isObj, isArr } from './common'


export const addClass = (dom, cls) => {
  if (!isArr(cls)) return false
  for (let i = 0; i < cls.length; i++) {
    const clsname = cls[i]
    dom.classList.add(clsname)
  }
}

export const removeClass = (dom, cls) => {
  if (!isArr(cls)) return false
  for (let i = 0; i < cls.length; i++) {
    const clsname = cls[i]
    dom.classList.remove(clsname)
  }
}

export const setAttrs = (dom, attrs) => {
  if (!isObj(attrs)) return false
  for (let key in attrs) {
    const val = attrs[key]
    if (typeof val === 'string') {
      dom.setAttribute(key, val)
    }
  }
}

export const createDom = (tag = 'span', content = '', cls = [], attrs = {}) => {
  const dom = document.createElement(tag)
  dom.textContent = content
  cls.length && addClass(dom, cls)
  isObj(attrs) && setAttrs(dom, attrs)
  return dom
}


/**
 * @param interval 區間 -1 | 0 | 1
 * @param classes [-1 class, 0 class, 1 class]
 */
export function getClassByInterval(interval, classes) {
  if (interval === 1) {
    return classes[2]
  } else if (interval === -1) {
    return classes[0]
  } else if (interval === 0) {
    return classes[1]
  } else {
    throw new Error('getClassByInterval params is wrong')
  }
}


export function isTag(tag) {
  if (typeof tag === 'string') {
    const searchLv1Tag = 'div,span,i,img,ul,li,p,button'
    const searchLv2Tag = 'article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,figcaption,figure,canvas,script,form,input,select,textarea'
    const searchLv3Tag = 'html,body,base,head,link,meta,style,title,dd,dl,dt,ol,picture,address,main,audio,video,time,caption,col,colgroup,table,thead,tbody,td,th,tr'
    const searchLv4Tag = 'hgroup,hr,pre,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,strong,sub,sup,u,var,wbr,area,map,track,embed,object,param,source,noscript,del,ins,datalist,fieldset,label,legend,meter,optgroup,option,output,progress,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot'
    const svgTag = 'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
      'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
      'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view'

    // MDN said custom element names must contain a hyphen.
    const customEl = /^[a-zA-Z]+-[a-zA-Z]+(-[a-zA-Z]+)*$/ 
    const sourceTags = [searchLv1Tag, searchLv2Tag, svgTag, searchLv3Tag, searchLv4Tag]
    return sourceTags.some(sourceTag => sourceTag.includes(tag)) || customEl.test(tag)
  }
  return false
}

export function parentAppendChildren(parent, children) {
  for (let i = 0; i < children.length; i++) {
    const child = children[i]
    parent.appendChild(child)
  }
}

// INIT
export function initClass(options, dCls) {
  const clsObj = {}
  for (let clsKey in dCls) {
    let cls = options[clsKey]
    if (cls !== undefined) {
      if (typeof cls !== 'string') {
        cls = dCls[clsKey]
      }
      delete options[clsKey]
    } else {
      cls = dCls[clsKey]
    }
    clsObj[clsKey] = cls ? cls.split(' ') : []
  }
  return clsObj
}