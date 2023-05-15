import Vue from 'vue';
import App from './modules/App';
import router from './routes';
import store from './store';
import notifications from 'vue-notification';
import notifyMixin from '@/mixins/notify';
import pagination from './mixins/pagination';

Vue.config.productionTip = false;
Vue.use(notifications);
Vue.mixin(notifyMixin);
Vue.mixin(pagination);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
