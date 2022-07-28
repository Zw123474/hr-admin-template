// vue如何封装一个插件
// 插件本质就是一个普通对象,只不过必须要有一个固定的方法叫install
import PageTool from './PageTool'

// vue插件的写法
// 1. 定义一个插件 插件就是一个普通的对象，只不过这个对象有一个固定的方法，名字叫install 参数就是Vue
// 2. 使用一个插件 Vue.use(插件名字) 使用的时候 会自动执行install方法
// 为什么要使用插件或者插件有什么好处?
// 如果不用插件的写法，我们封装了100个组件，给别的同事使用，同事他们需要导入100次，注册100次 使用不方便
// 但是插件只要我们设置好了，用户在使用的时候只有一行
import UploadImage from './UploadImage'
export default {
  install (Vue) {
    Vue.component('PageTool', PageTool)
    Vue.component('UploadImage', UploadImage)
  }
}
