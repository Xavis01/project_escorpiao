<template>
    <div class="mt-16" style="background-color: #faf4ef; overflow-x: hidden;">
        <section id="history" class="max-w-4xl mx-auto px-6 pt-24 pb-24 scroll-mt-32">

            <div class="flex items-center gap-4 mb-10 reveal-element">
                <router-link to="/#empresa"
                    class="transition-transform duration-300 hover:-translate-x-1 group bg-white p-2 rounded-full shadow-sm hover:shadow-md border border-gray-100">
                    <ChevronLeft
                        class="w-8 h-8 text-gray-500 group-hover:text-red-700 transition-colors duration-300" />
                </router-link>
                <div class="flex items-center gap-4">
                    <h2 class="text-3xl font-extrabold text-red-700 font-montserrat tracking-tight uppercase">NOSSA
                        HISTÓRIA</h2>
                    <BookOpenText class="text-red-700 " stroke-width="2" :size="36" />
                </div>
            </div>

            <div
                class="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-12 font-montserrat relative overflow-hidden reveal-scale delay-100">
                <!-- Decorative Blur -->
                <div
                    class="absolute -top-20 -right-20 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-60 pointer-events-none">
                </div>

                <div class="relative z-10 space-y-8">
                    <p class="text-gray-700 text-lg leading-relaxed reveal-element delay-200">
                        <span
                            class="text-4xl font-extrabold text-red-700 float-left mr-3 mt-1 leading-none font-serif">A</span>
                        Soda Cáustica Escorpião nasceu na década de 70 na cidade de Vitória - Espírito Santo. Do pequeno
                        galpão no bairro de Jardim da Penha, expandimos e nos estabelecemos em nosso atual parque fabril
                        em
                        Jardim Limoeiro, na Serra. Sem perder o espírito de uma empresa familiar, mas em constante
                        aperfeiçoamento desde então, temos sido pioneiros no segmento como uma empresa comprometida com
                        a
                        qualidade e pureza da soda, com nossos parceiros de negócios em todo o Brasil e com a
                        preservação da
                        nossa identidade.
                    </p>

                    <p
                        class="text-xl font-bold text-red-800 tracking-wide text-center italic reveal-element delay-300 py-4 my-8 border-y border-red-100">
                        "Não temos dúvida de que as estrelas das prateleiras são os potinhos alvirrubros da Soda
                        Escorpião!"
                    </p>

                    <p
                        class="text-gray-700 text-lg leading-relaxed border-l-4 border-red-700 pl-6 reveal-element delay-400">
                        É o nosso <strong class="text-red-700">compromisso com a qualidade</strong> que promove a alta
                        fidelização do consumidor, nos permitindo
                        ser referência nacional. Durante quase meio século de vida, desenvolvemos um importante
                        conhecimento em nossa área de
                        atuação.
                    </p>

                    <p class="text-gray-700 text-lg leading-relaxed reveal-element delay-500">
                        Continuamos nossa busca pela excelência, qualidade e inovação, inspirados por nossas raízes
                        e comprometidos em oferecer sempre o melhor produto.
                    </p>

                    <p
                        class="text-gray-800 text-lg font-semibold leading-relaxed text-center pt-8 mt-8 border-t border-gray-100 reveal-element delay-600">
                        Agradecemos a todos que estiveram conosco nessa jornada. Seguimos firmes no propósito.
                    </p>
                </div>
            </div>

        </section>
    </div>
</template>

<script setup>
import { ChevronLeft, BookOpenText } from 'lucide-vue-next'
import { onMounted, onUnmounted } from 'vue'

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
    const revealElements = document.querySelectorAll('.reveal-element, .reveal-scale')
    revealElements.forEach(el => observer.observe(el))
});
</script>

<style scoped>
/* ----------------------------------------------------
   Core Animations 
---------------------------------------------------- */

.reveal-element {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
        transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.reveal-element.is-visible {
    opacity: 1;
    transform: translateY(0);
}

.reveal-scale {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
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

.delay-600 {
    transition-delay: 600ms;
}
</style>
