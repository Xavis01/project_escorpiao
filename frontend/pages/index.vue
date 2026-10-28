<template>
    <div id="background" class="bg-cream" style="overflow-x: hidden;">

        <h1 class="sr-only">
            Soda Cáustica Escorpião — fabricante de soda cáustica desde 1971, na Serra, Espírito Santo
        </h1>

        <div id="inicio" name="Capa Inicial" class="relative pt-[4.5rem] md:pt-20"
            aria-roledescription="carrossel" aria-label="Banners em destaque">
            <div class="relative overflow-hidden aspect-[1888/618] md:aspect-[1888/560] rounded-b-[1.5rem] md:rounded-b-[2.5rem]"
                @mouseenter="pausarRotacao" @mouseleave="retomarRotacao" @focusin="pausarRotacao" @focusout="retomarRotacao">
                <div class="flex h-full transition-transform duration-700 ease-in-out" :style="{ transform: `translateX(-${bannerAtual * 100}%)` }">
                    <div v-for="(banner, index) in banners" :key="banner.alt" class="w-full h-full flex-none">
                        <NuxtLink :to="banner.to" class="block w-full h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white">
                            <img :src="banner.src" :alt="banner.alt" class="w-full h-full object-cover"
                                :fetchpriority="index === 0 ? 'high' : 'auto'" :loading="index === 0 ? 'eager' : 'lazy'" />
                        </NuxtLink>
                    </div>
                </div>

                <button type="button" class="banner-control left-3 md:left-6" aria-label="Banner anterior" @click="bannerAnterior">
                    <ChevronLeft :size="28" aria-hidden="true" />
                </button>
                <button type="button" class="banner-control right-3 md:right-6" aria-label="Próximo banner" @click="proximoBanner">
                    <ChevronRight :size="28" aria-hidden="true" />
                </button>

                <button type="button" class="banner-pause" :aria-label="rotacaoPausada ? 'Retomar rotação automática' : 'Pausar rotação automática'"
                    :aria-pressed="rotacaoPausada" @click="alternarRotacao">
                    {{ rotacaoPausada ? 'Retomar' : 'Pausar' }}
                </button>

                <div class="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="Selecionar banner">
                    <button v-for="(banner, index) in banners" :key="`indicador-${banner.alt}`" type="button"
                        class="h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
                        :class="bannerAtual === index ? 'w-7 bg-white' : 'w-2.5 bg-white/60 hover:bg-white'"
                        :aria-label="`Exibir banner ${index + 1}`" :aria-selected="bannerAtual === index" role="tab"
                        @click="selecionarBanner(index)" />
                </div>
            </div>
        </div>

        <section aria-label="Números da Soda Cáustica Escorpião" class="w-full bg-brand-800 text-white reveal-element">
            <div class="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/15 px-4 sm:px-6 lg:px-8">
                <div class="flex min-h-36 flex-col items-start justify-center gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-start sm:gap-4 sm:px-5 sm:py-7 xl:px-8">
                    <CalendarDays class="h-10 w-10 shrink-0 text-brand-200 sm:h-16 sm:w-16 lg:h-12 lg:w-12 xl:h-16 xl:w-16" stroke-width="1.5" aria-hidden="true" />
                    <div>
                        <p class="whitespace-nowrap text-3xl font-extrabold tracking-tight sm:text-4xl xl:text-5xl">1971</p>
                        <p class="mt-1 text-[11px] font-bold uppercase tracking-[.12em] text-brand-100">Ano de fundação</p>
                    </div>
                </div>
                <div class="flex min-h-36 flex-col items-start justify-center gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-start sm:gap-4 sm:px-5 sm:py-7 xl:px-8">
                    <BadgeCheck class="h-10 w-10 shrink-0 text-brand-200 sm:h-16 sm:w-16 lg:h-12 lg:w-12 xl:h-16 xl:w-16" stroke-width="1.5" aria-hidden="true" />
                    <div>
                        <p class="whitespace-nowrap text-3xl font-extrabold tracking-tight sm:text-4xl xl:text-5xl">96-99<span class="text-xl sm:text-2xl xl:text-3xl">%</span></p>
                        <p class="mt-1 text-[11px] font-bold uppercase tracking-[.12em] text-brand-100">Pureza da soda em escamas</p>
                    </div>
                </div>
                <div class="flex min-h-36 flex-col items-start justify-center gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-start sm:gap-4 sm:px-5 sm:py-7 xl:px-8">
                    <MapPin class="h-10 w-10 shrink-0 text-brand-200 sm:h-16 sm:w-16 lg:h-12 lg:w-12 xl:h-16 xl:w-16" stroke-width="1.5" aria-hidden="true" />
                    <div>
                        <p class="whitespace-nowrap text-3xl font-extrabold tracking-tight sm:text-4xl xl:text-5xl">ES</p>
                        <p class="mt-1 text-[11px] font-bold uppercase tracking-[.12em] text-brand-100">Sede em Serra · Espírito Santo</p>
                    </div>
                </div>
                <div class="flex min-h-36 flex-col items-start justify-center gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-start sm:gap-4 sm:px-5 sm:py-7 xl:px-8">
                    <Globe2 class="h-10 w-10 shrink-0 text-brand-200 sm:h-16 sm:w-16 lg:h-12 lg:w-12 xl:h-16 xl:w-16" stroke-width="1.5" aria-hidden="true" />
                    <div>
                        <p class="whitespace-nowrap text-3xl font-extrabold tracking-tight sm:text-4xl xl:text-5xl">BR</p>
                        <p class="mt-1 text-[11px] font-bold uppercase tracking-[.12em] text-brand-100">Rede nacional de distribuidores</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Empresa Section -->
        <section id="empresa" class="relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 scroll-mt-32">
                <!-- Título -->
                <UiSectionHeader title="EMPRESA" />

                <!-- Texto -->
                <div class="reveal-element delay-100">
                    <p
                        class="text-gray-700 text-lg mb-8 leading-relaxed font-montserrat relative">
                        Desde nossa fundação em 1971, nos definimos como uma empresa responsável com nossos parceiros de
                        negócios em todo o Brasil. Dedicação, conhecimento, flexibilidade e respeito aos clientes são
                        princípios que
                        julgamos imprescindíveis e sobre os quais conduzimos os nossos negócios. A prática deles no dia
                        a dia de
                        nossas atividades nos faz crescer e evoluir.
                        <br /><br />
                        Ao mesmo tempo, construímos uma empresa sólida, moderna e com produtos de qualidade, buscando
                        sempre
                        atender aos mais exigentes padrões de mercado.
                    </p>
                </div>

            </div>

            <!-- Galeria em carrossel contínuo full bleed. -->
            <div class="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
                <div class="empresa-carousel-track flex w-max">
                    <div v-for="(img, index) in imagensEmpresaCarrossel" :key="index" class="mr-4 shrink-0">
                        <img :src="img" :alt="index < empresaImages.length ? 'Imagem Empresa' : ''" :aria-hidden="index >= empresaImages.length" loading="lazy" decoding="async"
                            class="h-32 w-[48vw] rounded object-cover sm:h-44 sm:w-[32vw] md:h-52 md:w-[24vw] lg:h-60 lg:w-[18vw] xl:h-64 xl:w-[16vw]" />
                    </div>
                </div>
            </div>

            <br><br><br>

            <!-- Seção Missão, Visão e Valores -->
            <div
                class="relative w-full bg-gradient-to-b from-brand-dark to-brand-darker text-white overflow-hidden py-20 font-montserrat border-none shadow-inner">
                <!-- Topo orgânico -->
                <div class="absolute top-0 left-0 w-full" style="z-index:1;">
                    <svg viewBox="0 0 1440 120" class="w-full h-16 md:h-24 rotate-180" preserveAspectRatio="none">
                        <path d="M0,80 Q360,120 720,90 Q1080,60 1440,100 L1440,120 L0,120 Z" fill="rgb(var(--color-cream))" />
                    </svg>
                </div>

                <!-- Conteúdo principal -->
                <div
                    class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8 pt-8 md:pt-4">
                    <!-- Missão -->
                    <div
                        class="flex-1 flex flex-col items-center text-center bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 reveal-element hover:-translate-y-2 transition-transform duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-black/40">
                        <div
                            class="bg-gradient-to-br from-brand-icon-from to-brand-icon-to rounded-2xl w-24 h-24 flex items-center justify-center mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.3)] icon-float">
                            <img :src="Missao" alt="Missão" loading="lazy" decoding="async" class="w-12 h-12 drop-shadow-lg" />
                        </div>
                        <h3 class="text-xl font-bold mb-4 tracking-wider text-brand-100">MISSÃO</h3>
                        <p class="text-sm md:text-base leading-relaxed text-gray-200">
                            Fornecer produtos químicos com excelência, garantindo qualidade, agilidade e segurança para
                            distribuidores em todo o Brasil, promovendo parcerias duradouras e contribuindo para o
                            crescimento sustentável do setor.
                        </p>
                    </div>
                    <!-- Visão -->
                    <div
                        class="flex-1 flex flex-col items-center text-center bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 reveal-element delay-200 hover:-translate-y-2 transition-transform duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-black/40">
                        <div class="bg-gradient-to-br from-brand-icon-from to-brand-icon-to rounded-2xl w-24 h-24 flex items-center justify-center mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.3)] icon-float"
                            style="animation-delay: 0.2s;">
                            <img :src="Visao" alt="Visão" loading="lazy" decoding="async" class="w-12 h-12 drop-shadow-lg" />
                        </div>
                        <h3 class="text-xl font-bold mb-4 tracking-wider text-brand-100">VISÃO</h3>
                        <p class="text-sm md:text-base leading-relaxed text-gray-200">
                            Ser referência nacional em distribuição de soda cáustica, reconhecida pela confiabilidade,
                            compromisso, agilidade e excelência.
                        </p>
                    </div>
                    <!-- Valores -->
                    <div
                        class="flex-1 flex flex-col items-center text-center bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 reveal-element delay-400 hover:-translate-y-2 transition-transform duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-black/40">
                        <div class="bg-gradient-to-br from-brand-icon-from to-brand-icon-to rounded-2xl w-24 h-24 flex items-center justify-center mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.3)] icon-float"
                            style="animation-delay: 0.4s;">
                            <img :src="Valor" alt="Valores" loading="lazy" decoding="async" class="w-12 h-12 drop-shadow-lg" />
                        </div>
                        <h3 class="text-xl font-bold mb-4 tracking-wider text-brand-100">VALORES</h3>
                        <p class="text-sm md:text-base leading-relaxed text-gray-200">
                            Foco no cliente, qualidade, confiança, responsabilidade socioambiental, inovação e
                            valorização das pessoas.
                        </p>
                    </div>
                </div>

                <!-- Faixa inferior -->
                <div class="absolute bottom-0 left-0 w-full" style="z-index:1;">
                    <svg viewBox="0 0 1440 120" class="w-full h-16 md:h-24" preserveAspectRatio="none">
                        <path d="M0,80 Q360,120 720,90 Q1080,60 1440,100 L1440,120 L0,120 Z" fill="rgb(var(--color-cream))" />
                    </svg>
                </div>
            </div>
        </section>

        <TeamSection />

        <!-- Produtos: cada bloco leva para a página da linha correspondente. -->
        <section id="produtos" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8 scroll-mt-32">
            <UiSectionHeader title="PRODUTOS" link-to="/produtos" link-label="VER TODOS OS PRODUTOS" />

            <div class="mt-8 space-y-8">
                <NuxtLink to="/linha/soda-caustica" class="product-line-link group reveal-element border-t-4 border-brand-700" aria-label="Conheça a linha Soda Cáustica">
                    <div class="grid gap-8 pt-7 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
                        <div>
                            <div class="flex items-center gap-3 text-brand-700"><FlaskConical class="h-5 w-5" aria-hidden="true" /><p class="text-xs font-bold uppercase tracking-[.16em]">Linha principal</p></div>
                            <h3 class="mt-3 text-3xl font-extrabold tracking-tight text-gray-900">Soda Cáustica</h3>
                            <p class="mt-4 max-w-xl text-base leading-relaxed text-gray-700">Hidróxido de sódio em escamas (98% de pureza) ou em solução líquida a 50%, para aplicações domésticas e industriais.</p>
                            <span class="line-cta mt-6">Conheça a linha <ArrowUpRight class="h-4 w-4" aria-hidden="true" /></span>
                        </div>
                        <div class="grid gap-4 sm:grid-cols-3">
                            <div v-for="produto in sodaProdutos" :key="produto.slug" class="product-preview bg-brand-50">
                                <img :src="produto.img" :alt="produto.nome" loading="lazy" decoding="async" />
                                <p>{{ produto.nome }}</p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>

                <NuxtLink to="/linha/escorpiao-casa" class="product-line-link group reveal-element border-t-4 border-accent" aria-label="Conheça a linha Escorpião Casa">
                    <div class="grid gap-8 pt-7 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
                        <div>
                            <div class="flex items-center gap-3 text-accent"><Sparkles class="h-5 w-5" aria-hidden="true" /><p class="text-xs font-bold uppercase tracking-[.16em]">Nova linha</p></div>
                            <h3 class="mt-3 text-3xl font-extrabold tracking-tight text-gray-900">Linha de Limpeza</h3>
                            <p class="mt-4 max-w-xl text-base leading-relaxed text-gray-700">Produtos de alta pureza para limpeza, higienização e uso doméstico ou industrial.</p>
                            <span class="line-cta line-cta--accent mt-6">Conheça a Escorpião Casa <ArrowUpRight class="h-4 w-4" aria-hidden="true" /></span>
                        </div>
                        <div class="grid gap-4 sm:grid-cols-2">
                            <div v-for="produto in limpezaProdutos" :key="produto.slug" class="product-preview bg-accent-50">
                                <img :src="produto.img" :alt="produto.nome" loading="lazy" decoding="async" />
                                <p>{{ produto.nome }}</p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </section>

        <!-- Receitas: mesmos cards da página de receitas. -->
        <section id="receitas" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-32 font-montserrat">
            <UiSectionHeader title="RECEITAS" link-to="/receitas" link-label="VER TODAS AS RECEITAS" />
            <div class="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <NuxtLink v-for="receita in receitas" :key="receita.slug" :to="`/receita/${receita.slug}`" class="recipe-card group flex h-full flex-col reveal-element focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-4" :aria-label="`Ver receita: ${receita.titulo}`">
                    <div class="relative aspect-[4/3] overflow-hidden bg-gray-200">
                        <img :src="receita.imagem" :alt="receita.alt" loading="lazy" decoding="async" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <span v-if="receita.novidade" class="absolute left-3 top-3 bg-brand-700 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[.12em] text-white">Novidade</span>
                    </div>
                    <div class="flex min-h-32 flex-1 flex-col justify-between border border-t-0 border-gray-200 bg-white p-5 transition-colors duration-200 group-hover:border-brand-300">
                        <div><p class="text-[11px] font-bold uppercase tracking-[.14em] text-brand-700">Passo a passo</p><h3 class="mt-2 text-xl font-bold leading-tight text-gray-900">{{ receita.titulo }}</h3></div>
                        <span class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-700">Ver receita <ArrowUpRight class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></span>
                    </div>
                </NuxtLink>
            </div>
        </section>


        <!-- Section Onde Comprar -->
        <section id="ondecomprar" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-32 font-montserrat">
            <UiSectionHeader title="ONDE COMPRAR?" />

            <p
                class="text-gray-700 text-lg mb-12 leading-relaxed font-montserrat max-w-4xl reveal-element delay-100">
                A Soda Cáustica Escorpião, localizada em Serra - Espírito Santo, é referência nacional no fornecimento
                de soda cáustica para distribuidores que valorizam tradição, qualidade e agilidade.
                <br><br>
                Nosso produto pode ser facilmente encontrado em uma ampla rede de parceiros:
            </p>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 mb-8">
                <figure v-for="canal in canaisCompra" :key="canal.nome" class="flex flex-col items-center reveal-scale group">
                    <div class="flex h-[200px] w-full items-center justify-center rounded border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand-200 group-hover:shadow-[0_16px_32px_rgb(var(--color-brand-700)/0.08)]">
                        <component :is="canal.icone" class="h-14 w-14 text-brand-700 transition-transform duration-300 group-hover:scale-105" stroke-width="1.5" aria-hidden="true" />
                    </div>
                    <figcaption class="mt-4 text-center text-lg font-bold text-gray-800 transition-colors group-hover:text-brand-700">{{ canal.nome }}</figcaption>
                </figure>
            </div>
        </section>

        <!-- Footer space / CTA extra se quiser -->
        <div class="h-24 bg-gradient-to-t from-white/50 to-transparent"></div>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
useSeoMeta({
    title: 'Soda Cáustica Escorpião — Tradição capixaba, presença nacional',
    description:
        'Fabricante de soda cáustica em escamas (98% de pureza) desde 1971, na Serra - ES. Linha de limpeza, receitas de sabão caseiro e rede nacional de distribuidores.',
    ogTitle: 'Soda Cáustica Escorpião',
    ogDescription:
        'Referência nacional em soda cáustica desde 1971. Produtos, receitas de sabão e onde comprar.',
    ogType: 'website',
    ogLocale: 'pt_BR',
})

const siteConfig = useSiteConfig()
useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Soda Cáustica Escorpião',
    url: siteConfig.url,
    inLanguage: 'pt-BR',
})
import { ChevronLeft, ChevronRight, Sparkles, FlaskConical, CalendarDays, BadgeCheck, MapPin, Globe2, ArrowUpRight, Store, Sprout, SprayCan, HardHat } from 'lucide-vue-next'
import { produtos } from '../data/produtos'
import { receitas } from '../data/receitas'

import Capa from '../assets/identidade/home-page-hero-banner.jpg'
import BannerProdutos from '../assets/identidade/header-produtos-corrigido.jpg'
import BannerRevendedor from '../assets/identidade/header-revendedor-escopião-correto.jpg'
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

const empresaImages = [
    sobre1,
    sobre2,
    sobre3,
    sobre4,
    sobre5,
    sobre6
]

const imagensEmpresaCarrossel = [...empresaImages, ...empresaImages]

const canaisCompra = [
    { nome: 'Mercados', icone: Store },
    { nome: 'Agropecuárias', icone: Sprout },
    { nome: 'Produtos de limpeza', icone: SprayCan },
    { nome: 'Materiais de construção', icone: HardHat },
]

const banners = [
    { src: Capa, alt: 'Soda Cáustica Escorpião - referência nacional em soda cáustica', to: '/produtos' },
    { src: BannerProdutos, alt: 'Conheça os produtos da Soda Cáustica Escorpião', to: '/produtos' },
    { src: BannerRevendedor, alt: 'Seja um revendedor da Soda Cáustica Escorpião', to: '/contato/revendedor' },
]
const bannerAtual = ref(0)
const rotacaoPausada = ref(false)
let intervaloBanners

function selecionarBanner(index) {
    bannerAtual.value = index
}

function proximoBanner() {
    bannerAtual.value = (bannerAtual.value + 1) % banners.length
}

function bannerAnterior() {
    bannerAtual.value = (bannerAtual.value - 1 + banners.length) % banners.length
}

function iniciarRotacao() {
    window.clearInterval(intervaloBanners)
    if (!rotacaoPausada.value && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        intervaloBanners = window.setInterval(proximoBanner, 6000)
    }
}

function pausarRotacao() {
    window.clearInterval(intervaloBanners)
}

function retomarRotacao() {
    if (!rotacaoPausada.value) iniciarRotacao()
}

function alternarRotacao() {
    rotacaoPausada.value = !rotacaoPausada.value
    pausarRotacao()
    if (!rotacaoPausada.value) iniciarRotacao()
}

onMounted(() => {
    iniciarRotacao()
})

onBeforeUnmount(() => {
    window.clearInterval(intervaloBanners)
})

const sodaProdutos = produtos.filter((produto) => produto.categoria === 'soda')
const limpezaProdutos = produtos.filter((produto) => produto.categoria === 'limpeza')

// Animações de scroll (IntersectionObserver) via composable
useScrollReveal()

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
.banner-control {
    position: absolute;
    top: 50%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    height: 2.75rem;
    color: #fff;
    background: rgb(0 0 0 / 0.35);
    border-radius: 12px;
    transform: translateY(-50%);
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.banner-control:hover {
    background: rgb(0 0 0 / 0.6);
    transform: translateY(-50%) scale(1.08);
}

.banner-control:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 3px;
}

.banner-pause {
    position: absolute;
    right: 0.75rem;
    bottom: 0.75rem;
    z-index: 2;
    min-height: 2.75rem;
    padding: 0.5rem 0.75rem;
    color: #fff;
    font-size: 0.75rem;
    font-weight: 700;
    background: rgb(0 0 0 / 0.45);
    border-radius: 12px;
}

.banner-pause:hover { background: rgb(0 0 0 / 0.65); }
.banner-pause:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }

@media (max-width: 767px) {
    .banner-control,
    .banner-pause {
        display: none;
    }
}

/* Empresa Grid */
.icon-container3 {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    background: #fff;
}

@keyframes empresa-carousel {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
}

.empresa-carousel-track {
    animation: empresa-carousel 38s linear infinite;
    will-change: transform;
}

.empresa-carousel-track:hover {
    animation-play-state: paused;
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

@media (prefers-reduced-motion: reduce) {
    .empresa-carousel-track { animation: none; }
}

/* Home catalogue cards mirror their full catalogue counterparts. */
.product-line-link { display: block; overflow: hidden; padding: 1.75rem; border-radius: 12px; background: #fff; border-right: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb; border-left: 1px solid #e5e7eb; transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease; }
.product-line-link:hover { border-color: rgb(var(--color-brand-300)); box-shadow: 5px 5px 0 rgb(var(--color-brand-100)); transform: translate(-2px, -2px); }
.product-line-link:focus-visible { outline: 2px solid rgb(var(--color-brand-700)); outline-offset: 4px; }
.product-preview { display: flex; min-height: 11rem; flex-direction: column; align-items: center; justify-content: space-between; border-radius: 12px; padding: 1rem; text-align: center; }
.product-preview img { max-height: 8rem; max-width: 100%; object-fit: contain; filter: drop-shadow(0 12px 14px rgb(0 0 0 / .12)); transition: transform .2s ease; }
.product-preview p { margin-top: .75rem; color: #1f2937; font-size: .8125rem; font-weight: 800; line-height: 1.25; }
.product-line-link:hover .product-preview img { transform: translateY(-.25rem); }
.line-cta { display: inline-flex; align-items: center; gap: .45rem; color: rgb(var(--color-brand-700)); font-size: .8125rem; font-weight: 800; letter-spacing: .04em; text-transform: uppercase; }
.line-cta--accent { color: rgb(var(--color-accent-700)); }
.recipe-card { display: flex; min-width: 0; height: 100%; flex-direction: column; overflow: hidden; border-radius: 12px; transition: transform .2s ease, box-shadow .2s ease; }
.recipe-card:hover { box-shadow: 5px 5px 0 rgb(var(--color-brand-200)); transform: translate(-2px, -2px); }

/* Recipe interaction states. */
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
    border-radius: 12px;
    /* rounded-2xl */
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.recipe-btn:hover {
    border-color: rgb(var(--color-brand-300));
    box-shadow: 0 10px 15px -3px rgb(var(--color-brand-700) / 0.1), 0 4px 6px -2px rgb(var(--color-brand-700) / 0.05);
    background-color: rgb(var(--color-brand-50));
    color: rgb(var(--color-brand-700));
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
    border-radius: 12px;
    transition: all 0.3s ease;
}

.recipe-content-mobile {
    margin-top: 0.75rem;
    background-color: #ffffff;
    border: 1px solid #f3f4f6;
    border-radius: 12px;
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
