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
    // Se tem hash (ex: #produtos), scrolla depois do DOM montar
    if (to.hash) {
      return new Promise((resolve) => {
        // aguarda o próximo ciclo do DOM/render
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
          })
        }, 100) // 300ms é seguro, pode ajustar
      })
    }

    // Se volta para cima, ou muda de página sem hash
    return { top: 0 }
  }
  ,
})

export default router
