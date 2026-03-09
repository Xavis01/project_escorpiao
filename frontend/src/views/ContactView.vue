<template>
  <div class="mt-16" style="background-color: #faf4ef; overflow-x: hidden;">
    <section id="contato" class="max-w-6xl mx-auto px-6 pt-24 scroll-mt-32">
      <!-- Título -->
      <div class="flex items-center gap-4 mb-8 reveal-element">
        <div class="flex items-center gap-4 mb-6 pt-6">
          <h2 class="text-3xl font-extrabold text-red-700 font-montserrat tracking-tight uppercase">CONTATO</h2>
          <ContactRound class="text-red-700 " stroke-width="2" size="36" />
        </div>
      </div>

      <!-- Texto -->
      <div class="reveal-element delay-100 mb-16">
        <p class="text-gray-700 text-lg mb-6 leading-relaxed font-montserrat relative pl-6 border-l-4 border-red-700">
          Com sólida experiência no mercado químico, entregamos um produto de alto padrão, com logística eficiente
          e atendimento personalizado, alcançando todo o território brasileiro com rapidez e segurança.
        </p>
        <p class="text-gray-700 text-lg mb-6 leading-relaxed font-montserrat relative pl-6 border-l-4 border-red-700">
          Nosso compromisso vai além da entrega: construímos parcerias duradouras com base na confiança, na
          excelência e no suporte contínuo, sempre prontos para atender às demandas do mercado com
          responsabilidade e eficiência.
        </p>
        <p
          class="text-xl font-bold text-red-800 font-montserrat tracking-wide mt-8 text-center reveal-element delay-200">
          Soda Cáustica Escorpião - Tradição capixaba, presença nacional.
        </p>
      </div>

      <!-- Action Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto font-montserrat mb-24">

        <!-- Seja Revendedor Card -->
        <router-link to="/contato/revendedor" class="group outline-none">
          <div
            class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgba(185,28,28,0.08)] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col items-center text-center reveal-scale delay-300 relative overflow-hidden">
            <!-- Decorativo -->
            <div
              class="absolute -top-10 -right-10 w-32 h-32 bg-red-50 rounded-full blur-2xl opacity-50 group-hover:bg-red-100 transition-colors duration-500">
            </div>

            <div
              class="bg-gradient-to-br from-red-50 to-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 relative z-10">
              <Store class="text-red-600 w-10 h-10 group-hover:text-red-700 transition-colors" />
            </div>

            <h3 class="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-700 transition-colors relative z-10">
              Seja Revendedor</h3>
            <p class="text-gray-500 font-montserrat text-base mb-8 relative z-10">
              Junte-se à nossa rede de parceiros e ofereça a melhor soda cáustica do mercado em seu estabelecimento.
            </p>

            <div class="mt-auto relative z-10 w-full">
              <button
                class="w-full flex justify-center items-center gap-2 bg-red-50 text-red-700 font-bold py-3 px-6 rounded-full group-hover:bg-red-700 group-hover:text-white transition-colors duration-300">
                Quero Revender
              </button>
            </div>
          </div>
        </router-link>

        <!-- Fale Conosco Card -->
        <router-link to="/contato/fale-conosco" class="group outline-none">
          <div
            class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgba(185,28,28,0.08)] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col items-center text-center reveal-scale delay-400 relative overflow-hidden">
            <!-- Decorativo -->
            <div
              class="absolute -bottom-10 -left-10 w-32 h-32 bg-red-50 rounded-full blur-2xl opacity-50 group-hover:bg-red-100 transition-colors duration-500">
            </div>

            <div
              class="bg-gradient-to-br from-red-50 to-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 relative z-10">
              <MessageCircle class="text-red-600 w-10 h-10 group-hover:text-red-700 transition-colors" />
            </div>

            <h3 class="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-700 transition-colors relative z-10">
              Fale Conosco</h3>
            <p class="text-gray-500 font-montserrat text-base mb-8 relative z-10">
              Dúvidas, sugestões ou suporte? Nossa equipe de atendimento está pronta para ajudar.
            </p>

            <div class="mt-auto relative z-10 w-full">
              <button
                class="w-full flex justify-center items-center gap-2 bg-red-50 text-red-700 font-bold py-3 px-6 rounded-full group-hover:bg-red-700 group-hover:text-white transition-colors duration-300">
                Entrar em Contato
              </button>
            </div>
          </div>
        </router-link>

      </div>

    </section>
    <br><br><br>
  </div>
</template>

<script setup>
import { ContactRound, Store, MessageCircle } from 'lucide-vue-next';
import { onMounted } from 'vue';

onMounted(() => {
  // Scroll Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px', // Trigger slighly before bottom
    threshold: 0.1
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target) // Only animate once
      }
    })
  }, observerOptions)

  // Select elements to animate
  const revealElements = document.querySelectorAll('.reveal-element, .reveal-scale, .reveal-left, .reveal-right')
  revealElements.forEach(el => observer.observe(el))
});

</script>

<style scoped>
/* ----------------------------------------------------
   Core Animations 
---------------------------------------------------- */

.reveal-element {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.reveal-element.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-scale {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
  transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.reveal-scale.is-visible {
  opacity: 1;
  transform: scale(1) translateY(0);
}

/* Delay Utils */
.delay-100 {
  transition-delay: 100ms;
}

.delay-200 {
  transition-delay: 200ms;
}

.delay-300 {
  transition-delay: 300ms;
}

.delay-400 {
  transition-delay: 400ms;
}
</style>