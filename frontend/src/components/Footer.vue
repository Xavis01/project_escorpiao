<template>
    <footer class="bg-white py-12 shadow-[0_-5px_10px_rgba(0,0,0,0.05)]">
        <div class="max-w-7xl mx-auto px-6">
            <!-- Troque o grid por flex para 3 colunas -->
            <div class="flex flex-col md:flex-row justify-between gap-8">
                <!-- Sobre a empresa -->
                <div class="md:w-1/4">
                    <h3 class="text-lg font-bold text-gray-900 mb-4 font-montserrat">SODA CÁUSTICA ESCORPIÃO</h3>
                    <p class="text-gray-700 text-sm font-montserrat">
                        Referência nacional em soda cáustica, tradição, qualidade e agilidade desde 1970.
                    </p>
                </div>

                <!-- Contato -->
                <div class="md:w-1/4">
                    <h3 class="text-lg font-bold text-gray-900 mb-4 font-montserrat">CONTATO</h3>
                    <ul class="space-y-2 text-sm text-gray-700 font-montserrat tracking-wide">
                        <li>Serra, Espírito Santo</li>
                        <li>adm@sodaescorpiao.com.br</li>
                        <li>(27) 99850-7166</li>
                    </ul>
                </div>

                <!-- Redes sociais -->
                <div class="md:w-1/4">
                    <h3 class="text-lg font-bold text-gray-900 mb-4 font-montserrat">REDES SOCIAIS</h3>
                    <div class="flex gap-4">
                        <a href="https://www.instagram.com/sodaescorpiao/" target="_blank" rel="noopener noreferrer"
                            aria-label="Instagram" class="text-red-700 hover:text-red-500 transition">
                            <Instagram class="w-6 h-6" />
                        </a>
                        <a href="https://www.facebook.com/61559856353973/" target="_blank" rel="noopener noreferrer"
                            aria-label="Facebook" class="text-red-700 hover:text-red-500 transition">
                            <Facebook class="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            <!-- Direitos autorais -->
            <div
                class="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500 font-montserrat tracking-wide">
                <p>© 2025 Soda Cáustica Escorpião. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>


</template>


<script setup>
import { Instagram, Facebook } from 'lucide-vue-next';
</script>