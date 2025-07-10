import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeHistory from '../views/HomeHistory.vue'
import InfoView from '../views/InfoView.vue'
import ContactView from '../views/ContactView.vue'
import ContactDealer from '../views/ContactDealer.vue'
import ContactUs from '../views/ContactUs.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/nossa-historia', name: 'History', component: HomeHistory },
  { path: '/contato', name: 'Contact', component: ContactView },
  { path: '/contato/revendedor', name: 'ContactDealer', component: ContactDealer },
  { path: '/contato/fale-conosco', name: 'ContactUs', component: ContactUs },
  { path: '/info', name: 'Info', component: InfoView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Se tem hash (ex: #produtos), scrolla até o elemento
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    // Se não, vai para o topo
    return { top: 0 }
  },
})

export default router
