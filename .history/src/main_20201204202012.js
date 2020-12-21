import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'lib-flexible/flexible'

import progressive from 'progressive-image/dist/vue'; // 渐进式
Vue.use(progressive, {
  removePreview: true,
  scale: true
})

import {
  Button,
  NavBar,
  Form,
  Field,
  Popup,
  Toast,
  Tabbar,
  TabbarItem,
  Search,
  Swipe,
  SwipeItem,
  Stepper,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Empty,
  SwipeCell,
  Checkbox,
  SubmitBar,
  List,
  AddressEdit,
  AddressList,
  Icon,
  Dialog,
  Tab,
  Tabs,
  Cell,
  Uploader,
  Card,
  Sidebar,
  SidebarItem,
  Lazyload,
  Sticky,
  ImagePreview,

} from 'vant'

//注册Button组件
Vue
  .use(Button)
  .use(NavBar)
  .use(Form)
  .use(Field)
  .use(Popup)
  .use(Toast)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Search)
  .use(Swipe)
  .use(SwipeItem)
  .use(Stepper)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(Empty)
  .use(SwipeCell)
  .use(Checkbox)
  .use(SubmitBar)
  .use(List)
  .use(AddressEdit)
  .use(AddressList)
  .use(Icon)
  .use(Dialog)
  .use(Tab)
  .use(Tabs)
  .use(Cell)
  .use(Uploader)
  .use(Card)
  .use(Sidebar)
  .use(SidebarItem)
  .use(Lazyload, {
    lazyComponent: true,
  })
  .use(Sticky)
  .use(ImagePreview)

axios.defaults.baseURL = "http://192.168.83.25:3000";

axios.interceptors.request.use(config => {
  if (config.method == "post") {
    let paramsString = "";
    for (let key in config.data) {
      paramsString += `?${key}=${config.data[key]}$`;
    }

    config.data = paramsString.slice(0, -1);
  }

  return config;
})

Vue.use(VueAxios, axios)


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')