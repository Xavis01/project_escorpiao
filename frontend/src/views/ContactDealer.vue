<template>
    <div class="mt-16" style="background-color: #faf4ef;">
        <section id="contato" class="max-w-6xl mx-auto px-6 pt-32 scroll-mt-32">
            <div class="flex items-center gap-4 mb-8">
                <router-link to="/contato" class="transition-transform duration-300 hover:-translate-x-1">
                    <ChevronLeft class="w-8 h-8 text-red-700 hover:text-red-600 transition-all duration-300" />
                </router-link>
                <h2 class="text-3xl font-extrabold text-red-700 font-montserrat">SEJA REVENDEDOR</h2>
            </div>

            <form ref="formRef" @submit.prevent="sendEmail"
                class="bg-white rounded-lg shadow p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="md:col-span-1">
                    <label class="block text-gray-700 font-bold mb-2">Nome *</label>
                    <input type="text" name="nome" v-model="form.nome" required
                        class="w-full border border-gray-300 rounded px-4 py-2 focus:border-red-400 focus:outline-none transition" />
                </div>
                <div class="md:col-span-1">
                    <label class="block text-gray-700 font-bold mb-2">E-mail *</label>
                    <input type="email" name="email" v-model="form.email" required
                        class="w-full border border-gray-300 rounded px-4 py-2 focus:border-red-400 focus:outline-none transition" />
                </div>
                <div class="md:col-span-1">
                    <label class="block text-gray-700 font-bold mb-2">Telefone *</label>
                    <input type="tel" name="telefone" v-model="form.telefone" required
                        class="w-full border border-gray-300 rounded px-4 py-2 focus:border-red-400 focus:outline-none transition" />
                </div>
                <div class="md:col-span-1">
                    <label class="block text-gray-700 font-bold mb-2">Empresa *</label>
                    <input type="text" name="empresa" v-model="form.empresa" required
                        class="w-full border border-gray-300 rounded px-4 py-2 focus:border-red-400 focus:outline-none transition" />
                </div>
                <div class="md:col-span-1">
                    <label class="block text-gray-700 font-bold mb-2">CNPJ *</label>
                    <input type="text" name="cnpj" v-model="form.cnpj" required
                        class="w-full border border-gray-300 rounded px-4 py-2 focus:border-red-400 focus:outline-none transition" />
                </div>
                <div class="md:col-span-2">
                    <label class="block text-gray-700 font-bold mb-2">Mensagem *</label>
                    <textarea name="mensagem" v-model="form.mensagem" required rows="4"
                        class="w-full border border-gray-300 rounded px-4 py-2 focus:border-red-400 focus:outline-none transition"></textarea>
                </div>
                <div class="md:col-span-2 flex justify-end">
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
import { ref } from 'vue'
import { ChevronLeft, LoaderCircle } from 'lucide-vue-next'
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
    }).catch(() => {
        loading.value = false
        error.value = true
    })
}
</script>
