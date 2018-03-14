import Vue from 'vue'
import App from './App'

//importando o módulo
import VueResource from 'vue-resource';

//importando o router!
import VueRouter from 'vue-router';

// tem que vir entre chaves, porque não é default
import { routes } from './routes';

//registrando o módulo/plugin no global view object
Vue.use(VueResource);

//registrado o router
Vue.use(VueRouter);

const router = new VueRouter({
  routes : routes,  //pode ser somente "routes", pois propriedade=valor
  mode: 'history'
});

new Vue({
  el: '#app',
  router,  //pode ser somente "router", pois nome propriedade=nome variavel
  render: h => h(App)
})
