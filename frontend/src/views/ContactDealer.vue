<template>
    <div class="mt-16" style="background-color: #faf4ef; overflow-x: hidden;">
        <section id="contato" class="max-w-6xl mx-auto px-6 pt-24 scroll-mt-32">

            <div class="flex items-center gap-4 mb-10 reveal-element">
                <router-link to="/contato"
                    class="transition-transform duration-300 hover:-translate-x-1 group bg-white p-2 rounded-full shadow-sm hover:shadow-md border border-gray-100">
                    <ChevronLeft
                        class="w-8 h-8 text-gray-500 group-hover:text-red-700 transition-colors duration-300" />
                </router-link>
                <div class="flex items-center gap-4">
                    <h2 class="text-3xl font-extrabold text-red-700 font-montserrat tracking-tight uppercase">SEJA
                        REVENDEDOR</h2>
                    <HeartHandshake class="text-red-700" stroke-width="2" :size="isMobile ? 45 : 36" />
                </div>
            </div>

            <div class="max-w-4xl mx-auto reveal-scale delay-100">
                <form ref="formRef" @submit.prevent="sendEmail"
                    class="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 font-montserrat relative overflow-hidden">

                    <!-- Decorative Element -->
                    <div
                        class="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-40 pointer-events-none -translate-y-1/2 translate-x-1/2">
                    </div>

                    <div class="md:col-span-1 reveal-element delay-200 relative z-10">
                        <label class="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Nome *</label>
                        <input type="text" name="nome" v-model="form.nome" required
                            class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 focus:outline-none transition-all duration-300 text-gray-800"
                            placeholder="Seu nome completo" />
                    </div>
                    <div class="md:col-span-1 reveal-element delay-200 relative z-10">
                        <label class="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">E-mail
                            *</label>
                        <input type="email" name="email" v-model="form.email" required
                            class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 focus:outline-none transition-all duration-300 text-gray-800"
                            placeholder="seu@email.com" />
                    </div>
                    <div class="md:col-span-1 reveal-element delay-300 relative z-10">
                        <label class="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Telefone
                            *</label>
                        <input type="tel" name="telefone" v-model="form.telefone" required
                            class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 focus:outline-none transition-all duration-300 text-gray-800"
                            placeholder="(00) 00000-0000" />
                    </div>
                    <div class="md:col-span-1 reveal-element delay-300 relative z-10">
                        <label class="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Empresa
                            *</label>
                        <input type="text" name="empresa" v-model="form.empresa" required
                            class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 focus:outline-none transition-all duration-300 text-gray-800"
                            placeholder="Nome da sua empresa" />
                    </div>
                    <div class="md:col-span-1 reveal-element delay-400 relative z-10 lg:col-span-2">
                        <label class="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">CNPJ *</label>
                        <input type="text" name="cnpj" v-model="form.cnpj" required
                            class="w-full md:w-1/2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 focus:outline-none transition-all duration-300 text-gray-800"
                            placeholder="00.000.000/0000-00" />
                    </div>
                    <div class="md:col-span-2 reveal-element delay-500 relative z-10">
                        <label class="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Mensagem
                            *</label>
                        <textarea name="mensagem" v-model="form.mensagem" required rows="4"
                            class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 focus:outline-none transition-all duration-300 text-gray-800 resize-none"
                            placeholder="Como podemos ajudá-mo a se tornar um revendedor?"></textarea>
                    </div>

                    <div
                        class="md:col-span-2 flex flex-col sm:flex-row justify-between items-center gap-6 mt-4 relative z-10 reveal-element delay-600">

                        <div
                            class="relative group flex items-center bg-gray-50 p-2 rounded-full border border-gray-100">
                            <CircleAlert class="h-5 w-5 text-gray-400 hover:text-red-700 cursor-help transition-colors"
                                stroke="currentColor" />
                            <div
                                class="absolute left-10 bottom-full mb-2 w-64 text-sm bg-gray-800 text-white p-3 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-50">
                                Todos os campos marcados com * são obrigatórios para prosseguir.
                                <svg class="absolute text-gray-800 h-2 w-full left-0 top-full" x="0px" y="0px"
                                    viewBox="0 0 255 255" xml:space="preserve">
                                    <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
                                </svg>
                            </div>
                        </div>

                        <button type="submit" :disabled="loading"
                            class="w-full sm:w-auto bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-10 rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(185,28,28,0.25)] hover:shadow-[0_12px_25px_rgba(185,28,28,0.4)] hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:hover:-translate-y-0 disabled:hover:shadow-none min-w-[160px] flex items-center justify-center gap-3">
                            <span v-if="!loading">Enviar Mensagem</span>
                            <span v-else class="invisible">Enviar Mensagem</span>
                            <LoaderCircle v-if="loading" class="animate-spin absolute w-6 h-6" />
                        </button>

                    </div>

                    <transition name="fade">
                        <div v-if="success"
                            class="md:col-span-2 bg-green-50 text-green-700 px-4 py-3 rounded-lg border border-green-200 font-semibold mt-4 text-center">
                            Mensagem enviada com sucesso! Em breve entraremos em contato.
                        </div>
                    </transition>
                    <transition name="fade">
                        <div v-if="error"
                            class="md:col-span-2 bg-red-50 text-red-700 px-4 py-3 rounded-lg border border-red-200 font-semibold mt-4 text-center">
                            Ocorreu um erro ao enviar, tente novamente mais tarde.
                        </div>
                    </transition>
                </form>
            </div>
        </section>
        <br><br><br>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, LoaderCircle, HeartHandshake, CircleAlert } from 'lucide-vue-next'
import emailjs from '@emailjs/browser'

const form = ref({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    cnpj: '',
    mensagem: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref(false)
const formRef = ref(null)

function sendEmail() {
    loading.value = true
    success.value = false
    error.value = false

    emailjs.sendForm(
        'service_qkfa5mv',      // Substitua pelo seu Service ID do EmailJS
        'template_63ypqqb',     // Substitua pelo seu Template ID do EmailJS
        formRef.value,
        'tbViC79WPqnsOHWBi'       // Substitua pelo seu Public Key do EmailJS
    ).then(() => {
        loading.value = false
        success.value = true
        // Limpa o formulário
        form.value = { nome: '', email: '', telefone: '', empresa: '', cnpj: '', mensagem: '' }
        setTimeout(() => success.value = false, 5000)
    }).catch(() => {
        loading.value = false
        error.value = true
    })
}


const isMobile = ref(window.innerWidth <= 767);

function handleResize() {
    isMobile.value = window.innerWidth <= 767;
}

onMounted(() => {
    window.addEventListener('resize', handleResize);

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

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
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

/* Vue Transitions */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
