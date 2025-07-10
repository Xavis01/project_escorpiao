<template>
    <div class="mt-16" style="background-color: #faf4ef;">
        <section id="contato" class="max-w-6xl mx-auto px-6 pt-24 scroll-mt-32">
            <div class="flex items-center gap-4 mb-4">
                <router-link to="/" class="transition-transform duration-300 hover:-translate-x-1">
                    <ChevronLeft class="w-8 h-8 text-red-700 hover:text-red-600 transition-all duration-300" />
                </router-link>
                <div class="flex items-center gap-4 mb-6 pt-6">
                    <h2 class="text-3xl font-extrabold text-red-700 font-montserrat">NOSSA HISTÓRIA</h2>
                    <BookOpenText class="text-red-700 " stroke-width="2" size="30" />
                </div>
            </div>

            <div class="bg-white rounded-lg shadow p-8 font-montserrat">
                <p class="text-gray-700 text-lg leading-relaxed">
                    A Soda Cáustica Escorpião nasceu na década de 70 na cidade de Vitória - Espírito Santo. Do pequeno
                    galpão no bairro de Jardim da Penha, expandimos e nos estabelecemos em nosso atual parque fabril em
                    Jardim Limoeiro, na Serra. Sem perder o espírito de uma empresa familiar, mas em constante
                    aperfeiçoamento desde então, temos sido pioneiros no segmento como uma empresa comprometida com a
                    qualidade e pureza da soda, com nossos parceiros de negócios em todo o Brasil e com a preservação da
                    nossa identidade.
                </p>
                <br>
                <p class="text-gray-700 text-lg leading-relaxed">
                    Não temos dúvida de que as estrelas das prateleiras são os potinhos alvirubros da Soda Escorpião!
                </p>
                <br>
                <p class="text-gray-700 text-lg leading-relaxed">
                    É o nosso compromisso com a qualidade que promove a alta fidelização do consumidor, nos permitindo
                    ser referência nacional.
                </p>
                <br>
                <p class="text-gray-700 text-lg leading-relaxed">
                    Durante quase meio século de vida, desenvolvemos um importante conhecimento em nossa área de
                    atuação. Continuamos nossa busca pela excelência, qualidade e inovação, inspirados por nossas raízes
                    e comprometidos em oferecer sempre o melhor produto.
                </p>
                <br>
                <p class="text-gray-700 text-lg leading-relaxed">
                    Agradecemos a todos que estiveram conosco nessa jornada. Seguimos firmes no propósito.
                </p>

            </div>
        </section>
        <br><br><br>
    </div>
</template>

<script setup>
import { ChevronLeft, BookOpenText } from 'lucide-vue-next'
</script>
