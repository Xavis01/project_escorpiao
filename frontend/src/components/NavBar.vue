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
      <div class="hidden md:flex items-end justify-center gap-3">
        <a href="https://www.instagram.com/sodaescorpiao/" target="_blank" rel="noopener noreferrer"
          aria-label="Instagram" class="text-red-700 hover:text-red-500 transition">
          <Instagram class="w-6 h-6" />
        </a>
        <a href="https://www.facebook.com/61559856353973/" target="_blank" rel="noopener noreferrer"
          aria-label="Facebook" class="text-red-700 hover:text-red-500 transition">
          <Facebook class="w-6 h-6" />
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
      <div v-if="menuOpen"
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
          <a href="https://www.instagram.com/sodaescorpiao/" target="_blank" rel="noopener noreferrer"
            aria-label="Instagram" class="text-red-700 hover:text-red-500">
            <Instagram class="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/61559856353973/" target="_blank" rel="noopener noreferrer"
            aria-label="Facebook" class="text-red-700 hover:text-red-500">
            <Facebook class="w-6 h-6" />
          </a>
        </div>
      </div>
    </transition>

  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, Instagram, Facebook } from 'lucide-vue-next'
import Logo from '../assets/LogoEscorpiao.png'
import { useRoute, useRouter } from 'vue-router'
import { watch } from 'vue'


const route = useRoute()
const router = useRouter()
const activeSection = ref('') // ID da seção ativa ou nome da rota

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
