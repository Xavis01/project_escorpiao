<template>
  <header class="bg-white shadow-md fixed top-0 left-0 w-full z-50 h-24 sm:h-28 md:h-32" style="z-index: 10000;">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
      <!-- Logo -->
      <router-link to="/#inicio">
        <div class="flex items-center justify-center h-full ml-2 sm:ml-6 md:ml-10">
          <img :src="Logo" alt="Logo Soda Escorpião"
            class="icon-container h-16 sm:h-20 md:h-24 w-auto object-contain" />
        </div>
      </router-link>

      <!-- Navegação Desktop -->
      <nav
        class="hidden md:flex space-x-4 lg:space-x-8 xl:space-x-12 mr-2 sm:mr-4 md:mr-8 flex-grow justify-end text-gray-600 font-semibold font-montserrat tracking-wide">
        <router-link v-for="section in sections" :key="section.id" :to="`/#${section.id}`"
          class="group relative inline-block transition hover:text-red-800"
          :class="activeSection === section.id ? 'text-red-600' : 'text-gray-600'">
          {{ section.label }}
          <span class="absolute left-0 bottom-0 h-0.5 transition-all duration-300" :class="activeSection === section.id
            ? 'w-full bg-red-600 group-hover:bg-red-800'
            : 'w-0 bg-red-800 group-hover:w-full'"></span>
        </router-link>
        <router-link to="/info" class="group relative inline-block transition hover:text-red-800"
          :class="activeSection === 'info' ? 'text-red-600 font-bold' : 'text-gray-600'">
          INFORMAÇÕES
          <span class="absolute left-0 bottom-0 h-0.5 transition-all duration-300"
            :class="activeSection === 'info' ? 'w-full bg-red-600 group-hover:bg-red-800' : 'w-0 bg-red-800 group-hover:w-full'"></span>
        </router-link>
        <router-link to="/contato" class="group relative inline-block transition hover:text-red-800"
          :class="activeSection === 'contato' ? 'text-red-600 font-bold' : 'text-gray-600'">
          CONTATO
          <span class="absolute left-0 bottom-0 h-0.5 transition-all duration-300"
            :class="activeSection === 'contato' ? 'w-full bg-red-600 group-hover:bg-red-800' : 'w-0 bg-red-800 group-hover:w-full'"></span>
        </router-link>
      </nav>

      <!-- Botões redes sociais (desktop) -->
      <div title="Instagram" class="hidden md:flex items-end justify-center gap-3">
        <a href="https://www.instagram.com/sodaescorpiao/" target="_blank" rel="noopener noreferrer"
          aria-label="Instagram" class="text-red-700 hover:text-red-500 transition">
          <Instagram class="w-6 h-6" />
        </a>
        <a title="Facebook" href="https://www.facebook.com/61559856353973/" target="_blank" rel="noopener noreferrer"
          aria-label="Facebook" class="text-red-700 hover:text-red-500 transition">
          <Facebook class="w-6 h-6" />
        </a>
        <a title="TikTok" href="https://www.tiktok.com/@sodaescorpiao" target="_blank" rel="noopener noreferrer"
          aria-label="TikTok"
          class="text-red-700 hover:text-red-500 transition rounded-lg p-1 border-2 border-red-700 hover:border-red-500">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
            <path
              d="M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z" />
          </svg>
        </a>
      </div>

      <!-- Botão Mobile Menu -->
      <button class="md:hidden ml-2" @click="menuOpen = !menuOpen" aria-label="Menu principal">
        <Menu v-if="!menuOpen" class="w-7 h-7 text-red-800" />
        <X v-else class="w-7 h-7 text-red-800" />
      </button>
    </div>

    <!-- Navegação Mobile -->
    <!-- Navegação Mobile -->
    <transition name="fade">
      <div v-if="menuOpen" ref="mobileMenu"
        class="md:hidden px-4 sm:px-8 py-3 bg-white shadow fixed left-0 right-0 top-24 sm:top-28 z-50 rounded-b-xl font-montserrat">


        <router-link to="/#empresa" class="block py-3 px-2 font-medium rounded transition"
          :class="activeSection === 'empresa' ? 'text-red-600 bg-red-50 font-bold border-l-4 border-red-600' : 'text-gray-600 hover:text-red-600'"
          @click="menuOpen = false">Empresa</router-link>

        <router-link to="/#produtos" class="block py-3 px-2 font-medium rounded transition"
          :class="activeSection === 'produtos' ? 'text-red-600 bg-red-50 font-bold border-l-4 border-red-600' : 'text-gray-600 hover:text-red-600'"
          @click="menuOpen = false">Produtos</router-link>

        <router-link to="/#receitas" class="block py-3 px-2 font-medium rounded transition"
          :class="activeSection === 'receitas' ? 'text-red-600 bg-red-50 font-bold border-l-4 border-red-600' : 'text-gray-600 hover:text-red-600'"
          @click="menuOpen = false">Receitas</router-link>

        <router-link to="/#ondecomprar" class="block py-3 px-2 font-medium rounded transition"
          :class="activeSection === 'ondecomprar' ? 'text-red-600 bg-red-50 font-bold border-l-4 border-red-600' : 'text-gray-600 hover:text-red-600'"
          @click="menuOpen = false">Onde Comprar</router-link>

        <router-link to="/info" class="block py-3 px-2 font-medium rounded transition"
          :class="activeSection === 'info' ? 'text-red-600 bg-red-50 font-bold border-l-4 border-red-600' : 'text-gray-600 hover:text-red-600'"
          @click="menuOpen = false">Informações</router-link>

        <router-link to="/contato" class="block py-3 px-2 font-medium rounded transition"
          :class="activeSection === 'contato' ? 'text-red-600 bg-red-50 font-bold border-l-4 border-red-600' : 'text-gray-600 hover:text-red-600'"
          @click="menuOpen = false">Contato</router-link>

        <div class="flex gap-6 justify-center mt-4">
          <a title="Instagram" href="https://www.instagram.com/sodaescorpiao/" target="_blank" rel="noopener noreferrer"
            aria-label="Instagram" class="text-red-700 hover:text-red-500">
            <Instagram class="w-6 h-6" />
          </a>
          <a title="Facebook" href="https://www.facebook.com/61559856353973/" target="_blank" rel="noopener noreferrer"
            aria-label="Facebook" class="text-red-700 hover:text-red-500">
            <Facebook class="w-6 h-6" />
          </a>
          <a title="TikTok" href="https://www.tiktok.com/@sodaescorpiao" target="_blank" rel="noopener noreferrer"
            aria-label="TikTok"
            class="text-red-700 hover:text-red-500 transition rounded-lg p-1 border-2 border-red-700 hover:border-red-500">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
              <path
                d="M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z" />
            </svg>
          </a>
        </div>
      </div>
    </transition>

  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { Menu, X, Instagram, Facebook } from 'lucide-vue-next'
import Logo from '../assets/LogoEscorpiao.png'
import { useRoute, useRouter } from 'vue-router'
import { watch } from 'vue'


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
      if (rect.top <= 150 && rect.bottom > 150) {
        current = section.id
        break
      }
    }
  }
  activeSection.value = current
}

onMounted(() => {
  if (route.path === '/') {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  }
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Atualiza ao mudar de rota
watch(() => route.path, (newPath) => {
  if (newPath === '/') {
    window.addEventListener('scroll', handleScroll)
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
  // Testa se menu está aberto e se o clique não está dentro do menu mobile
  if (menuOpen.value && mobileMenu.value && !mobileMenu.value.contains(event.target)) {
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.icon-container {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon-container:hover {
  transform: scale(1.05);
  /* box-shadow: 0 8px 15px rgba(164, 34, 30, 0.6); */
}
</style>
