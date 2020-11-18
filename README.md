# ZZ

[![NPM version](https://img.shields.io/npm/v/@jyunzn/zz?color=red&style=plastic)](https://www.npmjs.com/package/@jyunzn/zz)
[![GITHUB LICENSE](https://img.shields.io/github/license/jyunzn/zz?color=orange&style=plastic)](https://github.com/jyunzn/zz/blob/master/LICENSE)
[![NPM size](https://img.shields.io/bundlephobia/min/@jyunzn/zz?color=yellow&style=plastic)](https://www.npmjs.com/package/@jyunzn/zz)
[![GITHUB issues](https://img.shields.io/github/issues/jyunzn/zz?color=green&style=plastic)](https://github.com/jyunzn/zz/issues)
[![GITHUB TOP LAN](https://img.shields.io/github/languages/top/jyunzn/zz?color=blue&style=plastic)](https://github.com/jyunzn/zz)

`zz is a javascript calendar library that runs on the browser.`

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Example](#example)
- [Options](#options)
  - [class options](#class-options)
  - [tag options](#tag-options)
  - [other options](#other-options)
- [Life Cycle](#life-cycle)
- [Methods](#methods)
- [Plugins](#plugins)
  - [usage](#usage)
  - [plugin list](#plugin-list)

## Features

- Compare before switching months
- **Only manipulate the DOM with differences**
- Provides many **customization options** and **life cycle** functions
- Use **plug-in mode** to maintain the scalability of this library, and have the effect of importing on demand

## Installation

### npm

```bash
npm install @jyunzn/zz
```

- **commonJS**

  ```javascript
  const zz = require("@jyunzn/zz");
  ```

- **ES module**

  ```javascript
  import zz from "@jyunzn/zz";
  ```

### CDN

- **unpkg**

  ```html
  <script src="https://unpkg.com/@jyunzn/zz"></script>
  ```

- **jsdelivr**

  ```html
  <script src="https://cdn.jsdelivr.net/npm/@jyunzn/zz"></script>
  ```

## Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- set some style -->
    <link href="https://cdn.jsdelivr.net/gh/jyunzn/zz@0.0.0-alpha.3/examples/default.min.css" rel="stylesheet"/>
    <style>
      .caledar {
        border: 1px solid black;
        position: relative;
        padding: 50px 30px;
        box-sizing: border-box;
      }

      .prev-btn.p_btn1 {
        left: 100px;
      }

      .next-btn.n_btn1 {
        right: 100px;
      }
    </style>
    <script src="https://kit.fontawesome.com/36ce20503e.js" crossorigin="anonymous"></script>

    <!-- step1. import the module -->
    <script src="https://unpkg.com/@jyunzn/zz"></script>
  </head>
  <body>
    <!-- step2. Create a container -->
    <div class="caledar"></div>
    <script>
      // step3. call zz function and mount into the container
      //        If you want to use custom options,
      //        you can set it in the first parameter in the zz function
      zz(/*{

      // - Set options

      cmz_quan: 12,
      cmz_ymStart: '2020-01',
      cmz_ymPos: 'my',
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
      cmz_swBtns: [
        ['i', { direct: 'prev', step: 12, class: "prev-btn p_btn12" }, '<<<<<'],
        // use font-awesome
        ['i', { direct: 'prev', step: 1, class: "prev-btn p_btn1 fas fa-angle-left" }, ''],
        ['i', { direct: 'next', step: 1, class: "next-btn n_btn1" }, '>'],
        // set children, children can always be nested!
        ['i', { direct: 'next', step: 12, class: "next-btn n_btn12" }, [
          '>',
          ['i', { style: 'color: pink;' }, '>'],
          ['span', {}, [
            '>',
            ['i', { style: { color: 'skyblue' }}, '>']
          ]]
        ]]
      ],
      
      cls_year: 'my-year',
      cls_month: 'my-month',

      // - Set life cycle

      onPreved: (...args) => { console.log('onPreved', ...args) }, 
      onNexted: (...args) => { console.log('onNexted', ...args) },

      onBeforeCreate: (...args) => { console.log('onBeforeCreate', ...args) },
      onCreated: (...args) => { console.log('onCreated', ...args) },
      onBeforeMount: (...args) => { console.log('onBeforeMount', ...args) },
      onMounted: (...args) => { console.log('onMounted', ...args) },
      onBeforeUnmount: (...args) => { console.log('onBeforeUnmount', ...args) },
      onUnmounted: (...args) => { console.log('onUnmounted', ...args) }
    }*/).mount(".caledar");
    </script>
  </body>
</html>
```

## Options

### class options

- All customizable class name settings
- **If you need to set more than two class names, please separate them with spaces**, such as `'apple banana'`

| option             | default            |
| ------------------ | ------------------ |
| cls_ymContainer    | `'ym-container'`   |
| cls_monthWrap      | `'month-wrap'`     |
| cls_monthHeader    | `'month-header'`   |
| cls_monthContent   | `'month-content'`  |
| cls_weekMarkWrap   | `'week-mark-wrap'` |
| cls_weekMark       | `'week-mark'`      |
| cls_w4Content      | `'w-4'`            |
| cls_w5Content      | `'w-5'`            |
| cls_w6Content      | `'w-6'`            |
| cls_year           | `'year'`           |
| cls_month          | `'month'`          |
| cls_week           | `'week'`           |
| cls_date           | `'date'`           |
| cls_empFDate       | `'empty-f'`        |
| cls_empBDate       | `'empty-b'`        |
| cls_passYear       | `'pass-y'`         |
| cls_passMonth      | `'pass-m'`         |
| cls_passWeek       | `'pass-w'`         |
| cls_passDate       | `'pass-d'`         |
| cls_passEmpFDate   | `'pass-emp-f'`     |
| cls_passEmpBDate   | `'pass-emp-b'`     |
| cls_unPassYear     | `'unpass-y'`       |
| cls_unPassMonth    | `'unpass-m'`       |
| cls_unPassWeek     | `'unpass-w'`       |
| cls_unPassDate     | `'unpass-d'`       |
| cls_unPassEmpFDate | `'unpass-emp-f'`   |
| cls_unPassEmpBDate | `'unpass-emp-b'`   |
| cls_curDate        | `'cur-d'`          |
| cls_curMonth       | `'cur-m'`          |
| cls_curYear        | `'cur-y'`          |
| cls_curWeek        | `'cur-w'`          |

### tag options

- All customizable label settings
- **value:** `HTML Tag | SVG Tag | Custom Element Name( The name must be kebab-case )`

| option           | default  |
| ---------------- | -------- |
| tag_ymContainer  | `'div'`  |
| tag_monthWrap    | `'div'`  |
| tag_monthHeader  | `'div'`  |
| tag_monthContent | `'div'`  |
| tag_weekMarkWrap | `'ul'`   |
| tag_weekMark     | `'li'`   |
| tag_year         | `'span'` |
| tag_month        | `'span'` |
| tag_week         | `'ul'`   |
| tag_date         | `'li'`   |
| tag_empFDate     | `'li'`   |
| tag_empBDate     | `'li'`   |

### other options

<table>
  <thead>
    <tr>
      <th>option</th>
      <th>default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody style="text-align: left;">
    <tr>
      <td>cmz_quan</td>
      <td><code>1</code></td>
      <td>
        <p>Number of calendars</p>
        <p><strong>type:</strong> <code>Number</code></p>
      </td>
    </tr>
    <tr>
      <td>cmz_yNames</td>
      <td><code>null</code></td>
      <td>
        <p>Name the year</p>
        <ul>
          <li><strong>Type:</strong> <code>Object</code></li>
          <li><strong>syntax:</strong> <code>{ year: name }</code></li>
          <li><strong>Usage:</strong> <code>{ 2020: '貳零貳零', 2021: '貳零貳壹' }</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>cmz_mNames</td>
      <td>
        <pre lang="javascipt"><code>
{
  1: 'January', 
  2: 'February', 
  3: 'March', 
  4: 'April', 
  5: 'May', 
  6: 'June', 
  7: 'July', 
  8: 'August', 
  9: 'Septemper', 
  10: 'October', 
  11: 'November', 
  12: 'December'
}       </code></pre>
      </td>
      <td>
        <p>Name the month</p>
        <ul>
          <li><strong>Type:</strong> <code>Object</code></li>
          <li><strong>Syntax:</strong> <code>{ month: name }</code></li>
          <li><strong>Usage:</strong> <code>{ 1: 'JAN', 2: 'FEB' }</code></li>
        </ul>
      </td>
    </tr>
        <tr>
      <td>cmz_wMarks</td>
      <td>
        <pre lang="javascipt"><code>
{ 
  sun: 'Su',
  mon: 'Mo',
  tue: 'Tu',
  wed: 'We',
  thu: 'Th',
  fri: 'Fr',
  sat: 'Sa'
}       </code></pre>
      </td>
      <td>
        <p>Name the day of the week marker</p>
        <ul>
          <li><strong>Type:</strong> <code>Object</code></li>
          <li><strong>Syntax:</strong> <code>{ mark-key: name }</code></li>
          <li><strong>mark-key:</strong> <code>sun | mon | tue | wed | thu | fri | sat</code></li>
          <li><strong>Usage:</strong> <code>{ sun: 'Sunday', mon: 'Monday' }</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>cmz_ymStart</td>
      <td>Current month</td>
      <td>
        <p>Leftmost calendar month</p>
        <ul>
          <li><strong>Type:</strong> <code>String</code></li>
          <li><strong>Syntax:</strong> <code>'yyyy-mm'</code></li>
          <li><strong>Usage:</strong> <code>'2018-07'</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>cmz_ymPos</td>
      <td><code>ym</code></td>
      <td>
        <p>Relative position of year and month,</p>
        <p><strong>Value:</strong> <code>'ym' | 'my'</code></p>
      </td>
    </tr>
    <tr>
      <td>cmz_swBtns</td>
      <td>
        <pre><code>
[
  ['i', 
    { 
      direct: 
      "prev", 
      class: 'prev-btn', 
      step: dSwBtnStep 
    }, 
  '<'],
  ['i', 
    { 
      direct: "next", 
      class: 'next-btn', 
      step: dSwBtnStep 
    }, 
  '>']
]       </code></pre>      
      </td>
      <td>
        <p>Button to switch month，Each top button setting represents a whole button</p>
        <ul>
          <li><strong>Type:</strong> <code>Array&lt;array&gt;</code></li>
          <li>
            <p><strong>Syntax:</strong> <code>[[Tag name, Tag props, Children], [switch Btn Setting], ...]</code></p>
            <ul>
              <li>
                <p><strong>Tag name:</strong></p>
                <ul>
                  <li><strong>Type:</strong> <code>String</code></li>
                  <li><strong>Value:</strong> <code>HTML Tag | SVG Tag | Custom Element Name( The name must be kebab-case )</code></li>
                </ul>
              </li>
              <li>
                <p><strong>Tag props:</strong></p>
                <ul>
                  <li><strong>Type:</strong> <code>Object</code></li>
                  <li>
                    <p><strong>Value:</strong></p>
                    <ol>
                      <li>All the attributes you want to add to the label.</li>
                      <li>The style attribute supports Object writing, and the key must be converted from kebab-case to lower camel case</li>
                      <li><strong>There must be at least one direct attribute to indicate that the button is <code>'next'</code> or <code>'prev'</code>.</strong></li>
                      <li>By default, the button switching month is one month. If you want to set the number of months, you can set the step attribute here</li>
                    </ol>
                  </li>
                </ul>
              </li>
              <li>
                <p><strong>Children:</strong></p>
                <ul>
                  <li><strong>Type:</strong> <code>String | Array&lt;array&gt;</code></li>
                  <li><strong>Syntax:</strong> <code>[[Tag name, Tag props, Children], child2, ...] | text</code></li>
                  <li>
                    <p><strong>Value:</strong></p>
                    <ul>
                      <li><strong>String:</strong> If you only need a simple text, then just use String directly</li>
                      <li>
                        <p><strong>Array:</strong> If you need to use tags, then use array to set each tag</p>
                        <ol>
                          <li>Similar to the top-level setting</li>
                          <li>the difference is that prop does not need to write direct, the direction and number of steps of this button depend on the top-level setting
                          </li>
                          <li>And if there is no property to be set, the second parameter can be null</li>
                          <li>Another difference is that the string is accepted in the array, and it will be added as a node of the text</li>
                        </ol>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Life Cycle

The life cycle architecture refers to [VueJS](https://vuejs.org/), so the trigger timing is similar to the life cycle of [VueJS](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)

<table>
  <thead>
    <tr>
      <th>hook</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody style="text-align: left;">
    <tr>
      <td>onBeforeCreate</td>
      <td>
        <ul>
          <li><strong>Timing:</strong> After initializing options, before creating DOM</li>
          <li><strong>Parameter:</strong> options</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>onCreated</td>
      <td>
        <ul>
          <li><strong>Timing:</strong> After all DOMs are created</li>
          <li><strong>Parameter:</strong> <code>{ opts, ymData, pointers, doms }</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>onBeforeMount</td>
      <td>
        <ul>
          <li><strong>Timing:</strong> After calling the mount function, before mounting to the container</li>
          <li><strong>Parameter:</strong> <code>{ opts, ymData, pointers, doms }</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>onMounted</td>
      <td>
        <ul>
          <li><strong>Timing:</strong> After mounting on the container</li>
          <li><strong>Parameter:</strong> <code>{ opts, ymData, pointers, doms }</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>onBeforeUnmount</td>
      <td>
        <ul>
          <li><strong>Timing:</strong> After calling the unmount function, before unmount from the container</li>
          <li><strong>Parameter:</strong> <code>{ opts, ymData, pointers, doms }</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>onUnmounted</td>
      <td>
        <ul>
          <li><strong>Timing:</strong> After unmount on the container</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>onPreved</td>
      <td>
        <ul>
          <li><strong>Timing:</strong> Click the prev button</li>
          <li><strong>Parameter:</strong> <code>{ doms, diffMs, opts, step, ymData, pointers }</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>onNexted</td>
      <td>
        <ul>
          <li><strong>Timing:</strong> Click the next button</li>
          <li><strong>Parameter:</strong> <code>{ doms, diffMs, opts, step, ymData, pointers }</code></li>
        </ul>
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">
        <ul>
          <li>
            <p><strong>Parameter Description:</strong></p>
            <ul>
              <li><strong>opts:</strong> options</li>
              <li>
                <p><strong>ymData:</strong> <code>{ todayInfo, ymCache }</code></p>
                <ul>
                  <li><strong>todayInfo: </strong> Today's year, month and day </li>
                  <li>
                    <p><strong>ymCache: </strong> All created year and month data, including:</p>
                    <ul>
                      <li><strong>days:</strong> Number of days in the month</li>
                      <li><strong>weeks:</strong> Number of weeks in the month</li>
                      <li><strong>firstDay:</strong> The day of the week of the first day of the month, <code>0</code> is Sunday</li>
                      <li><strong>lastDay:</strong> The day of the week of the last day of the month, <code>0</code> is Sunday</li>
                      <li>
                        <p><strong>ymStatus:</strong> The relationship between the year and month relative to the current year and month</p>
                        <ol>
                          <li><code>-1</code> means the past, <code>0</code> means the present, <code>1</code> means the future</li>
                          <li>If it is a month other than the current month ( <code>month !== 0</code> ), the values ​​of dStatus and wStatus are both null</li>
                          <li>If it is the current month ( <code>month === 0</code> ), the value of dStatus is today’s date, and the value of wStatus is the number of weeks in the current month.</li>
                        </ol>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <p><strong>pointers:</strong></p>
                <ol>
                  <li>Year and month data at the far left and right</li>
                  <li>pL is the left, pR is the right</li>
                </ol>
              <li>
                <p><strong>doms:</strong> Dom of all parts created</p>
                <ul>
                  <li><strong>swBtnDs:</strong> Button to switch months</li>
                  <li><strong>ymCD:</strong> Containers for all months</li>
                  <li>
                    <p><strong>ymDs:</strong> Dom for each month</p>
                    <ul>
                      <li><strong>mWD:</strong> month wrap dom</li>
                      <li><strong>mHD:</strong> month header dom</li>
                      <li><strong>mCD:</strong> month content dom</li>
                      <li><strong>yD:</strong> year dom</li>
                      <li><strong>mD:</strong> month dom</li>
                      <li><strong>wDs:</strong> week doms</li>
                      <li><strong>wMD:</strong> week mark dom</li>
                      <li><strong>dDs:</strong> day doms</li>
                      <li><strong>empFDDs:</strong> Empty dom before date</li>
                      <li><strong>empBDDs:</strong> Empty dom after date</li>
                    </ul>
                  </li>
                </ul>
              <li>
                <p><strong>diffMs:</strong> Compare all the months that will change, the difference data before and after the change</p>
                <ul>
                  <li><strong>beforeYM:</strong> Month before change</li>
                  <li><strong>nextYM:</strong> Month after change</li>
                  <li><strong>beforeYMCache:</strong> Month data before the change</li>
                  <li><strong>nextYMCache:</strong> Month data after the change</li>
                  <li>
                    <p><strong>diffResult:</strong></p>
                    <ul>
                      <li><strong>calcWs</strong> Week difference</li>
                      <li><strong>calcDs</strong> Difference in days</li>   
                      <li><strong>calcFD</strong> The first day of the week difference</li>
                      <li><strong>calcLD</strong> The last day of the week difference</li>
                      <li><strong>statusChange</strong> Does the status of the year and month make a difference</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
  </tfoot>
</table>

## Methods

The zz function will return an object with mount and unmount methods

| function | description                                                                                        |
| -------- | -------------------------------------------------------------------------------------------------- |
| mount    | Mount the dom created by the zz function to the specified container, Accepts a selectors parameter |
| unmount  | Unmount the calendar mounted in the container                                                      |

## Plugins

- The plug-in mode of zz also refers to [VueJS](https://vuejs.org/v2/guide/plugins.html),
- The zz object has a use function. The plugin can be installed by passing the plugin into the use parameter.
- **The plug-in object must have an install method**

### usage

```javascript
const plugin = { install() {} };
zz.use(plugin);
```

### plugin list

| plugin                                     | description                                                                            |
| ------------------------------------------ | -------------------------------------------------------------------------------------- |
| [zzsper](https://github.com/jyunzn/zzsper) | **ZZ Single Picker**, provides the function of <strong>selecting a single day</strong> |
| zzrper                                     | **ZZ Range Picker**, not yet 😩😩😩                                                    |

## License

[MIT](LICENSE)
