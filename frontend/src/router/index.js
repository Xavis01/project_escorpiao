import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoView from '../views/InfoView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/contato', name: 'Contact', component: ContactView },
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
