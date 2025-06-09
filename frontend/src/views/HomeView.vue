<template>
    <div name="Capa Inicial" class="relative mt-32">
        <img :src="Capa" alt="Capa Inicial" class="h-auto w-auto object-contain" />
        <router-link to="/#empresa">
            <button
                class="absolute top-[160px] left-[950px] transform -translate-x-1/2 -translate-y-1/2 border border-white text-white px-10 py-3 rounded-full font-semibold tracking-wide transition duration-300 hover:bg-white hover:text-red-700 z-10">
                SOBRE NÓS
            </button>
        </router-link>
    </div>

    <section id=""></section>

    <section id="empresa" class="max-w-6xl mx-auto px-6 py-16 scroll-mt-32">
        <!-- Título -->
        <h2 class="text-3xl font-extrabold text-red-700 mb-6 font-montserrat">EMPRESA</h2>

        <!-- Texto -->
        <p class="text-gray-700 text-lg mb-8 leading-relaxed font-montserrat">
            Desde nossa fundação em 1970, nos definimos como uma empresa responsável com nossos parceiros de negócios em todo Brasil. Dedicação, conhecimento, flexibilidade e respeito aos clientes são princípios que julgamos imprescindíveis e sobre os quais conduzimos os nossos negócios. A prática deles no dia a dia de nossas atividades nos faz crescer e evoluir.
            <br/><br/>
            Ao mesmo tempo construímos uma empresa sólida, moderna e com produtos de qualidade, buscando sempre atender aos mais exigentes padrões de mercado.
        </p>

        <!-- Grade de Imagens -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img v-for="(img, index) in empresaImages" :key="index" :src="img" alt="Imagem Empresa" class="rounded-lg object-cover w-full h-auto" />
        </div>
    </section>
</template>

<script setup>
    import Capa from '../assets/identidade/home_teste2.png'

        // Importação das imagens da seção Empresa
    import sobre1 from '../assets/empresa/sobre_1.webp'
    import sobre2 from '../assets/empresa/sobre_2.webp'
    import sobre3 from '../assets/empresa/sobre_3.webp'
    import sobre4 from '../assets/empresa/sobre_4.webp'
    import sobre5 from '../assets/empresa/sobre_5.webp'
    import sobre6 from '../assets/empresa/sobre_6.webp'
    import sobre7 from '../assets/empresa/sobre_7.webp'
    import sobre8 from '../assets/empresa/sobre_8.webp'

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
</script>
