<template>
    <div class="mt-16" style="background-color: #faf4ef;">
        <section id="contato" class="max-w-6xl mx-auto px-6 pt-24 scroll-mt-32">
            <div class="flex items-center gap-4 mb-4">
                <router-link to="/contato" class="transition-transform duration-300 hover:-translate-x-1">
                    <ChevronLeft class="w-8 h-8 text-red-700 hover:text-red-600 transition-all duration-300" />
                </router-link>
                <div class="flex items-center gap-4 mb-6 pt-6">
                    <h2 class="text-3xl font-extrabold text-red-700 font-montserrat text-center">FALE CONOSCO</h2>
                    <MessageCircleQuestionMark class="text-red-700 " stroke-width="2" :size="isMobile ? 45 : 30"  />
                </div>
            </div>



            <form @submit.prevent="sendEmail"
                class="bg-white rounded-lg shadow p-8 grid grid-cols-1 md:grid-cols-2 gap-6">


                <div class="md:col-span-1">
                    <label class="block text-gray-700 font-bold mb-2">Nome *</label>
                    <input type="text" v-model="form.nome" required
                        class="w-full border border-gray-300 rounded px-4 py-2 focus:border-red-400 focus:outline-none transition" />
                </div>
                <div class="md:col-span-1">
                    <label class="block text-gray-700 font-bold mb-2">E-mail *</label>
                    <input type="email" v-model="form.email" required
                        class="w-full border border-gray-300 rounded px-4 py-2 focus:border-red-400 focus:outline-none transition" />
                </div>
                <div class="md:col-span-1">
                    <label class="block text-gray-700 font-bold mb-2">Telefone *</label>
                    <input type="tel" v-model="form.telefone" required
                        class="w-full border border-gray-300 rounded px-4 py-2 focus:border-red-400 focus:outline-none transition" />
                </div>
                <div class="md:col-span-1">
                    <label class="block text-gray-700 font-bold mb-2">Empresa</label>
                    <input type="text" v-model="form.empresa"
                        class="w-full border border-gray-300 rounded px-4 py-2 focus:border-red-400 focus:outline-none transition" />
                </div>
                <div class="md:col-span-2">
                    <label class="block text-gray-700 font-bold mb-2">Mensagem *</label>
                    <textarea v-model="form.mensagem" required rows="4"
                        class="w-full border border-gray-300 rounded px-4 py-2 focus:border-red-400 focus:outline-none transition"></textarea>
                </div>
                <div class="md:col-span-2 flex justify-between">

                    <div class="relative group flex items-center">
                        <CircleAlert class="h-4 w-4 text-gray-500 hover:text-black cursor-pointer"
                            stroke="currentColor" />
                        <div
                            class="absolute left-6 w-64 text-sm bg-red-100 text-red-800 border border-red-300 px-3 py-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-50">
                            Os campos <span class="font-bold">Nome</span>, <span class="font-bold">E-mail</span>, <span
                                class="font-bold">Telefone</span> e <span class="font-bold">Mensagem</span> são obrigatórios.
                        </div>
                    </div>

                    <button type="submit" :disabled="loading"
                        class="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-8 rounded transition-all duration-300 shadow hover:shadow-md active:scale-95 min-w-[120px] flex items-center justify-center gap-2">
                        <span v-if="!loading">Enviar</span>
                        <span v-else class="invisible">Enviar</span>
                        <LoaderCircle v-if="loading" class="animate-spin absolute" />
                    </button>

                </div>
                <div v-if="success" class="md:col-span-2 text-green-600 font-semibold mt-2">
                    Mensagem enviada com sucesso!
                </div>
                <div v-if="error" class="md:col-span-2 text-red-600 font-semibold mt-2">
                    Ocorreu um erro ao enviar, tente novamente.
                </div>
            </form>
        </section>
        <br><br><br>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, LoaderCircle, MessageCircleQuestionMark, CircleAlert } from 'lucide-vue-next'
import emailjs from '@emailjs/browser'

const form = ref({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref(false)

function sendEmail() {
    loading.value = true
    success.value = false
    error.value = false

    // Prepara os dados com tratamento para empresa
    const formData = {
        ...form.value,
        empresa: form.value.empresa || 'Sem empresa' // Tratamento para empresa vazia
    }

    emailjs.send(
        'service_qkfa5mv',      // Seu Service ID
        'template_nmvkvpc',     // Seu Template ID
        formData,               // Envia os dados tratados
        'tbViC79WPqnsOHWBi'    // Seu Public Key
    ).then(() => {
        loading.value = false
        success.value = true

        // Limpa o formulário
        form.value = {
            nome: '',
            email: '',
            telefone: '',
            empresa: '',
            mensagem: ''
        }

        // Limpa a mensagem de sucesso após 5 segundos
        setTimeout(() => success.value = false, 5000)
    }).catch((err) => {
        console.error('Erro no envio:', err)
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
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
