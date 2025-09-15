<template>

    <div id="background" style="background-color: #faf4ef;">

        <div id="inicio" name="Capa Inicial" class="relative pt-32">
            <img :src="Capa" alt="Capa Inicial" class="h-auto w-auto object-contain" loading="lazy" />
        </div>

        <section id="empresa">
            <div class="max-w-6xl mx-auto px-6 pt-32 scroll-mt-32">
                <!-- Título -->
                <div class="flex items-center gap-4 ">
                    <h2 class="text-3xl font-extrabold mt-6 text-red-700 mb-6 font-montserrat">EMPRESA</h2>
                    <Building class="text-red-700 " stroke-width="2" size="30" />
                </div>

                <!-- Texto -->
                <p class="text-gray-700 text-lg mb-8 leading-relaxed font-montserrat">
                    Desde nossa fundação em 1970, nos definimos como uma empresa responsável com nossos parceiros de
                    negócios em
                    todo Brasil. Dedicação, conhecimento, flexibilidade e respeito aos clientes são princípios que
                    julgamos
                    imprescindíveis e sobre os quais conduzimos os nossos negócios. A prática deles no dia a dia de
                    nossas
                    atividades nos faz crescer e evoluir.
                    <br /><br />
                    Ao mesmo tempo construímos uma empresa sólida, moderna e com produtos de qualidade, buscando sempre
                    atender
                    aos mais exigentes padrões de mercado.
                </p>

                <!-- Grade de Imagens -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <img v-for="(img, index) in empresaImages" :key="index" :src="img" alt="Imagem Empresa"
                        class="rounded-lg object-cover w-full h-auto icon-container2" />
                </div>

                <div class="flex justify-center mt-10">
                    <router-link to="/nossa-historia">
                        <button
                            class="border border-red-700 text-red-700 px-10 py-3 rounded-full font-semibold tracking-wide transition duration-300 hover:bg-red-700 hover:text-white z-10">
                            SOBRE NÓS
                        </button>
                    </router-link>
                </div>

            </div>

            <br><br><br>

            <!-- Seção Missão, Visão e Valores -->
            <!-- Seção Missão, Visão e Valores com topo e base orgânicos -->
            <div class="relative w-full bg-[#720e0e] text-white overflow-hidden py-16 font-montserrat border-none">
                <!-- Topo orgânico com SVG invertido -->
                <div class="absolute top-0 left-0 w-full" style="z-index:1;">
                    <svg viewBox="0 0 1440 120" class="w-full h-24 rotate-180" preserveAspectRatio="none">
                        <path d="M0,80 Q360,120 720,90 Q1080,60 1440,100 L1440,120 L0,120 Z" fill="#faf4ef" />
                    </svg>
                </div>
                <!-- Conteúdo principal -->
                <div
                    class="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-stretch gap-12">
                    <!-- Missão -->
                    <div class="flex-1 flex flex-col items-center text-center">
                        <div
                            class="bg-[#a4221e] icon-container rounded-2xl w-20 h-20 flex items-center justify-center mb-4 shadow-lg">
                            <img :src="Missao" alt="Missão" class="w-10 h-10" />
                        </div>
                        <h3 class="text-lg font-bold mb-2 tracking-wide">MISSÃO</h3>
                        <p class="text-base leading-relaxed">
                            Fornecer produtos químicos com excelência, garantindo qualidade, agilidade e segurança para distribuidores em todo o Brasil,
                            promovendo parcerias duradouras e contribuindo para o crescimento sustentável do setor. </p>
                    </div>
                    <!-- Visão -->
                    <div class="flex-1 flex flex-col items-center text-center">
                        <div
                            class="bg-[#a4221e] icon-container rounded-2xl w-20 h-20 flex items-center justify-center mb-4 shadow-lg">
                            <img :src="Visao" alt="Visão" class="w-10 h-10" />
                        </div>
                        <h3 class="text-lg font-bold mb-2 tracking-wide">VISÃO</h3>
                        <p class="text-base leading-relaxed">
                            Ser referência nacional em distribuição de soda cáustica, reconhecida pela confiabilidade,
                            compromisso, agilidade e excelência. </p>
                    </div>
                    <!-- Valores -->
                    <div class="flex-1 flex flex-col items-center text-center">
                        <div
                            class="bg-[#a4221e] icon-container rounded-2xl w-20 h-20 flex items-center justify-center mb-4 shadow-lg">
                            <img :src="Valor" alt="Valores" class="w-10 h-10" />
                        </div>
                        <h3 class="text-lg font-bold mb-2 tracking-wide">VALORES</h3>
                        <p class="text-base leading-relaxed">
                            Foco no cliente, qualidade, confiança, responsabilidade socioambiental, inovação e
                            valorização das pessoas. </p>
                    </div>
                </div>
                <!-- Faixa inferior ondulada usando SVG -->
                <div class="absolute bottom-0 left-0 w-full" style="z-index:1;">
                    <svg viewBox="0 0 1440 120" class="w-full h-24" preserveAspectRatio="none">
                        <path d="M0,80 Q360,120 720,90 Q1080,60 1440,100 L1440,120 L0,120 Z" fill="#faf4ef" />
                    </svg>
                </div>
            </div>
        </section>


        <!-- Section Produtos -->
        <section id="produtos" class="max-w-6xl mx-auto px-6 pt-32 scroll-mt-32">
            <!-- Título -->
            <div class="flex items-center gap-4 ">
                <h2 class="text-3xl font-extrabold mt-6 text-red-700 mb-6 font-montserrat">PRODUTOS</h2>
                <PackageOpen class="text-red-700 " stroke-width="2" size="30" />
            </div>

            <!-- Texto descritivo -->
            <p class="text-gray-700 text-lg mb-6 leading-relaxed font-montserrat">
                A soda cáustica em escamas é obtida a partir do processo de evaporação da soda cáustica líquida, da
                fusão do
                produto anidro e do processo de escamação. Este produto apresenta-se na forma de escamas brancas,
                altamente
                deliquescentes (absorve a umidade do ar e nela se dissolve) e com concentração média de 98% de hidróxido
                de
                sódio em peso, conforme a especificação.
            </p>
            <p class="text-gray-700 text-lg mb-8 leading-relaxed font-montserrat">
                É utilizada na fabricação de sabões e detergentes, no tratamento de superfícies de metais ferrosos, na
                formulação de banhos de eletrodeposição, na mercerização de têxteis, na regeneração de resinas de troca
                iônica e na correção de pH em vários processos industriais, como os da indústria de alimento, álcool e
                farmacêutica.
            </p>

            <!-- Grid de produtos -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Produto 500g -->
                <div class="flex flex-col items-center text-center">
                    <img :src="soda500g" alt="Soda Cáustica 500g"
                        class="icon-container2 mb-4 object-contain w-60 h-auto rounded-lg" />
                    <p class="text-lg font-semibold text-gray-700 font-montserrat">Soda Cáustica 500g</p>
                </div>

                <!-- Produto 1kg -->
                <div class="flex flex-col items-center text-center">
                    <img :src="soda1kg" alt="Soda Cáustica 1kg"
                        class="icon-container2 mb-4 object-contain w-60 h-auto rounded-lg" />
                    <p class="text-lg font-semibold text-gray-700 font-montserrat">Soda Cáustica 1kg</p>
                </div>
            </div>
        </section>

        <!-- Section Receitas -->
        <!-- Section RECEITAS (substitua toda a sua section de Receitas por esta) -->
        <section id="receitas" class="max-w-6xl mx-auto px-6 pt-32 pb-16 scroll-mt-32 font-montserrat">
            <div class="flex items-center gap-4 ">
                <h2 class="text-3xl font-extrabold mt-6 text-red-700 mb-6 font-montserrat">RECEITAS</h2>
                <BookMarked class="text-red-700" stroke-width="2" size="30" />
            </div>

            <div class="flex flex-col md:flex-row gap-8 items-stretch">
                <!-- Coluna de BOTÕES -->
                <div class="flex flex-col w-full md:w-2/5 space-y-4 md:space-y-11">

                    <!-- Botão Receita 1 -->
                    <div>
                        <button @click="toggleReceita(1)"
                            class="flex justify-between items-center text-lg font-semibold text-gray-800 px-5 py-4 rounded-lg border border-gray-200 bg-white hover:bg-red-50 hover:border-red-400 hover:text-red-700 transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] w-full"
                            :class="{ 'bg-red-100 border-red-400 text-red-700': receitaAberta === 1 }">
                            Receita para Sabão em Barra
                            <template v-if="!isMobile">
                                <ChevronLeft class="w-5 h-5 transform transition-transform duration-300"
                                    :class="{ 'rotate-180': receitaAberta === 1 }" />
                            </template>
                            <template v-else>
                                <ChevronUp class="w-5 h-5 transform transition-transform duration-300"
                                    :class="{ 'rotate-180': receitaAberta === 1 }" />
                            </template>
                        </button>
                        <!-- Mobile: Bloco somente logo abaixo do botão -->
                        <transition name="fade" mode="out-in">
                            <div v-if="receitaAberta === 1 && isMobile"
                                class="mt-2 bg-white border rounded-lg shadow-md p-4 space-y-4 md:hidden">
                                <ReceitaDetalhe :tipo="1" :videoReceitas="videoReceitas" />
                            </div>
                        </transition>
                    </div>

                    <!-- Botão Receita 2 -->
                    <div>
                        <button @click="toggleReceita(2)"
                            class="flex justify-between items-center text-lg font-semibold text-gray-800 px-5 py-4 rounded-lg border border-gray-200 bg-white hover:bg-red-50 hover:border-red-400 hover:text-red-700 transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] w-full"
                            :class="{ 'bg-red-100 border-red-400 text-red-700': receitaAberta === 2 }">
                            Receita para Sabão Líquido do Pará
                            <template v-if="!isMobile">
                                <ChevronLeft class="w-5 h-5 transform transition-transform duration-300"
                                    :class="{ 'rotate-180': receitaAberta === 2 }" />
                            </template>
                            <template v-else>
                                <ChevronUp class="w-5 h-5 transform transition-transform duration-300"
                                    :class="{ 'rotate-180': receitaAberta === 2 }" />
                            </template>
                        </button>
                        <transition name="fade" mode="out-in">
                            <div v-if="receitaAberta === 2 && isMobile"
                                class="mt-2 bg-white border rounded-lg shadow-md p-4 space-y-4 md:hidden">
                                <ReceitaDetalhe :tipo="2" :videoReceitas="videoReceitas" />
                            </div>
                        </transition>
                    </div>

                    <!-- Botão info -->
                    <router-link
                        class="flex justify-between items-center text-lg font-semibold text-gray-800 px-5 py-4 rounded-lg border border-gray-200 bg-white hover:bg-red-50 hover:border-red-400 hover:text-red-700 transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] w-full"
                        to="/info">
                        Informações de manuseio correto
                        <BookAlert />
                    </router-link>

                    <!-- MOBILE: Mensagem de placeholder debaixo dos botões quando nenhuma receita está aberta -->
                    <transition name="fade" mode="out-in">
                        <div v-if="isMobile && receitaAberta === null"
                            class="flex flex-col items-center justify-center bg-white border rounded-lg shadow-md p-8 text-center text-gray-600 space-y-4 mb-4 md:hidden">
                            <BookMarked class="w-16 h-16 opacity-50" />
                            <h3 class="text-lg font-semibold">Nenhuma receita selecionada</h3>
                            <p>Escolha uma das receitas acima para ver o passo a passo completo.</p>
                        </div>
                    </transition>
                </div>

                <!-- COLUNA DIREITA (DESKTOP) -->
                <transition name="fade" mode="out-in">
                    <template v-if="!isMobile">
                        <div v-if="receitaAberta !== null"
                            class="flex-1 bg-white border rounded-lg shadow-md p-8 space-y-8 hidden md:block">
                            <ReceitaDetalhe :tipo="receitaAberta" :videoReceitas="videoReceitas" />
                        </div>
                        <div v-else
                            class="flex-1 flex-col items-center justify-center bg-white border rounded-lg shadow-md p-10 text-center text-gray-600 space-y-4 hidden md:flex">
                            <BookMarked class="w-20 h-20 opacity-50" />
                            <h3 class="text-xl font-semibold">Nenhuma receita selecionada</h3>
                            <p>Escolha uma das receitas ao lado para ver o passo a passo completo.</p>
                        </div>
                    </template>
                </transition>
            </div>
        </section>



        <section id="ondecomprar" class="max-w-6xl mx-auto px-6 pt-32 scroll-mt-32 font-montserrat">
            <div class="flex items-center gap-4 ">
                <h2 class="text-3xl font-extrabold mt-6 text-red-700 mb-6 font-montserrat">ONDE COMPRAR?</h2>
                <ShoppingCart class="text-red-700 " stroke-width="2" size="30" />
            </div>
            <p class="text-gray-700 text-lg mb-8 leading-relaxed font-montserrat">
                A Soda Cáustica Escorpião, localizada em Serra - Espírito Santo, é referência nacional no fornecimento
                de soda cáustica para distribuidores que valorizam tradição, qualidade e agilidade.
                <br>
                Nosso produto pode ser encontrado nos seguintes estabelecimentos:
            </p>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <figure class="flex flex-col items-center">
                    <img :src="ondeComprarImages[0]" alt="Mercados"
                        class="icon-container2 w-40 h-40 object-contain mb-3 rounded-lg" />
                    <figcaption class="text-center text-gray-700 font-semibold text-lg">
                        Mercados
                    </figcaption>
                </figure>
                <figure class="flex flex-col items-center">
                    <img :src="ondeComprarImages[1]" alt="Agropecuárias"
                        class="icon-container2 w-40 h-40 object-contain mb-3 rounded-lg" />
                    <figcaption class="text-center text-gray-700 font-semibold text-lg">
                        Agropecuárias
                    </figcaption>
                </figure>
                <figure class="flex flex-col items-center">
                    <img :src="ondeComprarImages[2]" alt="Lojas de produtos de limpeza"
                        class="icon-container2 w-40 h-40 object-contain mb-3 rounded-lg" />
                    <figcaption class="text-center text-gray-700 font-semibold text-lg">
                        Lojas de produtos <br> de limpeza
                    </figcaption>
                </figure>
                <figure class="flex flex-col items-center">
                    <img :src="ondeComprarImages[3]" alt="Loja de material de construção"
                        class="icon-container2 w-40 h-40 object-contain mb-3 rounded-lg" />
                    <figcaption class="text-center text-gray-700 font-semibold text-lg">
                        Loja de material <br> de construção
                    </figcaption>
                </figure>
            </div>

        </section>
        <br><br><br>
    </div>

</template>


<style scoped>
/* Animação suave */
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    max-height: 1000px;
}

.fade-video-enter-active,
.fade-video-leave-active {
    transition: opacity 0.5s ease;
}

.fade-video-enter-from,
.fade-video-leave-to {
    opacity: 0;
}

.fade-video-enter-to,
.fade-video-leave-from {
    opacity: 1;
}

.icon-container {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon-container:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 15px rgba(164, 34, 30, 0.6);
}

.icon-container2 {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon-container2:hover {
    transform: scale(1.05);
}
</style>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ReceitaDetalhe from '../components/RecipeDetails.vue'
import { ChevronLeft, ChevronUp, BookMarked, Building, BookAlert, ScrollText, Youtube, ListChecks, PackageOpen, ShoppingCart } from 'lucide-vue-next'

import Capa from '../assets/identidade/HOME_PAGE.png'
import Missao from '../assets/empresa/missao.png'
import Visao from '../assets/empresa/visao.png'
import Valor from '../assets/empresa/valor.png'

// Importação das imagens da seção Empresa
import sobre1 from '../assets/empresa/sobre_1.jpg'
import sobre2 from '../assets/empresa/sobre_2.jpg'
import sobre3 from '../assets/empresa/sobre_6.jpg'
import sobre4 from '../assets/empresa/sobre_8.jpg'
import sobre5 from '../assets/empresa/sobre_5.webp'
import sobre6 from '../assets/empresa/sobre_7.webp'
import sobre7 from '../assets/empresa/sobre_3.webp'
import sobre8 from '../assets/empresa/sobre_4.webp'

import local1 from '../assets/ondeComprar/1.png'
import local2 from '../assets/ondeComprar/2.png'
import local3 from '../assets/ondeComprar/3.png'
import local4 from '../assets/ondeComprar/4.png'

import soda500g from '../assets/produto/sodaCaustica_500g.webp'
import soda1kg from '../assets/produto/sodaCaustica_1kg.webp'

const empresaImages = [
    sobre1,
    sobre2,
    sobre3,
    sobre4,
    sobre5,
    sobre6,
    sobre7,
    sobre8
]

const ondeComprarImages = [
    local1,
    local2,
    local3,
    local4,

]

const receitaAberta = ref(null)


function toggleReceita(num) {
    receitaAberta.value = receitaAberta.value === num ? null : num
}

// Responsividade mobile
const isMobile = ref(window.innerWidth < 768)
function handleResize() {
    isMobile.value = window.innerWidth < 768
}
onMounted(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
})
onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})

const videoReceitas = {
    1: "https://www.youtube.com/embed/azPRpXrowmo",
    2: "https://www.youtube.com/embed/djV11Xbc914"
}

</script>
