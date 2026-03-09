<template>
    <div id="background" style="background-color: #faf4ef; overflow-x: hidden;">

        <div id="inicio" name="Capa Inicial" class="relative pt-24 md:pt-28">
            <img :src="Capa" alt="Capa Inicial" class="w-full h-auto object-cover" fetchpriority="high" />
        </div>

        <!-- Empresa Section -->
        <section id="empresa" class="relative">
            <div class="max-w-6xl mx-auto px-6 pt-32 scroll-mt-32">
                <!-- Título -->
                <div class="flex items-center gap-4 reveal-element">
                    <h2 class="text-3xl font-extrabold mt-6 text-red-700 mb-6 font-montserrat tracking-tight">EMPRESA
                    </h2>
                    <Building class="text-red-700 mb-4" stroke-width="2" size="32" />
                </div>

                <!-- Texto -->
                <div class="reveal-element delay-100">
                    <p
                        class="text-gray-700 text-lg mb-8 leading-relaxed font-montserrat relative pl-6 border-l-4 border-red-700">
                        Desde nossa fundação em 1970, nos definimos como uma empresa responsável com nossos parceiros de
                        negócios em todo Brasil. Dedicação, conhecimento, flexibilidade e respeito aos clientes são
                        princípios que
                        julgamos imprescindíveis e sobre os quais conduzimos os nossos negócios. A prática deles no dia
                        a dia de
                        nossas atividades nos faz crescer e evoluir.
                        <br /><br />
                        Ao mesmo tempo construímos uma empresa sólida, moderna e com produtos de qualidade, buscando
                        sempre
                        atender aos mais exigentes padrões de mercado.
                    </p>
                </div>

                <!-- Grade de Imagens (Staggered) -->
                <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <img v-for="(img, index) in empresaImages" :key="index" :src="img" alt="Imagem Empresa"
                        class="rounded-xl object-cover w-full h-auto icon-container3 reveal-scale shadow-md hover:shadow-xl hover:shadow-red-900/10"
                        :style="{ transitionDelay: `${index * 100}ms` }" />
                </div>

                <div class="flex justify-center mt-12 reveal-element delay-300">
                    <router-link to="/nossa-historia">
                        <button
                            class="group relative overflow-hidden border border-red-700 bg-red-700 text-white px-10 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-white z-10 hover:shadow-[0_8px_30px_rgb(185,28,28,0.4)] hover:-translate-y-1">
                            <span class="relative z-10 group-hover:text-red-700">SOBRE NÓS</span>
                        </button>
                    </router-link>
                </div>
            </div>

            <br><br><br>

            <!-- Seção Missão, Visão e Valores -->
            <div
                class="relative w-full bg-gradient-to-b from-[#720e0e] to-[#5a0a0a] text-white overflow-hidden py-20 font-montserrat border-none shadow-inner">
                <!-- Topo orgânico -->
                <div class="absolute top-0 left-0 w-full" style="z-index:1;">
                    <svg viewBox="0 0 1440 120" class="w-full h-16 md:h-24 rotate-180" preserveAspectRatio="none">
                        <path d="M0,80 Q360,120 720,90 Q1080,60 1440,100 L1440,120 L0,120 Z" fill="#faf4ef" />
                    </svg>
                </div>

                <!-- Conteúdo principal -->
                <div
                    class="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8 pt-8 md:pt-4">
                    <!-- Missão -->
                    <div
                        class="flex-1 flex flex-col items-center text-center bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 reveal-element hover:-translate-y-2 transition-transform duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-black/40">
                        <div
                            class="bg-gradient-to-br from-[#d32f2f] to-[#a4221e] rounded-2xl w-24 h-24 flex items-center justify-center mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.3)] icon-float">
                            <img :src="Missao" alt="Missão" class="w-12 h-12 drop-shadow-lg" />
                        </div>
                        <h3 class="text-xl font-bold mb-4 tracking-wider text-red-100">MISSÃO</h3>
                        <p class="text-sm md:text-base leading-relaxed text-gray-200">
                            Fornecer produtos químicos com excelência, garantindo qualidade, agilidade e segurança para
                            distribuidores em todo o Brasil, promovendo parcerias duradouras e contribuindo para o
                            crescimento sustentável do setor.
                        </p>
                    </div>
                    <!-- Visão -->
                    <div
                        class="flex-1 flex flex-col items-center text-center bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 reveal-element delay-200 hover:-translate-y-2 transition-transform duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-black/40">
                        <div class="bg-gradient-to-br from-[#d32f2f] to-[#a4221e] rounded-2xl w-24 h-24 flex items-center justify-center mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.3)] icon-float"
                            style="animation-delay: 0.2s;">
                            <img :src="Visao" alt="Visão" class="w-12 h-12 drop-shadow-lg" />
                        </div>
                        <h3 class="text-xl font-bold mb-4 tracking-wider text-red-100">VISÃO</h3>
                        <p class="text-sm md:text-base leading-relaxed text-gray-200">
                            Ser referência nacional em distribuição de soda cáustica, reconhecida pela confiabilidade,
                            compromisso, agilidade e excelência.
                        </p>
                    </div>
                    <!-- Valores -->
                    <div
                        class="flex-1 flex flex-col items-center text-center bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 reveal-element delay-400 hover:-translate-y-2 transition-transform duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-black/40">
                        <div class="bg-gradient-to-br from-[#d32f2f] to-[#a4221e] rounded-2xl w-24 h-24 flex items-center justify-center mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.3)] icon-float"
                            style="animation-delay: 0.4s;">
                            <img :src="Valor" alt="Valores" class="w-12 h-12 drop-shadow-lg" />
                        </div>
                        <h3 class="text-xl font-bold mb-4 tracking-wider text-red-100">VALORES</h3>
                        <p class="text-sm md:text-base leading-relaxed text-gray-200">
                            Foco no cliente, qualidade, confiança, responsabilidade socioambiental, inovação e
                            valorização das pessoas.
                        </p>
                    </div>
                </div>

                <!-- Faixa inferior -->
                <div class="absolute bottom-0 left-0 w-full" style="z-index:1;">
                    <svg viewBox="0 0 1440 120" class="w-full h-16 md:h-24" preserveAspectRatio="none">
                        <path d="M0,80 Q360,120 720,90 Q1080,60 1440,100 L1440,120 L0,120 Z" fill="#faf4ef" />
                    </svg>
                </div>
            </div>
        </section>


        <!-- Section Produtos -->
        <section id="produtos" class="max-w-6xl mx-auto px-6 pt-32 pb-6 scroll-mt-32">
            <!-- Título -->
            <div class="flex items-center gap-4 reveal-element mb-0 mt-4 text-red-700">
                <h2 class="text-3xl font-extrabold font-montserrat tracking-tight m-0">PRODUTOS</h2>
                <PackageOpen stroke-width="2" size="32" class="mb-1" />
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <div class="reveal-element delay-100 flex flex-col justify-center">
                    <!-- Texto descritivo -->
                    <p
                        class="text-gray-700 text-lg mb-6 leading-relaxed font-montserrat relative pl-6 border-l-4 border-red-700">
                        A soda cáustica em escamas é obtida a partir do processo de evaporação da soda cáustica líquida,
                        da
                        fusão do produto anidro e do processo de escamação. Este produto apresenta-se na forma de
                        escamas brancas,
                        altamente deliquescentes (absorve a umidade do ar e nela se dissolve) e com concentração média
                        de 98% de hidróxido de
                        sódio em peso, conforme a especificação.
                    </p>
                    <p
                        class="text-gray-700 text-lg leading-relaxed font-montserrat relative pl-6 border-l-4 border-red-400">
                        É utilizada na fabricação de sabões e detergentes, no tratamento de superfícies de metais
                        ferrosos, na
                        formulação de banhos de eletrodeposição, na mercerização de têxteis, na regeneração de resinas
                        de troca
                        iônica e na correção de pH em vários processos industriais, como os da indústria de alimento,
                        álcool e
                        farmacêutica.
                    </p>
                </div>

                <!-- Grid de produtos -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-x-4 md:gap-y-8 select-none">
                    <!-- Produto 500g -->
                    <div class="flex flex-col items-center text-center reveal-scale delay-200 group relative">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 ease-out z-0 opacity-50 blur-xl">
                        </div>
                        <img :src="soda500g" alt="Soda Cáustica 500g"
                            class="relative z-10 product-img object-contain w-52 md:w-60 h-auto filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_25px_35px_rgba(185,28,28,0.25)] transition-all duration-500 hover:-translate-y-4" />
                        <p
                            class="text-lg font-bold mt-4 text-gray-800 font-montserrat group-hover:text-red-700 transition-colors">
                            Soda Cáustica 500g</p>
                    </div>

                    <!-- Produto 1kg -->
                    <div class="flex flex-col items-center text-center reveal-scale delay-300 group relative">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 ease-out z-0 opacity-50 blur-xl">
                        </div>
                        <img :src="soda1kg" alt="Soda Cáustica 1kg"
                            class="relative z-10 product-img object-contain w-52 md:w-60 h-auto filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_25px_35px_rgba(185,28,28,0.25)] transition-all duration-500 hover:-translate-y-4" />
                        <p
                            class="text-lg font-bold mt-4 text-gray-800 font-montserrat group-hover:text-red-700 transition-colors">
                            Soda Cáustica 1kg</p>
                    </div>

                    <div
                        class="flex flex-col items-center text-center reveal-scale delay-400 group relative sm:col-span-2 lg:col-span-1 lg:col-start-1 lg:col-end-3 lg:mx-auto">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 ease-out z-0 opacity-50 blur-xl">
                        </div>
                        <img :src="sodaliquida" alt="Soda Cáustica Líquida"
                            class="relative z-10 product-img object-contain w-52 md:w-60 h-auto filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_25px_35px_rgba(185,28,28,0.25)] transition-all duration-500 hover:-translate-y-4" />
                        <p
                            class="text-lg font-bold mt-4 text-gray-800 font-montserrat group-hover:text-red-700 transition-colors">
                            Soda Cáustica Líquida</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section Receitas -->
        <section id="receitas"
            class="max-w-6xl mx-auto px-6 py-20 scroll-mt-32 font-montserrat relative before:absolute before:inset-0 before:bg-white/40 before:rounded-[3rem] before:-z-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-red-50 mx-4 md:mx-auto mt-16 mb-16">
            <div class="flex items-center gap-4 reveal-element">
                <h2 class="text-3xl font-extrabold mt-2 text-red-700 mb-6 font-montserrat tracking-tight">RECEITAS</h2>
                <BookMarked class="text-red-700 mb-4" stroke-width="2" size="32" />
            </div>

            <div class="flex flex-col md:flex-row gap-8 items-stretch mt-4">
                <!-- Coluna de BOTÕES -->
                <div class="flex flex-col w-full md:w-2/5 space-y-4">

                    <!-- Receita Líquida (Novidade) -->
                    <div class="relative reveal-left delay-100">
                        <span
                            class="absolute -top-3 left-7 z-10 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold rounded-full px-3 py-0.5 shadow-md flex items-center gap-1 select-none pointer-events-none animate-pulse-soft">
                            ✨ Novidade
                        </span>
                        <button @click="toggleReceita(4)" class="recipe-btn w-full"
                            :class="{ 'active bg-red-50 border-red-400 text-red-700': receitaAberta === 4 }">
                            <span class="recipe-btn-text">Receita Sabão Líquido</span>
                            <div class="recipe-btn-icon-wrapper"
                                :class="{ 'bg-red-600 text-white shadow-md': receitaAberta === 4, 'bg-gray-100 text-gray-400': receitaAberta !== 4 }">
                                <ChevronRight v-if="!isMobile" class="w-5 h-5 transition-transform duration-300"
                                    :class="{ 'rotate-90': receitaAberta === 4 }" />
                                <ChevronDown v-else class="w-5 h-5 transition-transform duration-300"
                                    :class="{ 'rotate-180': receitaAberta === 4 }" />
                            </div>
                        </button>
                        <transition name="expand">
                            <div v-if="receitaAberta === 4 && isMobile" class="recipe-content-mobile">
                                <ReceitaDetalhe :tipo="4" :videoReceitas="videoReceitas" />
                            </div>
                        </transition>
                    </div>

                    <!-- Botão Receita 1 -->
                    <div class="reveal-left delay-200">
                        <button @click="toggleReceita(1)" class="recipe-btn w-full"
                            :class="{ 'active bg-red-50 border-red-400 text-red-700': receitaAberta === 1 }">
                            <span class="recipe-btn-text">Receita Sabão em Barra</span>
                            <div class="recipe-btn-icon-wrapper"
                                :class="{ 'bg-red-600 text-white shadow-md': receitaAberta === 1, 'bg-gray-100 text-gray-400': receitaAberta !== 1 }">
                                <ChevronRight v-if="!isMobile" class="w-5 h-5 transition-transform duration-300"
                                    :class="{ 'rotate-90': receitaAberta === 1 }" />
                                <ChevronDown v-else class="w-5 h-5 transition-transform duration-300"
                                    :class="{ 'rotate-180': receitaAberta === 1 }" />
                            </div>
                        </button>
                        <transition name="expand">
                            <div v-if="receitaAberta === 1 && isMobile" class="recipe-content-mobile">
                                <ReceitaDetalhe :tipo="1" :videoReceitas="videoReceitas" />
                            </div>
                        </transition>
                    </div>

                    <!-- Botão Receita 2 -->
                    <div class="reveal-left delay-300">
                        <button @click="toggleReceita(2)" class="recipe-btn w-full"
                            :class="{ 'active bg-red-50 border-red-400 text-red-700': receitaAberta === 2 }">
                            <span class="recipe-btn-text">Receita Sabão do Pará</span>
                            <div class="recipe-btn-icon-wrapper"
                                :class="{ 'bg-red-600 text-white shadow-md': receitaAberta === 2, 'bg-gray-100 text-gray-400': receitaAberta !== 2 }">
                                <ChevronRight v-if="!isMobile" class="w-5 h-5 transition-transform duration-300"
                                    :class="{ 'rotate-90': receitaAberta === 2 }" />
                                <ChevronDown v-else class="w-5 h-5 transition-transform duration-300"
                                    :class="{ 'rotate-180': receitaAberta === 2 }" />
                            </div>
                        </button>
                        <transition name="expand">
                            <div v-if="receitaAberta === 2 && isMobile" class="recipe-content-mobile">
                                <ReceitaDetalhe :tipo="2" :videoReceitas="videoReceitas" />
                            </div>
                        </transition>
                    </div>

                    <!-- Botão Vídeos -->
                    <div class="reveal-left delay-400">
                        <button @click="toggleReceita(3)" class="recipe-btn w-full"
                            :class="{ 'active bg-red-50 border-red-400 text-red-700': receitaAberta === 3 }">
                            <span class="flex items-center gap-2 recipe-btn-text">
                                Vídeos de Sabão
                                <Instagram class="w-5 h-5 text-pink-600 ml-1" />
                            </span>
                            <div class="recipe-btn-icon-wrapper"
                                :class="{ 'bg-red-600 text-white shadow-md': receitaAberta === 3, 'bg-gray-100 text-gray-400': receitaAberta !== 3 }">
                                <ChevronRight v-if="!isMobile" class="w-5 h-5 transition-transform duration-300"
                                    :class="{ 'rotate-90': receitaAberta === 3 }" />
                                <ChevronDown v-else class="w-5 h-5 transition-transform duration-300"
                                    :class="{ 'rotate-180': receitaAberta === 3 }" />
                            </div>
                        </button>
                        <transition name="expand">
                            <div v-if="receitaAberta === 3 && isMobile" class="recipe-content-mobile">
                                <ReceitaDetalhe :tipo="3" :videoReceitas="videoReceitas" />
                            </div>
                        </transition>
                    </div>

                    <!-- Botão Info -->
                    <div class="reveal-left delay-500 mt-6 !mt-8">
                        <router-link to="/info"
                            class="flex justify-between items-center text-lg font-bold text-red-800 px-6 py-5 rounded-2xl bg-red-50 border border-red-200 hover:bg-red-600 hover:text-white hover:border-red-600 hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 shadow-sm active:scale-[0.98] w-full group">
                            Informações de Manuseio
                            <BookAlert class="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                        </router-link>
                    </div>

                    <!-- MOBILE PLACEHOLDER -->
                    <transition name="fade">
                        <div v-if="isMobile && receitaAberta === null"
                            class="flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm border rounded-3xl shadow-sm p-8 text-center text-gray-500 space-y-4 mb-4 md:hidden mt-4">
                            <div class="bg-gray-100 p-4 rounded-full">
                                <BookMarked class="w-10 h-10 opacity-60 text-gray-500" />
                            </div>
                            <h3 class="text-lg font-bold text-gray-700">Explore Nossas Receitas</h3>
                            <p class="text-sm">Toque em uma opção acima para revelar o passo a passo completo e fazer o
                                melhor sabão caseiro.</p>
                        </div>
                    </transition>
                </div>

                <!-- COLUNA DIREITA (DESKTOP) -->
                <div class="flex-1 hidden md:block relative h-full min-h-[500px] reveal-element delay-300">
                    <transition name="slide-fade" mode="out-in">
                        <div v-if="receitaAberta !== null" :key="receitaAberta"
                            class="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 p-8 h-full">
                            <ReceitaDetalhe :tipo="receitaAberta" :videoReceitas="videoReceitas" />
                        </div>
                        <div v-else
                            class="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-3xl border border-dashed border-gray-200 p-12 text-center shadow-sm h-full max-h-[500px]">
                            <div
                                class="bg-red-50 p-6 rounded-full mb-6 relative hover:scale-110 transition-transform duration-500 cursor-default">
                                <div class="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-20"></div>
                                <BookMarked class="w-16 h-16 text-red-400" />
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">Desperte sua Criatividade</h3>
                            <p class="text-gray-500 max-w-sm text-lg leading-relaxed">Selecione uma receita ao lado para
                                descobrir o passo a passo de como fabricar em casa sabões incríveis.</p>
                        </div>
                    </transition>
                </div>
            </div>
        </section>


        <!-- Section Onde Comprar -->
        <section id="ondecomprar" class="max-w-6xl mx-auto px-6 py-20 scroll-mt-32 font-montserrat">
            <div class="flex items-center gap-4 reveal-element">
                <h2 class="text-3xl font-extrabold mt-6 text-red-700 mb-6 font-montserrat tracking-tight">ONDE COMPRAR?
                </h2>
                <ShoppingCart class="text-red-700 mb-4" stroke-width="2" size="32" />
            </div>

            <p
                class="text-gray-700 text-lg mb-12 leading-relaxed font-montserrat max-w-4xl border-l-4 border-red-700 pl-6 reveal-element delay-100">
                A Soda Cáustica Escorpião, localizada em Serra - Espírito Santo, é referência nacional no fornecimento
                de soda cáustica para distribuidores que valorizam tradição, qualidade e agilidade.
                <br><br>
                Nosso produto pode ser facilmente encontrado em uma ampla rede de parceiros:
            </p>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 mb-8">
                <figure class="flex flex-col items-center reveal-scale delay-200 group">
                    <div
                        class="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 group-hover:shadow-[0_20px_40px_rgba(185,28,28,0.08)] group-hover:-translate-y-3 transition-all duration-500 w-full flex justify-center h-[200px] mb-4 relative overflow-hidden">
                        <div
                            class="absolute inset-0 bg-gradient-to-b from-transparent to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                        <img :src="ondeComprarImages[0]" alt="Mercados"
                            class="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500 self-center z-10" />
                    </div>
                    <figcaption
                        class="text-center text-gray-800 font-bold text-lg group-hover:text-red-700 transition-colors">
                        Mercados
                    </figcaption>
                </figure>

                <figure class="flex flex-col items-center reveal-scale delay-300 group">
                    <div
                        class="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 group-hover:shadow-[0_20px_40px_rgba(185,28,28,0.08)] group-hover:-translate-y-3 transition-all duration-500 w-full flex justify-center h-[200px] mb-4 relative overflow-hidden">
                        <div
                            class="absolute inset-0 bg-gradient-to-b from-transparent to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                        <img :src="ondeComprarImages[1]" alt="Agropecuárias"
                            class="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500 self-center z-10" />
                    </div>
                    <figcaption
                        class="text-center text-gray-800 font-bold text-lg group-hover:text-red-700 transition-colors">
                        Agropecuárias
                    </figcaption>
                </figure>

                <figure class="flex flex-col items-center reveal-scale delay-400 group">
                    <div
                        class="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 group-hover:shadow-[0_20px_40px_rgba(185,28,28,0.08)] group-hover:-translate-y-3 transition-all duration-500 w-full flex justify-center h-[200px] mb-4 relative overflow-hidden">
                        <div
                            class="absolute inset-0 bg-gradient-to-b from-transparent to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                        <img :src="ondeComprarImages[2]" alt="Lojas de produtos de limpeza"
                            class="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500 self-center z-10" />
                    </div>
                    <figcaption
                        class="text-center text-gray-800 font-bold text-lg leading-tight group-hover:text-red-700 transition-colors">
                        Produtos de<br>Limpeza
                    </figcaption>
                </figure>

                <figure class="flex flex-col items-center reveal-scale delay-500 group">
                    <div
                        class="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 group-hover:shadow-[0_20px_40px_rgba(185,28,28,0.08)] group-hover:-translate-y-3 transition-all duration-500 w-full flex justify-center h-[200px] mb-4 relative overflow-hidden">
                        <div
                            class="absolute inset-0 bg-gradient-to-b from-transparent to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                        <img :src="ondeComprarImages[3]" alt="Loja de material de construção"
                            class="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500 self-center z-10" />
                    </div>
                    <figcaption
                        class="text-center text-gray-800 font-bold text-lg leading-tight group-hover:text-red-700 transition-colors">
                        Materiais de<br>Construção
                    </figcaption>
                </figure>
            </div>
        </section>

        <!-- Footer space / CTA extra se quiser -->
        <div class="h-24 bg-gradient-to-t from-white/50 to-transparent"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ReceitaDetalhe from '../components/RecipeDetails.vue'
import { ChevronRight, ChevronDown, BookMarked, Building, BookAlert, Instagram, PackageOpen, ShoppingCart } from 'lucide-vue-next'

import Capa from '../assets/identidade/HOME_PAGE-opt.webp'
import Missao from '../assets/empresa/missao.png'
import Visao from '../assets/empresa/visao.png'
import Valor from '../assets/empresa/valor.png'

// Importação das imagens da seção Empresa
import sobre1 from '../assets/empresa/sobre_1-opt.webp'
import sobre2 from '../assets/empresa/sobre_2-opt.webp'
import sobre3 from '../assets/empresa/sobre_6-opt.webp'
import sobre4 from '../assets/empresa/sobre_8-opt.webp'
import sobre5 from '../assets/empresa/sobre_5.webp'
import sobre6 from '../assets/empresa/sobre_3.webp'

import local1 from '../assets/ondeComprar/1.png'
import local2 from '../assets/ondeComprar/2.png'
import local3 from '../assets/ondeComprar/3.png'
import local4 from '../assets/ondeComprar/4.png'

import soda500g from '../assets/produto/novo1.png'
import soda1kg from '../assets/produto/novo3.png'
import sodaliquida from '../assets/produto/novo2.png'

const empresaImages = [
    sobre1,
    sobre2,
    sobre3,
    sobre4,
    sobre5,
    sobre6
]

const ondeComprarImages = [
    local1,
    local2,
    local3,
    local4,
]

const receitaAberta = ref(null)

function toggleReceita(num) {
    receitaAberta.value = receitaAberta.value === num ? null : num
}

// Responsividade mobile
const isMobile = ref(false)
function handleResize() {
    isMobile.value = window.innerWidth < 768
}

const videoReceitas = {
    1: "https://www.youtube.com/embed/azPRpXrowmo",
    2: "https://www.youtube.com/embed/djV11Xbc914"
}

// Intersection Observer for Scroll Animations
onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)



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
    const revealElements = document.querySelectorAll('.reveal-element, .reveal-scale, .reveal-left, .reveal-right')
    revealElements.forEach(el => observer.observe(el))
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})

</script>

<style scoped>
/* ----------------------------------------------------
   Core Animations 
---------------------------------------------------- */

.reveal-element {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
        transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.reveal-element.is-visible {
    opacity: 1;
    transform: translateY(0);
}

.reveal-scale {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
    transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
        transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.reveal-scale.is-visible {
    opacity: 1;
    transform: scale(1) translateY(0);
}

.reveal-left {
    opacity: 0;
    transform: translateX(-40px);
    transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
        transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.reveal-left.is-visible {
    opacity: 1;
    transform: translateX(0);
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


/* ----------------------------------------------------
   Component Specific Styles 
---------------------------------------------------- */
/* Empresa Grid */
.icon-container3 {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    background: #fff;
}

/* Floating Icons in Mission/Vision/Values */
@keyframes float {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-8px);
    }

    100% {
        transform: translateY(0px);
    }
}

.icon-float {
    animation: float 4s ease-in-out infinite;
}

/* Recipes Buttons */
.recipe-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
    font-size: 1.125rem;
    font-weight: 700;
    color: #374151;
    /* text-gray-700 */
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    /* border-gray-200 */
    border-radius: 1rem;
    /* rounded-2xl */
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.recipe-btn:hover {
    border-color: #fca5a5;
    /* border-red-300 */
    box-shadow: 0 10px 15px -3px rgba(185, 28, 28, 0.1), 0 4px 6px -2px rgba(185, 28, 28, 0.05);
    background-color: #fef2f2;
    /* bg-red-50 */
    color: #b91c1c;
    /* text-red-700 */
    transform: translateY(-2px);
}

.recipe-btn:active {
    transform: translateY(0) scale(0.98);
}


.recipe-btn-text {
    flex: 1;
    text-align: left;
}

.recipe-btn-icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.recipe-content-mobile {
    margin-top: 0.75rem;
    background-color: #ffffff;
    border: 1px solid #f3f4f6;
    border-radius: 1rem;
    padding: 1.25rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

/* Soft Pulse for badges */
@keyframes pulse-soft {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.9;
        transform: scale(1.05);
    }
}

.animate-pulse-soft {
    animation: pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}


/* ----------------------------------------------------
   Vue Transitions 
---------------------------------------------------- */
.slide-fade-enter-active {
    transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
    transform: translateX(20px);
    opacity: 0;
}

.slide-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}

.expand-enter-active,
.expand-leave-active {
    transition: max-height 0.4s ease-in-out, opacity 0.4s ease, padding 0.4s ease;
    overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
    max-height: 0;
    opacity: 0;
    padding-top: 0;
    padding-bottom: 0;
}

.expand-enter-to,
.expand-leave-from {
    max-height: 1000px;
    /* High enough to fit content */
    opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
