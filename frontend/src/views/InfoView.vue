<template>
  <div class="mt-16" style="background-color: #faf4ef;">
    <section id="info" class="max-w-6xl mx-auto px-6 pt-24 scroll-mt-32">
      <!-- Título -->
      <div class="flex items-center gap-4 mb-4">
        <div class="flex items-center gap-4 mb-6 pt-6">
          <h2 class="text-3xl font-extrabold text-red-700 font-montserrat">INFORMAÇÕES</h2>
          <Info class="text-red-700" :stroke-width="2" :size="30" />
        </div>
      </div>

      <!-- Conteúdo principal -->
      <div class="info-container">
        <!-- Lista -->
        <ul
          class="list-disc list-inside text-gray-700 text-lg mb-8 leading-relaxed font-montserrat info-text space-y-3">
          <li>
            A soda cáustica é um produto muito corrosivo que pode causar queimaduras severas e irreversíveis
            na pele e nos olhos, irritação respiratória e é nocivo para organismos aquáticos.
          </li>
          <li>
            Além dos cuidados no manuseio, é fundamental atenção ao armazenamento. A ingestão do produto
            pode causar a morte.
          </li>
          <li>
            Caso ocorra contato com a soda cáustica, ligue imediatamente para nossa Central de Emergência:
            <span class="font-semibold text-red-700">0800-118270</span>
            <span class="inline-flex items-center align-middle ml-2">
              <span class="relative group">
                <!-- <CircleAlert class="h-4 w-4 text-gray-500 hover:text-black cursor-pointer align-middle"
                  stroke="currentColor" /> -->
                <!-- Tooltip -->
                <!-- <div class="tooltip-box tooltip-manuseio">
                  <span class="block font-bold mb-2">Primeiros Socorros</span>
                  <ul class="list-disc list-inside space-y-1 text-sm text-red-800">
                    <li><strong>Contato com a pele:</strong> Lavar com água abundante e sabão.
                      Retirar roupas contaminadas.</li>
                    <li><strong>Olhos:</strong> Enxaguar com água por vários minutos. Remover lentes
                      de contato se possível.</li>
                    <li><strong>Inalação:</strong> Levar para local ventilado.</li>
                    <li><strong>Ingestão:</strong> Não provocar vômito. Lavar a boca e procurar
                      socorro médico.</li>
                  </ul>
                </div> -->
              </span>
            </span>
          </li>
        </ul>

        <!-- Divider -->
        <div class="divider"></div>

        <!-- Ficha de Dados de Segurança -->
        <div class="flex flex-col items-center flex-1 fds-col">
          <span class="mb-3 text-center text-base font-semibold text-red-700 font-montserrat tracking-wide uppercase">
            Ficha de Dados de Segurança
          </span>
          <button
            class="flex flex-col mt-4 font-montserrat items-center justify-center w-full bg-red-700 hover:bg-white hover:text-red-700 hover:border-red-700 text-white px-8 py-3 rounded-full tracking-wide border border-white transition duration-300"
            @click="openPdf">
            <span class="mb-1">Abrir FDS</span>
            <Download />
          </button>
        </div>
      </div>

      <!-- Seção: Manuseio -->
      <div class="flex items-center gap-4 mb-4">
        <div class="flex items-center gap-4 mb-6 pt-6">
          <h2 class="text-3xl font-extrabold text-red-700 font-montserrat">MANUSEIO DA SODA CÁUSTICA</h2>
          <ShieldAlert class="text-red-700" :stroke-width="2" :size="isMobile ? 60 : 30" />
        </div>
      </div>

      <!-- Lista manuseio -->
      <ul class="list-disc list-inside text-gray-700 text-lg mb-8 leading-relaxed font-montserrat info-text space-y-3">
        <li>
          Os utensílios utilizados para a diluição da soda cáustica devem ser de plástico resistente ao aquecimento.
          Nunca use para alimentos e sempre lave imediatamente com bastante água antes de reutilizar.
        </li>
        <li>
          Para manusear o produto, é obrigatório o uso de <strong>luvas</strong>, <strong>máscara</strong> e
          <strong>óculos de proteção</strong>.
          <span class="inline-flex items-center">
            <!-- Tooltip ao lado -->
            <span class="relative group ml-2">
              <!-- <CircleAlert class="h-4 w-4 text-gray-500 hover:text-black cursor-pointer"
                stroke="currentColor" /> -->
              <!-- <div class="tooltip-box tooltip-manuseio">
                <ul class="list-disc list-inside text-sm space-y-1">
                  <li>Luvas de proteção química (PVC ou nitrílica)</li>
                  <li>Óculos de proteção com vedação lateral</li>
                  <li>Avental e bota de PVC</li>
                  <li>Máscara facial em caso de poeiras ou névoa</li>
                </ul>
              </div> -->
            </span>
          </span>
        </li>
        <li>
          As mangas devem ser compridas e justas.
        </li>
        <li>
          O produto não é inflamável, mas reage com água. Use CO₂ ou pó químico. Evite jato direto de água.
        </li>
        <li>
          Armazene num local ventilado, seco e fresco, em embalagens de polietileno fechadas e longe de metais e ácidos
        </li>
      </ul>

      <br>

      <!-- Bloco de vídeos -->
      <div class="videos-wrapper" :class="{ 'flex-col': isMobile, 'flex-row': !isMobile }">
        <!-- Vídeo 1 -->
        <div class="video-block">
          <h3 class="video-title font-montserrat font-bold text-xl text-red-700 mb-2 text-center">EPIs de segurança</h3>
          <div class="video-box">
            <iframe class="video-frame" width="100%" height="320" :height="isMobile ? 180 : 320" src="https://www.youtube.com/embed/azPRpXrowmo"
              frameborder="0" allowfullscreen></iframe>
          </div>
        </div>

        <!-- Linha divisória no desktop -->
        <div v-if="!isMobile" class="video-divider"></div>

        <!-- Vídeo 2 -->
        <div class="video-block">
          <h3 class="video-title font-montserrat font-bold text-xl text-red-700 mb-2 text-center">Como desentupir encanamento</h3>
          <div class="video-box">
            <iframe class="video-frame" width="100%" height="320" :height="isMobile ? 180 : 320" src="https://www.youtube.com/embed/qX86BTFrDls"
              frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>



    </section>
    <br /><br /><br />
  </div>
</template>

<script setup>
import { Info, Download, ShieldAlert, CircleAlert } from 'lucide-vue-next'
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
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
/* Layout padrão */
.info-container {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.info-text {
  flex: 3;
}

.divider {
  width: 2px;
  height: 240px;
  background-color: #dc2626;
  margin: 0 1rem;
  border-radius: 1px;
}

.fds-col {
  max-width: 340px;
}

/* Tooltip bonitinha, adaptativa */
.group .tooltip-box {
  position: absolute;
  left: 110%;
  top: 50%;
  transform: translateY(-50%);
  min-width: 220px;
  max-width: 320px;
  z-index: 9999;
  background: #fee2e2;
  color: #b91c1c;
  border: 1px solid #fca5a5;
  border-radius: 8px;
  padding: 16px;
  font-size: 14px;
  box-shadow: 0 4px 24px 0 rgba(220, 38, 38, 0.13);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s;
  overflow-wrap: break-word;
}

.group:hover .tooltip-box,
.group:focus-within .tooltip-box {
  opacity: 1;
  pointer-events: auto;
}

/* Não cortar a tooltip nem no desktop nem no mobile */
section#info,
.info-container,
ul {
  overflow: visible !important;
}

/* Responsividade mobile */
@media (max-width: 767px) {
  .info-container {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
  }

  .divider {
    display: none;
  }

  .fds-col {
    max-width: 100%;
    margin-top: 0 !important;
    width: 100%;
  }

  .info-text {
    margin-bottom: 0.5rem;
  }

  /* Tooltip centralizada acima no mobile */
  .group .tooltip-box {
    left: auto;
    right: auto;
    top: auto;
    bottom: 120%;
    transform: translateX(-50%);
    max-width: 94vw;
    min-width: 210px;
    font-size: 13px;
    box-shadow: 0 6px 34px 0 rgba(220, 38, 38, 0.21);
    margin-bottom: 4px;
  }

  /* Desloca o tooltip manuseio para mais à esquerda */
  .tooltip-manuseio {
    right: 10% !important;
    /* Ajuste o valor conforme necessidade, ex: 10% */
    transform: none !important;
    /* Remove o translate para que o left 10% atue */
    max-width: 90vw;
    /* Variável para evitar overflow */
  }
}

/* Previne scroll lateral desnecessário sem cortar tooltips */
:root,
body,
html {
  width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
}

/* Permite tooltip transbordar do ul */
ul,
li,
section#info {
  overflow: visible !important;
}

.videos-wrapper {
  display: flex;
  justify-content: center;
  align-items: center; /* Centraliza verticalmente os blocos no container */
  gap: 2rem;
  margin-bottom: 64px;
}

.videos-wrapper.flex-col,
.videos-wrapper.flex-row {
  align-items: center; /* Centraliza no mobile e desktop! */
}

.video-block {
  flex: 1 1 300px;
  min-width: 260px;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo dentro do bloco */
}

.video-title {
  text-align: center;
  margin-bottom: 12px;
  width: 100%;
}

.video-box {
  width: 100%;
  display: flex;
  justify-content: center; /* Centraliza o iframe */
}

.video-frame {
  border-radius: 12px;
  background: #1a1a1a;
  border: none;
  margin: 0 auto;
  display: block;
}

.video-divider {
  width: 2px;
  height: 360px;
  background: #dc2626;
  border-radius: 2px;
  margin: 0 16px;
  margin-top: 12px
}

@media (max-width: 767px) {
  .videos-wrapper {
    flex-direction: column !important;
    gap: 2rem;
    margin-bottom: 40px;
  }
  .video-divider {
    display: none;
  }
  .video-block {
    max-width: 90vw;
    min-width: 0;
  }
}

</style>
