<template>
    <div class="mt-16" style="background-color: #faf4ef;">
        <section id="info" class="max-w-6xl mx-auto px-6 pt-24 scroll-mt-32">

            <!-- Título -->
            <div class="flex items-center gap-4 mb-4">
                <div class="flex items-center gap-4 mb-6 pt-6">
                    <h2 class="text-3xl font-extrabold text-red-700 font-montserrat">INFORMAÇÕES</h2>
                    <Info class="text-red-700" stroke-width="2" size="30" />
                </div>
            </div>

            <!-- Conteúdo com divisão e lista -->
            <div class="info-container">
                <ul
                    class="list-disc list-inside text-gray-700 text-lg mb-8 leading-relaxed font-montserrat info-text space-y-3">
                    <li>
                        A soda cáustica é um produto muito corrosivo que pode causar queimaduras severas e irreversíveis
                        na pele e nos olhos, irritação respiratória e é nocivo para organismos aquáticos.
                    </li>
                    <li>
                        Além dos cuidados no manuseio, é fundamental atenção ao armazenamento. A ingestão do produto
                        pode causar a morte.
                    </li>
                    <li>
                        Caso ocorra contato com a soda cáustica, ligue imediatamente para nossa Central de Emergência:
                        <span class="font-semibold text-red-700">0800-118270</span>
                        <span class="inline-flex items-center align-middle ml-2">
                            <span class="relative group">
                                <CircleAlert class="h-4 w-4 text-gray-500 hover:text-black cursor-pointer align-middle"
                                    stroke="currentColor" />
                                <!-- Tooltip -->
                                <div
                                    class="absolute left-6 top-1/2 -translate-y-1/2 w-80 bg-red-100 text-red-800 border border-red-300 px-4 py-3 rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-50">
                                    <span class="block font-bold mb-2">Primeiros Socorros</span>
                                    <ul class="list-disc list-inside space-y-1 text-sm text-red-800">
                                        <li><strong>Contato com a pele:</strong> Lavar com água abundante e sabão.
                                            Retirar roupas contaminadas.</li>
                                        <li><strong>Olhos:</strong> Enxaguar com água por vários minutos. Remover lentes
                                            de contato se possível.</li>
                                        <li><strong>Inalação:</strong> Levar para local ventilado.</li>
                                        <li><strong>Ingestão:</strong> Não provocar vômito. Lavar a boca e procurar
                                            socorro médico.</li>
                                    </ul>
                                </div>
                            </span>
                        </span>
                    </li>


                </ul>

                <!-- Linha vermelha vertical -->
                <div class="divider"></div>

                <!-- Coluna com título e botão -->
                <div class="flex flex-col items-center flex-1">
                    <span
                        class="mb-3 text-center text-base font-semibold text-red-700 font-montserrat tracking-wide uppercase">
                        Ficha de Dados de Segurança
                    </span>
                    <button
                        class="flex flex-col mt-4 font-montserrat items-center justify-center w-full bg-red-700 hover:bg-white hover:text-red-700 hover:border-red-700 text-white px-8 py-3 rounded-full tracking-wide border border-white transition duration-300"
                        @click="openPdf">
                        <span class="mb-1">Abrir FDS</span>
                        <Download />
                    </button>
                </div>
            </div>

            <!-- Título da seção -->
            <div class="flex items-center gap-4 mb-4">
                <div class="flex items-center gap-4 mb-6 pt-6">
                    <h2 class="text-3xl font-extrabold text-red-700 font-montserrat">MANUSEIO DA SODA CÁUSTICA</h2>
                    <ShieldAlert class="text-red-700" stroke-width="2" size="30" />
                </div>
            </div>

            <!-- Lista manuseio -->
            <ul
                class="list-disc list-inside text-gray-700 text-lg mb-8 leading-relaxed font-montserrat info-text space-y-3">
                <li>
                    Os utensílios utilizados para a diluição da soda cáustica devem ser de plástico resistente ao
                    aquecimento.
                    Nunca use para alimentos e sempre lave imediatamente com bastante água antes de reutilizar.
                </li>
                <li>
                    Para manusear o produto, é obrigatório o uso de <strong>luvas</strong>, <strong>máscara</strong> e
                    <span class="inline-flex items-center">
                        <strong>óculos de proteção</strong>.
                        <!-- Tooltip ao lado -->
                        <span class="relative group ml-2">
                            <CircleAlert class="h-4 w-4 text-gray-500 hover:text-black cursor-pointer"
                                stroke="currentColor" />
                            <div
                                class="absolute left-6 top-1/2 -translate-y-1/2 w-72 bg-red-100 text-red-800 border border-red-300 px-4 py-3 rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-50">
                                <ul class="list-disc list-inside text-sm space-y-1">
                                    <li>Luvas de proteção química (PVC ou nitrílica)</li>
                                    <li>Óculos de proteção com vedação lateral</li>
                                    <li>Avental e bota de PVC</li>
                                    <li>Máscara facial em caso de poeiras ou névoa</li>
                                </ul>
                            </div>
                        </span>
                    </span>
                </li>
                <li>
                    As mangas devem ser compridas e justas.
                </li>
                <li>
                    O produto não é inflamável, mas reage com água. Use CO₂ ou pó químico. Evite jato direto de água.
                </li>
                <li>
                    Armazene num local ventilado, seco e fresco, em embalagens de polietileno fechadas e longe de metais e ácidos
                </li>
            </ul>

        </section>
        <br /><br /><br />
    </div>
</template>

<script setup>
import { Info, Download, ShieldAlert, CircleAlert } from 'lucide-vue-next';
function openPdf() {
    window.open('/static/uploads/FDS-ESCORPIAO-2024-ATUALIZADA.pdf', '_blank');
}
</script>

<style scoped>
.info-container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.info-text {
    flex: 3;
}

.divider {
    width: 2px;
    height: 240px;
    background-color: #dc2626;
    margin: 0 1rem;
    border-radius: 1px;
}
</style>
