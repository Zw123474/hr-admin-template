// vue如何封装一个插件
// 插件本质就是一个普通对象,只不过必须要有一个固定的方法叫install
import PageTool from './PageTool'
export default {
  install (Vue) {
    Vue.component('PageTool', PageTool)
  }
}
