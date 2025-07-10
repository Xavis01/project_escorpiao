<template>

    <div id="background" style="background-color: #faf4ef;">

        <div id="inicio" name="Capa Inicial" class="relative pt-32">
            <img :src="Capa" alt="Capa Inicial" class="h-auto w-auto object-contain" loading="lazy" />
            <router-link to="/nossa-historia">
                <button
                    class="absolute top-[500px] left-[550px] transform -translate-x-1/2 -translate-y-1/2 border border-white text-white px-10 py-3 rounded-full font-semibold tracking-wide transition duration-300 hover:bg-white hover:text-red-700 z-10">
                    SOBRE NÓS
                </button>
            </router-link>
        </div>

        <section id="empresa">
            <div  class="max-w-6xl mx-auto px-6 pt-32 scroll-mt-32">
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

            </div>

            <br><br><br>

            <!-- Seção Missão, Visão e Valores -->
            <!-- Seção Missão, Visão e Valores com topo e base orgânicos -->
            <div class="relative w-full bg-[#720e0e] text-white overflow-hidden py-16 font-montserrat">
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
                            Oferecer produtos químicos com qualidade, agilidade e segurança, promovendo parcerias
                            sólidas e crescimento sustentável. </p>
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
                    <img :src="soda500g" alt="Soda Cáustica 500g" class="icon-container2 mb-4 object-contain w-60 h-auto rounded-lg" />
                    <p class="text-lg font-semibold text-gray-700 font-montserrat">Soda Cáustica 500g</p>
                </div>

                <!-- Produto 1kg -->
                <div class="flex flex-col items-center text-center">
                    <img :src="soda1kg" alt="Soda Cáustica 1kg" class="icon-container2 mb-4 object-contain w-60 h-auto rounded-lg" />
                    <p class="text-lg font-semibold text-gray-700 font-montserrat">Soda Cáustica 1kg</p>
                </div>
            </div>
        </section>

        <!-- Section Receitas -->
        <section id="receitas" class="max-w-6xl mx-auto px-6 pt-32 pb-16 scroll-mt-32 font-montserrat">
            <div class="flex items-center gap-4 ">
                <h2 class="text-3xl font-extrabold mt-6 text-red-700 mb-6 font-montserrat">RECEITAS</h2>
                <BookMarked class="text-red-700 " stroke-width="2" size="30" />
            </div>

            <div class="flex flex-col md:flex-row gap-8 items-stretch">

                <!-- Coluna da esquerda: botões -->
                <div class="flex flex-col w-full md:w-2/5 space-y-11">
                    <!-- Botão Receita 1 -->
                    <button @click="toggleReceita(1)"
                        class="flex justify-between items-center text-lg font-semibold text-gray-800 px-5 py-4 rounded-lg border border-gray-200 bg-white hover:bg-red-50 hover:border-red-400 hover:text-red-700 transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98]"
                        :class="{ 'bg-red-100 border-red-400 text-red-700': receitaAberta === 1 }">
                        Receita para Sabão em Barra
                        <ChevronLeft class="w-5 h-5 transform transition-transform duration-300"
                            :class="{ 'rotate-180': receitaAberta === 1 }" />
                    </button>

                    <!-- Botão Receita 2 -->
                    <button @click="toggleReceita(2)"
                        class="flex justify-between items-center text-lg font-semibold text-gray-800 px-5 py-4 rounded-lg border border-gray-200 bg-white hover:bg-red-50 hover:border-red-400 hover:text-red-700 transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98]"
                        :class="{ 'bg-red-100 border-red-400 text-red-700': receitaAberta === 2 }">
                        Receita para Sabão Líquido do Pará
                        <ChevronLeft class="w-5 h-5 transform transition-transform duration-300"
                            :class="{ 'rotate-180': receitaAberta === 2 }" />
                    </button>

                    <router-link
                        class="flex justify-between items-center text-lg font-semibold text-gray-800 px-5 py-4 rounded-lg border border-gray-200 bg-white hover:bg-red-50 hover:border-red-400 hover:text-red-700 transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98]"
                        to="/info">
                        Informações de manuseio correto
                        <BookAlert />
                    </router-link>
                </div>

                <!-- Coluna da direita: conteúdo da receita -->
                <transition name="fade" mode="out-in">
                    <div v-if="receitaAberta !== null" key="receita"
                        class="flex-1 bg-white border rounded-lg shadow-md p-8 space-y-8 transition-all duration-500">

                        <!-- Coluna 1: Ingredientes e preparo -->

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Ingredientes -->
                            <div v-if="receitaAberta === 1">
                                <h3 class="text-2xl font-bold mb-4 text-red-700">Sabão em Barra</h3>
                                <div class="flex items-center justify-start mb-3">
                                    <ScrollText class="mr-1" />
                                    <h4 class="text-xl font-semibold">Ingredientes:</h4>
                                </div>
                                <ul class="list-disc list-inside mb-4 space-y-1 text-gray-700">
                                    <li>1 kg de soda cáustica Escorpião</li>
                                    <li>2 litros de água</li>
                                    <li>4 litros de óleo de cozinha</li>
                                    <li>1 litro de álcool</li>
                                    <li>5 ml de essência</li>
                                    <li>Opcional: você pode colocar elementos decorativos, como ervas aromáticas,
                                        especiarias, flores secas, etc.</li>
                                </ul>
                            </div>

                            <div v-if="receitaAberta === 2">
                                <h3 class="text-2xl font-bold mb-4 text-red-700">Sabão Líquido do Pará</h3>
                                <div class="flex items-center justify-start mb-3">
                                    <ScrollText class="mr-1" />
                                    <h4 class="text-xl font-semibold">Ingredientes:</h4>
                                </div>
                                <ul class="list-disc list-inside mb-4 space-y-1 text-gray-700">
                                    <li>1 litro de água morna</li>
                                    <li>500 gramas de soda cáustica Escorpião</li>
                                    <li>2 litros de óleo novo</li>
                                    <li>1 litro de álcool acima de 70%</li>
                                    <li>1 litro de água sanitária</li>
                                    <li>55 litros de água fria</li>
                                    <li>160 gramas de bicarbonato de sódio</li>
                                    <li>Opicional: corante e essência.</li>

                                </ul>
                            </div>

                            <!-- Vídeo -->
                            <div>
                                <div class="flex items-center justify-start mb-3">
                                    <Youtube class="mr-1" />
                                    <h4 class="text-xl font-semibold ">Vídeo tutorial:</h4>
                                </div>
                                <transition name="fade-video" mode="out-in">
                                    <iframe v-if="videoReceitas[receitaAberta]" :key="receitaAberta"
                                        class="w-full h-64 rounded-lg" :src="videoReceitas[receitaAberta]"
                                        title="Vídeo da Receita" frameborder="0" allowfullscreen></iframe>
                                </transition>
                            </div>
                        </div>

                        <!-- Linha 2: Modo de Preparo -->
                        <div>
                            <div class="flex items-center justify-start mb-3">
                                <ListChecks class="mr-1" />
                                <h4 class="text-xl font-semibold">Modo de preparo:</h4>
                            </div>
                            <div class="text-gray-700 leading-relaxed space-y-4" v-if="receitaAberta === 1">
                                <p><span class="font-semibold">Passo 1:</span> Coloque no balde a soda cáustica e
                                    adicione lentamente 2 litros de água quente.</p>
                                <p><span class="font-semibold">Passo 2:</span> Misture com muito cuidado utilizando a
                                    colher de pau até a soda cáustica dissolver completamente.</p>
                                <p><span class="font-semibold">Passo 3:</span> Junte os 4 litros de óleo e continue
                                    mexendo por 20 minutos.</p>
                                <p><span class="font-semibold">Passo 4:</span> Acrescente o álcool e a essência.</p>
                                <p><span class="font-semibold">Extra:</span> Se quiser, este é o momento para colocar
                                    elementos de decoração. </p>
                                <p><span class="font-semibold">Passo 5:</span> Misture até obter uma pasta consistente.
                                </p>
                                <p><span class="font-semibold">Passo 6:</span> Despeje o conteúdo em um caixote de
                                    madeira forrado com um pano ou em formas, espalhe bem e acomode a pasta dentro do
                                    recipiente</p>
                                <p><span class="font-semibold">Passo 7:</span> Deixe secar por no mínimo 24 horas.</p>
                                <p><span class="font-semibold">Passo 8:</span> Após a secagem, corte o sabão no tamanho
                                    desejado e enrole os pedaços em papel filme.</p>
                            </div>

                            <div class="text-gray-700 leading-relaxed space-y-4" v-if="receitaAberta === 2">
                                <p><span class="font-semibold">Passo 1:</span> Dilua a Soda Cáustica Escorpião na água
                                    morna, com cuidado.</p>
                                <p><span class="font-semibold">Passo 2:</span> Em seguida, adicione o óleo e o álcool,
                                    mexendo bem por cerca de 10 minutos, até atingir o ponto de creme.</p>
                                <p><span class="font-semibold">Passo 3:</span> Acrescente a água sanitária e a água
                                    fria. Mexa bem até que a mistura fique uniforme.</p>
                                <p><span class="font-semibold">Passo 4:</span> Dilua o bicarbonato em um copo com água e
                                    depois adicione à mistura.</p>
                                <p><span class="font-semibold">Extra:</span> Se desejar, este é o momento ideal para
                                    adicionar o corante e a essência.</p>
                                <p><span class="font-semibold">Passo 5:</span> Deixe a mistura descansar por 24 horas.
                                </p>
                                <br><br>
                                Esse sabão pode ser utilizado para lavar roupas, louças ou em serviços domésticos
                                gerais.
                            </div>
                        </div>
                    </div>

                    <!-- Quando nenhuma receita estiver aberta -->
                    <div v-else key="nenhuma"
                        class="flex-1 flex flex-col items-center justify-center bg-white border rounded-lg shadow-md p-10 text-center text-gray-600 space-y-4">
                        <BookMarked class="w-20 h-20 opacity-50" />
                        <h3 class="text-xl font-semibold">Nenhuma receita selecionada</h3>
                        <p>Escolha uma das receitas ao lado para ver o passo a passo completo.</p>
                    </div>
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

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <figure class="flex flex-col items-center">
                    <img :src="ondeComprarImages[0]" alt="Mercados" class="icon-container2 w-40 h-40 object-contain mb-3 rounded-lg" />
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
import { ref } from 'vue'
import { ChevronLeft, BookMarked, Building, BookAlert, ScrollText, Youtube, ListChecks, PackageOpen, ShoppingCart } from 'lucide-vue-next'

import Capa from '../assets/identidade/home_teste3.png'
import Missao from '../assets/empresa/missao.png'
import Visao from '../assets/empresa/visao.png'
import Valor from '../assets/empresa/valor.png'

// Importação das imagens da seção Empresa
import sobre1 from '../assets/empresa/sobre_1.webp'
import sobre2 from '../assets/empresa/sobre_2.webp'
import sobre3 from '../assets/empresa/sobre_3.webp'
import sobre4 from '../assets/empresa/sobre_4.webp'
import sobre5 from '../assets/empresa/sobre_5.webp'
import sobre6 from '../assets/empresa/sobre_6.webp'
import sobre7 from '../assets/empresa/sobre_7.webp'
import sobre8 from '../assets/empresa/sobre_8.webp'

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

const videoReceitas = {
    1: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    2: "https://www.youtube.com/embed/djV11Xbc914"
}

</script>
