<template>
  <header class="bg-white shadow-md fixed top-0 left-0 w-full z-50 h-32">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
      <!-- Logo -->
      <router-link to="/#inicio">
        <div class="flex items-center justify-center h-full ml-10">
          <img :src="Logo" alt="Logo Soda Escorpião" class="h-24 w-auto object-contain" />
          <!-- <span class="text-xl font-montserrat font-bold text-red-600">SODA ESCORPIÃO</span> -->
        </div>
      </router-link>

      <!-- Navegação Desktop -->
      <nav
        class="hidden md:flex space-x-12 mr-8 flex-grow justify-end text-gray-600 font-semibold font-montserrat tracking-wide">
        <router-link v-for="section in sections" :key="section.id" :to="`/#${section.id}`"
          class="group relative inline-block transition hover:text-red-800"
          :class="activeSection === section.id ? 'text-red-600' : 'text-gray-600'">
          {{ section.label }}
          <span class="absolute left-0 bottom-0 h-0.5 transition-all duration-300" :class="activeSection === section.id
            ? 'w-full bg-red-600 group-hover:bg-red-800'
            : 'w-0 bg-red-800 group-hover:w-full'">
          </span>

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


      <!-- Menu Mobile Button -->
      <button class="md:hidden" @click="menuOpen = !menuOpen">
        <Menu v-if="!menuOpen" class="w-6 h-6 text-red-800" />
        <X v-else class="w-6 h-6 text-red-800" />
      </button>
    </div>

    <!-- Navegação Mobile -->
    <transition name="fade">
      <div v-if="menuOpen" class="md:hidden px-6 py-4 bg-white shadow">
        <router-link to="/#empresa" class="block py-1 text-gray-600 hover:text-red-600"
          @click="menuOpen = false">Empresa</router-link>
        <router-link to="/#produtos" class="block py-1 text-gray-600 hover:text-red-600"
          @click="menuOpen = false">Produtos</router-link>
        <router-link to="/#receitas" class="block py-1 text-gray-600 hover:text-red-600"
          @click="menuOpen = false">Receitas</router-link>
        <router-link to="/#ondecomprar" class="block py-1 text-gray-600 hover:text-red-600"
          @click="menuOpen = false">Onde Comprar</router-link>
        <router-link to="/info" class="block py-1 text-gray-600 hover:text-red-600"
          @click="menuOpen = false">Informações</router-link>
        <router-link to="/contato" class="block py-1 text-gray-600 hover:text-red-600"
          @click="menuOpen = false">Contato</router-link>
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
    activeSection.value = newPath.replace('/', '') // 'info' ou 'contato'
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
</style>
