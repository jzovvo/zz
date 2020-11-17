import zz from '../zz'
import './scss/style.scss'

// eslint-disable-next-line
zz.use(zzsper)

const btn = document.querySelector('button')

const c1 = zz({
  cmz_quan: 12,
  cmz_ymStart: '2020-01',
  cmz_swBtns: [
    ['i', { direct: 'prev', step: 12, class: 'prev-btn p_btn12' }, '<<<<<'],
    ['i', { direct: 'prev', step: 1, class: 'prev-btn p_btn1' }, '<'],
    ['i', { direct: 'next', step: 1, class: 'next-btn n_btn1' }, '>'],
    // set children
    ['i', { direct: 'next', step: 12, class: 'next-btn n_btn12' }, [
      '>',
      // Use string to set style
      ['i', { style: 'color: pink;' }, '>'],
      // children can always be nested
      ['span', {}, [
        '>',
        // Use object to set style
        ['i', { style: { color: 'skyblue' } }, '>']
      ]]
    ]]
  ],
  cmz_ymPos: 'my',
  cls_year: 'my-year',
  cls_month: 'my-month c-mth',
  cmz_yNames: { 2020: '貳零貳零', 2021: '貳零貳壹' },
  cmz_mNames: {
    1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr',
    5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug',
    9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'
  },
  cmz_wMarks: {
    sun: 'S',
    mon: 'M',
    tue: 'T',
    wed: 'W',
    thu: 'T',
    fri: 'F',
    sat: 'S'
  },

  // set life cycle
  onPreved: (...args) => { console.log('onPreved', ...args) },
  onNexted: (...args) => { console.log('onNexted', ...args) },

  onBeforeCreate: (...args) => { console.log('onBeforeCreate', ...args) },
  onCreated: (...args) => { console.log('onCreated', ...args) },
  onBeforeMount: (...args) => { console.log('onBeforeMount', ...args) },
  onMounted: (...args) => { console.log('onMounted', ...args) },
  onBeforeUnmount: (...args) => { console.log('onBeforeUnmount', ...args) },
  onUnmounted: (...args) => { console.log('onUnmounted', ...args) },
  zzsp: true,
  zzsp_onSelected(...args) {
    console.log(...args)
  }
}).mount('.container')

const c2 = zz({
  zzsp: true,
  zzsp_onSelected(...args) {
    console.log(...args)
  }
}).mount('.container2')

btn.onclick = function () {
  c1.unmount()
  c2.unmount()
}
