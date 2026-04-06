<template>
  <div class="mt-16" style="background-color: #faf4ef; overflow-x: hidden;">
    <section id="info" class="max-w-6xl mx-auto px-6 pt-24 scroll-mt-32">
      <!-- Título -->
      <div class="flex items-center gap-4 mb-4 reveal-element">
        <div class="flex items-center gap-4 mb-6 pt-6">
          <h2 class="text-3xl font-extrabold text-red-700 font-montserrat tracking-tight">INFORMAÇÕES</h2>
          <Info class="text-red-700" :stroke-width="2" :size="30" />
        </div>
      </div>

      <!-- Conteúdo principal -->
      <div class="info-container">
        <!-- Textos -->
        <div class="info-text reveal-element delay-100 space-y-6">
          <p class="text-gray-700 text-lg leading-relaxed font-montserrat relative pl-6 border-l-4 border-red-700">
            A soda cáustica é um produto muito corrosivo que pode causar queimaduras severas e irreversíveis
            na pele e nos olhos, irritação respiratória e é nocivo para organismos aquáticos.
          </p>
          <p class="text-gray-700 text-lg leading-relaxed font-montserrat relative pl-6 border-l-4 border-red-700">
            Além dos cuidados no manuseio, é fundamental atenção ao armazenamento. A ingestão do produto
            pode causar a morte.
          </p>

          <!-- Chamada de Emergência -->
          <div
            class="mt-8 bg-red-50 border border-red-200 rounded-2xl p-6 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow duration-300">
            <div class="bg-red-100 p-3 rounded-full shrink-0">
              <Phone class="w-6 h-6 text-red-700" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-red-800 mb-1 font-montserrat">Central de Emergência</h3>
              <p class="text-gray-700 font-montserrat text-base">
                Caso ocorra contato com a soda cáustica, ligue imediatamente para:
              </p>
              <p class="text-2xl font-extrabold text-red-700 mt-2 font-montserrat tracking-wide">
                0800-118270
              </p>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="divider reveal-scale delay-200 hidden md:block"></div>

        <!-- Ficha de Dados de Segurança -->
        <div
          class="flex flex-col items-center flex-1 fds-col reveal-element delay-300 bg-white p-8 rounded-3xl shadow-sm border border-gray-100/50 hover:shadow-[0_20px_40px_rgba(185,28,28,0.08)] transition-all duration-500 hover:-translate-y-2 mt-8 md:mt-0">
          <div class="bg-red-50 p-4 rounded-full mb-4">
            <FileText class="w-8 h-8 text-red-600" />
          </div>
          <span class="mb-4 text-center text-lg font-bold text-gray-800 font-montserrat">
            Ficha de Dados de Segurança
          </span>
          <p class="text-center text-sm text-gray-500 mb-6 font-montserrat px-2">
            Acesso rápido às informações detalhadas sobre segurança e propriedades da soda cáustica.
          </p>
          <button
            class="group relative overflow-hidden flex items-center justify-center gap-2 w-full bg-red-700 text-white px-8 py-3.5 rounded-full font-semibold font-montserrat tracking-wide transition-all duration-300 hover:bg-white border border-red-700 hover:shadow-[0_8px_30px_rgb(185,28,28,0.3)] hover:-translate-y-1"
            @click="openPdf">
            <span class="relative z-10 group-hover:text-red-700">VISUALIZAR FDS</span>
            <Download class="w-5 h-5 relative z-10 group-hover:text-red-700 group-hover:animate-bounce" />
          </button>
        </div>
      </div>

      <!-- Seção: Manuseio -->
      <div class="flex items-center gap-4 mb-8 mt-16 reveal-element">
        <div class="flex items-center gap-4 mb-6 pt-6">
          <h2 class="text-3xl font-extrabold text-red-700 font-montserrat tracking-tight uppercase">MANUSEIO DA SODA
            CÁUSTICA</h2>
          <ShieldAlert class="text-red-700" :stroke-width="2" :size="isMobile ? 60 : 36" />
        </div>
      </div>

      <!-- Grade de Manuseio -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <!-- Card 1 -->
        <div
          class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 group reveal-scale delay-100">
          <div
            class="bg-gradient-to-br from-red-50 to-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Beaker class="text-red-600 w-8 h-8" />
          </div>
          <h3 class="text-xl font-bold text-gray-800 font-montserrat mb-3 group-hover:text-red-700 transition-colors">
            Utensílios Adequados</h3>
          <p class="text-gray-600 font-montserrat text-base leading-relaxed">
            Utilize plástico resistente ao aquecimento para a diluição. Nunca use para alimentos e lave abundantemente
            antes de reutilizar.
          </p>
        </div>

        <!-- Card 2 -->
        <div
          class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 group reveal-scale delay-200">
          <div
            class="bg-gradient-to-br from-red-50 to-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <ShieldAlert class="text-red-600 w-8 h-8" />
          </div>
          <h3 class="text-xl font-bold text-gray-800 font-montserrat mb-3 group-hover:text-red-700 transition-colors">
            Proteção Pessoal</h3>
          <p class="text-gray-600 font-montserrat text-base leading-relaxed">
            É obrigatório o uso de luvas (PVC ou nitrílica), máscara facial e óculos de proteção com vedação lateral.
          </p>
        </div>

        <!-- Card 3 -->
        <div
          class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 group reveal-scale delay-300">
          <div
            class="bg-gradient-to-br from-red-50 to-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Shirt class="text-red-600 w-8 h-8" />
          </div>
          <h3 class="text-xl font-bold text-gray-800 font-montserrat mb-3 group-hover:text-red-700 transition-colors">
            Vestuário Correto</h3>
          <p class="text-gray-600 font-montserrat text-base leading-relaxed">
            As mangas devem ser compridas e justas para evitar o contato de qualquer respingo com a pele nua durante o
            manuseio.
          </p>
        </div>

        <!-- Card 4 -->
        <div
          class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 group reveal-scale delay-400 lg:col-start-1 lg:col-end-2">
          <div
            class="bg-gradient-to-br from-red-50 to-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Flame class="text-red-600 w-8 h-8" />
          </div>
          <h3 class="text-xl font-bold text-gray-800 font-montserrat mb-3 group-hover:text-red-700 transition-colors">
            Combate a Fogo</h3>
          <p class="text-gray-600 font-montserrat text-base leading-relaxed">
            O produto não é inflamável, mas reage com água. Use CO₂ ou pó químico em caso de incêndio. Evite jato direto
            de água.
          </p>
        </div>

        <!-- Card 5 -->
        <div
          class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 group reveal-scale delay-500 lg:col-start-2 lg:col-end-4 md:col-span-2">
          <div
            class="bg-gradient-to-br from-red-50 to-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Package class="text-red-600 w-8 h-8" />
          </div>
          <h3 class="text-xl font-bold text-gray-800 font-montserrat mb-3 group-hover:text-red-700 transition-colors">
            Condições de Armazenamento</h3>
          <p class="text-gray-600 font-montserrat text-base leading-relaxed">
            Armazene num local ventilado, seco e fresco, mantendo em embalagens de polietileno fechadas e longe de
            metais e ácidos para evitar reações.
          </p>
        </div>
      </div>

      <!-- Bloco de vídeos -->
      <div class="videos-wrapper mb-24" :class="{ 'flex-col': isMobile, 'flex-row': !isMobile }">
        <!-- Vídeo 1 -->
        <div class="video-block reveal-scale delay-200">
          <div
            class="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(185,28,28,0.1)] transition-shadow duration-500 w-full group">
            <h3
              class="video-title font-montserrat font-bold text-xl text-gray-800 mb-4 text-center group-hover:text-red-700 transition-colors">
              EPIs de Segurança</h3>
            <div class="video-box overflow-hidden rounded-2xl">
              <iframe class="video-frame w-full" :height="isMobile ? 180 : 250"
                src="https://www.youtube.com/embed/azPRpXrowmo" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        <div v-if="!isMobile" class="video-divider mx-8 my-auto h-32 w-px bg-red-200 reveal-element delay-300"></div>

        <!-- Vídeo 2 -->
        <div class="video-block reveal-scale delay-400">
          <div
            class="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(185,28,28,0.1)] transition-shadow duration-500 w-full group">
            <h3
              class="video-title font-montserrat font-bold text-xl text-gray-800 mb-4 text-center group-hover:text-red-700 transition-colors">
              Como Desentupir - teste</h3>
            <div class="video-box overflow-hidden rounded-2xl">
              <iframe class="video-frame w-full" :height="isMobile ? 180 : 250"
                src="https://www.youtube.com/embed/qX86BTFrDls" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script setup>
import { Info, Download, ShieldAlert, CircleAlert, Phone, FileText, Beaker, Shirt, Flame, Package } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted } from 'vue';

function openPdf() {
  window.open('/static/uploads/FDS-ESCORPIAO-2026-ATUALIZADA.pdf', '_blank')
}

// Detecta se é mobile (≤ 767px)
const isMobile = ref(window.innerWidth <= 767);

function handleResize() {
  isMobile.value = window.innerWidth <= 767;
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();

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

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
/* Layout padrão */
.info-container {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
}

.info-text {
  flex: 5;
}

.divider {
  width: 2px;
  height: auto;
  align-self: stretch;
  background: linear-gradient(to bottom, transparent, #fca5a5, transparent);
  border-radius: 1px;
}

.fds-col {
  flex: 3;
}

/* Responsividade mobile */
@media (max-width: 767px) {
  .info-container {
    flex-direction: column;
    align-items: stretch;
  }
}

.videos-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  /* Centraliza verticalmente os blocos no container */
}

.videos-wrapper.flex-col,
.videos-wrapper.flex-row {
  align-items: stretch;
  /* Centraliza no mobile e desktop! */
}

.video-block {
  flex: 1 1 300px;
  min-width: 260px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Centraliza o conteúdo dentro do bloco */
}

.video-title {
  text-align: center;
  width: 100%;
}

.video-box {
  width: 100%;
  display: flex;
  justify-content: center;
  /* Centraliza o iframe */
}

.video-frame {
  margin: 0 auto;
  display: block;
  border-radius: 12px;
}

@media (max-width: 767px) {
  .videos-wrapper {
    flex-direction: column !important;
    gap: 2rem;
  }

  .video-block {
    max-width: 100%;
    width: 100%;
    min-width: 0;
  }
}

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

.delay-500 {
  transition-delay: 500ms;
}
</style>
