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
      <nav class="hidden md:flex space-x-12 mr-8 text-gray-600 font-semibold font-montserrat tracking-wide">
        <router-link to="/#empresa" class="group relative inline-block hover:text-red-600 transition">EMPRESA
          <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
        </router-link>

        <router-link to="/#produtos" class="group relative inline-block hover:text-red-600 transition">PRODUTOS
          <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
        </router-link>

        <router-link to="/#receitas" class="group relative inline-block hover:text-red-600 transition">RECEITAS
          <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
        </router-link>

        <router-link to="/#ondecomprar" class="group relative inline-block hover:text-red-600 transition">ONDE COMPRAR
          <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
        </router-link>
        
        <router-link to="/info" class="group relative inline-block hover:text-red-600 transition">INFORMAÇÕES
          <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
        </router-link>
        
        <router-link to="/contato" class="group relative inline-block hover:text-red-600 transition">CONTATO
          <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
        </router-link>
      </nav>

      <!-- Menu Mobile Button -->
      <button class="md:hidden" @click="menuOpen = !menuOpen">
        <Menu v-if="!menuOpen" class="w-6 h-6 text-red-800" />
        <X v-else class="w-6 h-6 text-red-800" />
      </button>
    </div>

    <!-- Navegação Mobile -->
    <transition name="fade">
      <div v-if="menuOpen" class="md:hidden px-6 py-4 bg-white shadow">
        <router-link to="/#empresa" class="block py-1 text-gray-600 hover:text-red-600" @click="menuOpen = false">Empresa</router-link>
        <router-link to="/#produtos" class="block py-1 text-gray-600 hover:text-red-600" @click="menuOpen = false">Produtos</router-link>
        <router-link to="/#receitas" class="block py-1 text-gray-600 hover:text-red-600" @click="menuOpen = false">Receitas</router-link>
        <router-link to="/#ondecomprar" class="block py-1 text-gray-600 hover:text-red-600" @click="menuOpen = false">Onde Comprar</router-link>
        <router-link to="/info" class="block py-1 text-gray-600 hover:text-red-600" @click="menuOpen = false">Informações</router-link>
        <router-link to="/contato" class="block py-1 text-gray-600 hover:text-red-600" @click="menuOpen = false">Contato</router-link>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import Logo from '../assets/LogoEscorpiao.png'

const menuOpen = ref(false)
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
