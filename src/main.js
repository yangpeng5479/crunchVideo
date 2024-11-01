// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import Vant from 'vant';
import { Lazyload } from 'vant';

import 'vant/lib/index.css';
import './assets/font/font.css'

// import Vconsole from 'vconsole';

// const vConsole =new Vconsole();

// Vue.use(vConsole);
function setRem() {
  const baseSize = 16; // 基准字体大小，可以根据设计稿调整
  const scale = document.documentElement.clientWidth / 375; // 以iPhone 6为基准，计算缩放比例
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px';
}
setRem();
window.onresize = setRem;
Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
