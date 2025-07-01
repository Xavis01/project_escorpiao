<template>
    <div class="mt-16" style="background-color: #faf4ef;">
        <section id="contato" class="max-w-6xl mx-auto px-6 pt-32 scroll-mt-32">
            <!-- Título -->
            <h2 class="text-3xl font-extrabold text-red-700 mb-6 font-montserrat">CONTATO</h2>

            <!-- Texto -->
            <p class="text-gray-700 text-lg mb-8 leading-relaxed font-montserrat">
                Com sólida experiência no mercado químico, entregamos um produto de alto padrão, com logística eficiente
                e atendimento personalizado, alcançando todo o território brasileiro com rapidez e segurança.
                <br>
                Nosso compromisso vai além da entrega: construímos parcerias duradouras com base na confiança, na
                excelência e no suporte contínuo, sempre prontos para atender às demandas do mercado com
                responsabilidade e eficiência.
                <br /><br />
                Soda Cáustica Escorpião - Tradição capixaba, presença nacional.
            </p>

            <br>

            <div class="flex justify-between items-center w-full gap-4 font-montserrat font-semibold">
                <router-link to="/contato/revendedor">
                    <button
                        class="flex justify-between items-center transform border border-white bg-red-700 text-white px-20 py-3 rounded-full tracking-wide transition duration-300 hover:bg-white hover:text-red-700 hover:border-red-700 z-10">
                        <ChevronLeft class="mr-2" />
                        Seja Revendedor
                    </button>
                </router-link>

                <router-link to="/contato/fale-conosco">
                    <button
                        class="flex justify-between items-center transform border border-white bg-red-700 text-white px-24 py-3 rounded-full tracking-wide transition duration-300 hover:bg-white hover:text-red-700 hover:border-red-700 z-10">
                        Fale Conosco
                        <ChevronRight class="ml-2" />
                    </button>
                </router-link>
            </div>




        </section>
        <br><br><br>
        <br><br><br>
    </div>
</template>

<script setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
</script>