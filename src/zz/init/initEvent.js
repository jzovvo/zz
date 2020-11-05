import { goBack, goNext } from '../switch'


function handleSwClick(btnSet, doms, opts, ymData, pointers, cbs) {
  if (!btnSet[1]) return false
  const { direct, step } = btnSet[1]
  if (direct === 'next') {
    goNext(step, doms, opts, ymData, pointers, cbs)
  } else if (direct === 'prev') {
    goBack(step, doms, opts, ymData, pointers, cbs)
  } else {
    if (step && typeof step === 'number') {
      console.warn(`
        give me direct at swBtn parent's attr setting, 
        direct value just accept next and prev, 
        like { 
          cmz_swBtns: [
            ['i', { direct: "prev", style: 'border: 1px solid black' }, '<'],
            ['div', { direct: "next" }, [
              ['i', { style: {color: 'pink'} }, '>'],
              ['i', { style: {color: 'skyblue'} }, '>']
            ]]
          ]
        }
      `)
    }
    return false
  }
}


function handleSwBtnEv(doms, opts, ymData, pointers, cbs) {
  const { swBtnDs } = doms
  const { swBtns } = opts

  if (swBtnDs) {
    for (let i = 0; i < swBtnDs.length; i++) {
      const btnD = swBtnDs[i]
      const btnSet = swBtns[i]
      btnD.addEventListener('click', handleSwClick.bind(null, btnSet, doms, opts, ymData, pointers, cbs))
    }
  }
}



export function initEvent(doms, opts, ymData, pointers, cbs) {
  handleSwBtnEv(doms, opts, ymData, pointers, cbs)
}