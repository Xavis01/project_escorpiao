<template>
  <header
    class="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 fixed top-0 left-0 w-full z-50 h-24 md:h-28"
    style="z-index: 10000; transition: all 0.3s ease;">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 h-full">

      <!-- Logo -->
      <router-link to="/#inicio" class="flex-shrink-0 outline-none">
        <div class="flex items-center justify-center h-full sm:ml-2 md:ml-6 group">
          <img :src="Logo" alt="Logo Soda Escorpião"
            class="h-16 sm:h-20 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105" />
        </div>
      </router-link>

      <!-- Navegação Desktop -->
      <nav
        class="hidden lg:flex items-center space-x-2 xl:space-x-4 flex-grow justify-center font-montserrat tracking-wider text-[13px] xl:text-[14px]">

        <router-link v-for="section in sections" :key="section.id" :to="`/#${section.id}`"
          class="relative px-4 py-2 transition-colors duration-300 outline-none group"
          :class="activeSection === section.id ? 'text-red-700' : 'text-gray-500 hover:text-gray-900'">
          <span class="relative z-10">{{ section.label }}</span>

          <!-- Animated Underline Indicator -->
          <span
            class="absolute bottom-0 left-1/2 -translate-x-1/2 h-[4px] rounded-t-lg transition-all duration-500 ease-out"
            :class="activeSection === section.id ? 'w-[80%] bg-red-600 opacity-100' : 'w-0 bg-gray-300 opacity-0 group-hover:w-[40%] group-hover:opacity-100'"></span>
        </router-link>

        <router-link to="/info" class="relative px-4 py-2 transition-colors duration-300 outline-none group"
          :class="activeSection === 'info' ? 'text-red-700' : 'text-gray-500 hover:text-gray-900'">
          <span class="relative z-10">INFORMAÇÕES</span>
          <span
            class="absolute bottom-0 left-1/2 -translate-x-1/2 h-[4px] rounded-t-lg transition-all duration-500 ease-out"
            :class="activeSection === 'info' ? 'w-[80%] bg-red-600 opacity-100' : 'w-0 bg-gray-300 opacity-0 group-hover:w-[40%] group-hover:opacity-100'"></span>
        </router-link>

        <router-link to="/contato" class="relative px-4 py-2 transition-colors duration-300 outline-none group"
          :class="activeSection === 'contato' ? 'text-red-700' : 'text-gray-500 hover:text-gray-900'">
          <span class="relative z-10">CONTATO</span>
          <span
            class="absolute bottom-0 left-1/2 -translate-x-1/2 h-[4px] rounded-t-lg transition-all duration-500 ease-out"
            :class="activeSection === 'contato' ? 'w-[80%] bg-red-600 opacity-100' : 'w-0 bg-gray-300 opacity-0 group-hover:w-[40%] group-hover:opacity-100'"></span>
        </router-link>

      </nav>

      <!-- Botões redes sociais (desktop) -->
      <div title="Redes Sociais" class="hidden md:flex items-center justify-end gap-2 pr-2">
        <a href="https://www.instagram.com/sodaescorpiao/" target="_blank" rel="noopener noreferrer"
          aria-label="Instagram"
          class="p-2.5 rounded-full text-red-700 hover:bg-red-50 hover:text-red-600 transition-all duration-300 group active:scale-90">
          <Instagram class="w-[22px] h-[22px] group-hover:scale-110 transition-transform duration-300" />
        </a>
        <a title="Facebook" href="https://www.facebook.com/61559856353973/" target="_blank" rel="noopener noreferrer"
          aria-label="Facebook"
          class="p-2.5 rounded-full text-red-700 hover:bg-red-50 hover:text-red-600 transition-all duration-300 group active:scale-90">
          <Facebook class="w-[22px] h-[22px] group-hover:scale-110 transition-transform duration-300" />
        </a>
        <a title="TikTok" href="https://www.tiktok.com/@sodaescorpiao" target="_blank" rel="noopener noreferrer"
          aria-label="TikTok"
          class="p-2.5 rounded-full text-red-700 hover:bg-red-50 hover:text-red-600 transition-all duration-300 group active:scale-90">
          <svg class="w-[20px] h-[20px] group-hover:scale-110 transition-transform duration-300"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
            <path
              d="M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z" />
          </svg>
        </a>
      </div>

      <!-- Botão Mobile Menu -->
      <button class="lg:hidden p-2 rounded-full focus:outline-none focus:bg-red-50 group transition-colors duration-300"
        @click="menuOpen = !menuOpen" aria-label="Menu principal">
        <Menu v-if="!menuOpen" class="w-8 h-8 text-red-800 group-hover:text-red-600 transition-colors duration-300" />
        <X v-else class="w-8 h-8 text-red-800 group-hover:text-red-600 transition-colors duration-300" />
      </button>
    </div>

    <!-- Navegação Mobile (Floating Card) -->
    <transition name="slide-fade">
      <div v-if="menuOpen" ref="mobileMenu"
        class="lg:hidden absolute left-4 right-4 top-24 bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 rounded-3xl overflow-hidden font-montserrat z-50">

        <div class="p-6 flex flex-col gap-2 relative">
          <!-- Decorativo -->
          <div
            class="absolute -top-10 -right-10 w-32 h-32 bg-red-50 rounded-full blur-2xl opacity-60 z-0 pointer-events-none">
          </div>

          <router-link to="/#empresa"
            class="relative z-10 block py-3 px-6 font-semibold rounded-2xl transition-all duration-300 active:scale-[0.98] hover:translate-x-1 origin-left"
            :class="activeSection === 'empresa' ? 'bg-red-50 text-red-700 tracking-wide translate-x-1 shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-red-600'"
            @click="menuOpen = false">EMPRESA</router-link>

          <router-link to="/#produtos"
            class="relative z-10 block py-3 px-6 font-semibold rounded-2xl transition-all duration-300 active:scale-[0.98] hover:translate-x-1 origin-left"
            :class="activeSection === 'produtos' ? 'bg-red-50 text-red-700 tracking-wide translate-x-1 shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-red-600'"
            @click="menuOpen = false">PRODUTOS</router-link>

          <router-link to="/#receitas"
            class="relative z-10 block py-3 px-6 font-semibold rounded-2xl transition-all duration-300 active:scale-[0.98] hover:translate-x-1 origin-left"
            :class="activeSection === 'receitas' ? 'bg-red-50 text-red-700 tracking-wide translate-x-1 shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-red-600'"
            @click="menuOpen = false">RECEITAS</router-link>

          <router-link to="/#ondecomprar"
            class="relative z-10 block py-3 px-6 font-semibold rounded-2xl transition-all duration-300 active:scale-[0.98] hover:translate-x-1 origin-left"
            :class="activeSection === 'ondecomprar' ? 'bg-red-50 text-red-700 tracking-wide translate-x-1 shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-red-600'"
            @click="menuOpen = false">ONDE COMPRAR</router-link>

          <div class="w-full h-px bg-gray-100 my-2 relative z-10"></div> <!-- Divisória -->

          <router-link to="/info"
            class="relative z-10 block py-3 px-6 font-semibold rounded-2xl transition-all duration-300 active:scale-[0.98] hover:translate-x-1 origin-left"
            :class="activeSection === 'info' ? 'bg-red-50 text-red-700 tracking-wide translate-x-1 shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-red-600'"
            @click="menuOpen = false">INFORMAÇÕES</router-link>

          <router-link to="/contato"
            class="relative z-10 block py-3 px-6 font-semibold rounded-2xl transition-all duration-300 active:scale-[0.98] hover:translate-x-1 origin-left"
            :class="activeSection === 'contato' ? 'bg-red-50 text-red-700 tracking-wide translate-x-1 shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-red-600'"
            @click="menuOpen = false">CONTATO</router-link>

          <!-- Mobile Social Medias -->
          <div class="flex gap-4 justify-center mt-6 pt-4 border-t border-gray-100 relative z-10">
            <a title="Instagram" href="https://www.instagram.com/sodaescorpiao/" target="_blank"
              rel="noopener noreferrer"
              class="p-3 bg-red-50 rounded-full text-red-700 hover:bg-red-100 hover:text-red-800 transition-colors">
              <Instagram class="w-6 h-6" />
            </a>
            <a title="Facebook" href="https://www.facebook.com/61559856353973/" target="_blank"
              rel="noopener noreferrer"
              class="p-3 bg-red-50 rounded-full text-red-700 hover:bg-red-100 hover:text-red-800 transition-colors">
              <Facebook class="w-6 h-6" />
            </a>
            <a title="TikTok" href="https://www.tiktok.com/@sodaescorpiao" target="_blank" rel="noopener noreferrer"
              class="p-3 bg-red-50 rounded-full text-red-700 hover:bg-red-100 hover:text-red-800 transition-colors">
              <svg class="w-5 h-5 mx-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                <path
                  d="M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </transition>

  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Menu, X, Instagram, Facebook } from 'lucide-vue-next'
import Logo from '../assets/LogoEscorpiao.png'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const activeSection = ref('') // ID da seção ativa ou nome da rota
const mobileMenu = ref(null)

const menuOpen = ref(false)

const sections = [
  { id: 'empresa', label: 'EMPRESA' },
  { id: 'produtos', label: 'PRODUTOS' },
  { id: 'receitas', label: 'RECEITAS' },
  { id: 'ondecomprar', label: 'ONDE COMPRAR' }
]

function handleScroll() {
  if (route.path !== '/') return
  let current = ''
  for (const section of sections) {
    const el = document.getElementById(section.id)
    if (el) {
      const rect = el.getBoundingClientRect()
      // Adjust offsets for new navbar height tracking
      if (rect.top <= 200 && rect.bottom > 200) {
        current = section.id
        break
      }
    }
  }
  activeSection.value = current
}

onMounted(() => {
  if (route.path === '/') {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Atualiza ao mudar de rota
watch(() => route.path, (newPath) => {
  if (newPath === '/') {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  } else {
    window.removeEventListener('scroll', handleScroll)
    // Se for '/info', destaca 'info'
    if (newPath.startsWith('/info')) {
      activeSection.value = 'info'
    }
    // Se for '/contato' ou qualquer subrota de contato, destaca 'contato'
    else if (newPath.startsWith('/contato')) {
      activeSection.value = 'contato'
    }
    // Caso contrário, tenta pegar o nome da rota principal
    else {
      activeSection.value = newPath.replace('/', '')
    }
  }
})

function handleClickOutside(event) {
  // Testa se menu está aberto e se o clique não está dentro do menu mobile ou do botão que o abre
  if (menuOpen.value && mobileMenu.value && !mobileMenu.value.contains(event.target) && !event.target.closest('button')) {
    menuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})

</script>

<style scoped>
/* Transições do menu mobile (Slide and Fade in) */
.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.5, 0, 0.2, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.98);
}
</style>
