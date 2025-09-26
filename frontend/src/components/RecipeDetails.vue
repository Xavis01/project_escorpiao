<template>
    <div>
        <!-- SABÃO EM BARRA -->
        <div v-if="tipo === 1" class="w-full">
            <!-- <div class="w-full grid md:grid-cols-2 gap-8 mb-6"> -->
            <div class="w-full grid md:grid-cols-1 gap-8 mb-6">
                <!-- Ingredientes -->
                <div>
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
                        <li>Opcional: você pode colocar elementos decorativos, como ervas aromáticas, especiarias,
                            flores secas, etc.</li>
                    </ul>
                </div>
                <!-- Vídeo tutorial 100% quadrado -->
                <!-- <div class="flex flex-col items-start">
                    <div class="flex items-center mb-3 mt-2 md:mt-0">
                        <Youtube class="mr-1" />
                        <h4 class="text-xl font-semibold">Vídeo tutorial:</h4>
                    </div>
                    <transition name="fade-video" mode="out-in">
                        <div v-if="isDesktop" class="w-64 h-64 rounded-lg overflow-hidden flex-shrink-0">
                            <iframe v-if="videoReceitas[tipo]" class="w-full h-full" :src="videoReceitas[tipo]"
                                title="Vídeo da Receita" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </transition>
                    <transition name="fade-video" mode="out-in">
                        <div v-if="!isDesktop" class="w-full rounded-lg overflow-hidden">
                            <iframe v-if="videoReceitas[tipo]" class="w-full" style="aspect-ratio: 16/9;"
                                :src="videoReceitas[tipo]" title="Vídeo da Receita" frameborder="0"
                                allowfullscreen></iframe>
                        </div>
                    </transition>
                </div> -->
            </div>
            <!-- Modo de preparo (abaixo no desktop/mobile) -->
            <div>
                <div class="flex items-center justify-start mb-3">
                    <ListChecks class="mr-1" />
                    <h4 class="text-xl font-semibold">Modo de preparo:</h4>
                </div>
                <div class="text-gray-700 leading-relaxed space-y-4">
                    <p><span class="font-semibold">Passo 1:</span> Coloque no balde a soda cáustica e adicione
                        lentamente 2 litros de água quente.</p>
                    <p><span class="font-semibold">Passo 2:</span> Misture com muito cuidado utilizando a colher de pau
                        até a soda cáustica dissolver completamente.</p>
                    <p><span class="font-semibold">Passo 3:</span> Junte os 4 litros de óleo e continue mexendo por 20
                        minutos.</p>
                    <p><span class="font-semibold">Passo 4:</span> Acrescente o álcool e a essência.</p>
                    <p><span class="font-semibold">Extra:</span> Se quiser, este é o momento para colocar elementos de
                        decoração.</p>
                    <p><span class="font-semibold">Passo 5:</span> Misture até obter uma pasta consistente.</p>
                    <p><span class="font-semibold">Passo 6:</span> Despeje o conteúdo em um caixote de madeira forrado
                        com um pano ou em formas, espalhe bem e acomode a pasta dentro do recipiente.</p>
                    <p><span class="font-semibold">Passo 7:</span> Deixe secar por no mínimo 24 horas.</p>
                    <p><span class="font-semibold">Passo 8:</span> Após a secagem, corte o sabão no tamanho desejado e
                        enrole os pedaços em papel filme.</p>
                </div>
            </div>
        </div>
        <!-- SABÃO LÍQUIDO -->
        <div v-if="tipo === 2" class="w-full">
            <!-- <div class="w-full grid md:grid-cols-2 gap-8 mb-6"> -->
            <div class="w-full grid md:grid-cols-1 gap-8 mb-6">
                <div>
                    <h3 class="text-2xl font-bold mb-4 text-red-700">Sabão Líquido do Pará</h3>
                    <div class="flex items-center justify-start mb-3">
                        <ScrollText class="mr-1" />
                        <h4 class="text-xl font-semibold">Ingredientes:</h4>
                    </div>
                    <ul class="list-disc list-inside mb-4 space-y-1 text-gray-700">
                        <li>1 litro de água morna</li>
                        <li>500 gramas de soda cáustica Escorpião</li>
                        <li>2 litros de óleo novo ou usado</li>
                        <li>1 litro de álcool acima de 70%</li>
                        <li>1 litro de água sanitária</li>
                        <li>55 litros de água fria</li>
                        <li>160 gramas de bicarbonato de sódio</li>
                        <li>Opcional: corante e essência.</li>
                    </ul>
                </div>
                <!-- Dentro do grid de vídeo, substitua por: -->
                <!-- Vídeo tutorial -->
                <!-- <div class="flex flex-col items-start">
                    <div class="flex items-center mb-3 mt-2 md:mt-0">
                        <Youtube class="mr-1" />
                        <h4 class="text-xl font-semibold">Vídeo tutorial:</h4>
                    </div>

                    <transition name="fade-video" mode="out-in">
                        <div v-if="isDesktop" class="w-64 h-64 rounded-lg overflow-hidden flex-shrink-0">
                            <iframe v-if="videoReceitas[tipo]" class="w-full h-full" :src="videoReceitas[tipo]"
                                title="Vídeo da Receita" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </transition>
                    <transition name="fade-video" mode="out-in">
                        <div v-if="!isDesktop" class="w-full rounded-lg overflow-hidden">
                            <iframe v-if="videoReceitas[tipo]" class="w-full" style="aspect-ratio: 16/9;"
                                :src="videoReceitas[tipo]" title="Vídeo da Receita" frameborder="0"
                                allowfullscreen></iframe>
                        </div>
                    </transition>

                </div> -->
            </div>
            <div>
                <div class="flex items-center justify-start mb-3">
                    <ListChecks class="mr-1" />
                    <h4 class="text-xl font-semibold">Modo de preparo:</h4>
                </div>
                <div class="text-gray-700 leading-relaxed space-y-4">
                    <p><span class="font-semibold">Passo 1:</span> Dilua a Soda Cáustica Escorpião na água morna, com
                        cuidado.</p>
                    <p><span class="font-semibold">Passo 2:</span> Em seguida, adicione o óleo e o álcool, mexendo bem
                        por cerca de 10 minutos, até atingir o ponto de creme.</p>
                    <p><span class="font-semibold">Passo 3:</span> Acrescente a água sanitária e a água fria. Mexa bem
                        até que a mistura fique uniforme.</p>
                    <p><span class="font-semibold">Passo 4:</span> Dilua o bicarbonato em um copo com água e depois
                        adicione à mistura.</p>
                    <p><span class="font-semibold">Extra:</span> Se desejar, este é o momento ideal para adicionar o
                        corante e a essência.</p>
                    <p><span class="font-semibold">Passo 5:</span> Deixe a mistura descansar por 24 horas.</p>
                    <p>Esse sabão pode ser utilizado para lavar roupas, louças ou em serviços domésticos gerais.</p>
                </div>
            </div>
        </div>

        <div v-if="tipo === 3" class="w-full">
            <h3 class="text-2xl font-bold mb-2 text-red-700 text-center">Nossas receitas no Instagram!</h3>
            <p class="mb-4 text-center text-gray-600 font-semibold">clique para assistir</p>
            <div class="grid gap-6 md:grid-cols-3">
                <div v-for="(video, idx) in instagramVideos" :key="idx"
                    class="rounded-xl overflow-hidden relative group shadow-lg cursor-pointer bg-gray-100 h-48 flex flex-col items-center justify-center space-y-3 p-4"
                    @click="openInstagram(video.link)">
                    <SquarePlay size="48" class="text-red-600" />
                    <span class="text-lg font-semibold text-gray-800 text-center">{{ video.title }}</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ScrollText, Youtube, ListChecks, Instagram, SquarePlay } from 'lucide-vue-next'
defineProps(['tipo', 'videoReceitas'])

import { ref, computed, onMounted, onUnmounted } from 'vue'
const windowWidth = ref(window.innerWidth)
function onResize() { windowWidth.value = window.innerWidth }
onMounted(() => { window.addEventListener('resize', onResize) })
onUnmounted(() => { window.removeEventListener('resize', onResize) })
const isDesktop = computed(() => windowWidth.value >= 768)

import sobre1 from '../assets/empresa/sobre_1.jpg'

const instagramVideos = [
    {
        title: 'Receita para sabão multiuso',
        link: 'https://www.instagram.com/reel/DBhgOR0xtsr/?utm_source=ig_web_button_native_share',
        thumb: sobre1
    },
    {
        title: 'Receita para sabão caseiro com fubá',
        link: 'https://www.instagram.com/reel/DGMJ_0PRR_8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        thumb: 'https://sodaescorpiao.com.br/thumb2.jpg'
    },
    {
        title: 'Receita para sabão caseiro de limão',
        link: 'https://www.instagram.com/reel/DHbr6B7RWKy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        thumb: 'https://sodaescorpiao.com.br/thumb3.jpg'
    }
]

function openInstagram(link) {
    window.open(link, '_blank')
}

</script>

<style scoped>
.group {
  transition: transform 0.5s, background-color 0.5s;
}

.group:hover {
  background-color: #fef2f2; /* leve fundo vermelho para hover */
  transform: scale(1.05);
}

.group:active {
  transform: scale(0.98);
}

</style>