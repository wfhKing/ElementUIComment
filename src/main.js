import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import CommentComp from './comment-comp.vue';

import App from './App.vue';

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

new Vue({
	render: h => h(CommentComp),
}).$mount('#root')
// new Vue({
// render: h => h(App),
// }).$mount('#app')