export const imgerror = {
  // 指令所在的标签插入到DOM中的时候就会执行   自定义指令
  // inserted (el, binding) {
  //   el.src = 'http://ihrm.itheima.net/static/img/head.b6c3427d.jpg'
  // },
  // Dom数据更新时就会执行
  update (el, binding) {
    el.src = 'http://ihrm.itheima.net/static/img/head.b6c3427d.jpg'
  }
}
