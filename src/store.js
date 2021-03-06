import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/store/authentication';
import dashboard from '@/store/dashboard';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    auth,
    dashboard,
  },
  strict: debug,
});
