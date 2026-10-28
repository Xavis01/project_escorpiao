<template>
    <div class="bg-cream overflow-x-hidden">
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 font-montserrat">
            <section class="product-line reveal-element" aria-labelledby="soda-title">
                <div class="line-intro grid gap-8 border-t-4 border-brand-700 pt-7 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
                    <div>
                        <div class="flex items-center gap-3 text-brand-700">
                            <FlaskConical class="h-5 w-5" stroke-width="1.8" aria-hidden="true" />
                            <p class="text-xs font-bold uppercase tracking-[.16em]">Linha principal</p>
                        </div>
                        <h2 id="soda-title" class="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">Soda Cáustica</h2>
                        <p class="mt-4 max-w-2xl text-base leading-relaxed text-gray-700">
                            Hidróxido de sódio em escamas (98% de pureza) ou em solução líquida a 50%, para aplicações domésticas e industriais.
                        </p>
                    </div>
                    <div>
                        <p class="text-sm leading-relaxed text-gray-600">
                            Indicada para a fabricação de sabões e detergentes, tratamento de superfícies metálicas, processos têxteis, regeneração de resinas e correção de pH.
                        </p>
                        <NuxtLink to="/linha/soda-caustica" class="line-link mt-5">
                            Conheça a linha <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
                        </NuxtLink>
                    </div>
                </div>

                <div class="mt-9 grid gap-5 md:grid-cols-3">
                    <NuxtLink v-for="produto in sodaProdutos" :key="produto.slug" :to="`/produto/${produto.slug}`" class="product-card group"
                        :aria-label="`Ver detalhes de ${produto.nome}`">
                        <div class="product-image bg-brand-50">
                            <img :src="produto.img" :alt="produto.nome" loading="lazy" decoding="async" />
                        </div>
                        <div class="product-copy">
                            <h3>{{ produto.nome }}</h3>
                            <p>{{ produto.resumo }}</p>
                            <span class="card-link">Ver produto <ArrowUpRight class="h-4 w-4" aria-hidden="true" /></span>
                        </div>
                    </NuxtLink>
                </div>
            </section>

            <section class="product-line mt-24 reveal-element" aria-labelledby="limpeza-title">
                <div class="line-intro grid gap-8 border-t-4 border-accent pt-7 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
                    <div>
                        <div class="flex items-center gap-3 text-accent">
                            <Sparkles class="h-5 w-5" stroke-width="1.8" aria-hidden="true" />
                            <p class="text-xs font-bold uppercase tracking-[.16em]">Nova linha</p>
                        </div>
                        <h2 id="limpeza-title" class="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">Linha de Limpeza</h2>
                        <p class="mt-4 max-w-2xl text-base leading-relaxed text-gray-700">
                            Produtos de alta pureza para limpeza, higienização e uso doméstico ou industrial.
                        </p>
                    </div>
                    <div>
                        <p class="text-sm leading-relaxed text-gray-600">
                            Opções práticas e versáteis para cuidar de roupas, superfícies e ambientes com mais eficiência.
                        </p>
                        <NuxtLink to="/linha/escorpiao-casa" class="line-link line-link--accent mt-5">
                            Conheça a Escorpião Casa <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
                        </NuxtLink>
                    </div>
                </div>

                <div class="mt-9 grid gap-5 md:grid-cols-2">
                    <NuxtLink v-for="produto in limpezaProdutos" :key="produto.slug" :to="`/produto/${produto.slug}`" class="product-card group"
                        :aria-label="`Ver detalhes de ${produto.nome}`">
                        <div class="product-image bg-accent-50">
                            <img :src="produto.img" :alt="produto.nome" loading="lazy" decoding="async" />
                        </div>
                        <div class="product-copy">
                            <h3>{{ produto.nome }}</h3>
                            <p>{{ produto.resumo }}</p>
                            <span class="card-link card-link--accent">Ver produto <ArrowUpRight class="h-4 w-4" aria-hidden="true" /></span>
                        </div>
                    </NuxtLink>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup>
import { ArrowUpRight, FlaskConical, Sparkles } from 'lucide-vue-next'
import { produtos } from '../data/produtos'

useSeoMeta({
    title: 'Produtos — Soda Cáustica Escorpião',
    description: 'Conheça a linha completa de produtos Soda Escorpião: soda cáustica em escamas e líquida, percarbonato e bicarbonato de sódio.',
    ogTitle: 'Produtos Soda Escorpião',
    ogDescription: 'Soda cáustica, percarbonato e bicarbonato de sódio com qualidade e pureza garantidas.',
    ogType: 'website',
    ogLocale: 'pt_BR',
})

const sodaProdutos = produtos.filter((produto) => produto.categoria === 'soda')
const limpezaProdutos = produtos.filter((produto) => produto.categoria === 'limpeza')
const siteConfig = useSiteConfig()

useBreadcrumbJsonLd([{ name: 'Produtos', path: '/produtos' }])

useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Produtos — Soda Cáustica Escorpião',
    description: 'Linha completa de produtos Soda Escorpião: soda cáustica em escamas e líquida, percarbonato e bicarbonato de sódio.',
    mainEntity: {
        '@type': 'ItemList',
        itemListElement: produtos.map((produto, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `${siteConfig.url}/produto/${produto.slug}`,
            name: produto.nome,
        })),
    },
})

useScrollReveal()
</script>

<style scoped>
.reveal-element { opacity: 0; transform: translateY(20px); transition: opacity .45s ease-out, transform .45s ease-out; }
.reveal-element.is-visible { opacity: 1; transform: translateY(0); }

.product-card {
    display: grid;
    min-width: 0;
    grid-template-columns: minmax(0, .92fr) minmax(0, 1.08fr);
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    background: #fff;
    transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease;
}

.product-card:hover { border-color: rgb(var(--color-brand-300)); box-shadow: 5px 5px 0 rgb(var(--color-brand-100)); transform: translate(-2px, -2px); }
.product-image { display: grid; min-height: 15rem; place-items: center; padding: 1.5rem; }
.product-image img { max-height: 13rem; max-width: 100%; object-fit: contain; filter: drop-shadow(0 14px 16px rgb(0 0 0 / .14)); transition: transform .25s ease; }
.product-card:hover .product-image img { transform: translateY(-.25rem); }
.product-copy { display: flex; min-width: 0; flex-direction: column; justify-content: center; padding: 1.5rem; }
.product-copy h3 { color: #111827; font-size: 1.125rem; font-weight: 800; line-height: 1.2; }
.product-copy p { margin-top: .65rem; color: #4b5563; font-size: .875rem; line-height: 1.55; }
.card-link, .line-link { display: inline-flex; align-items: center; gap: .45rem; color: rgb(var(--color-brand-700)); font-size: .8125rem; font-weight: 800; letter-spacing: .04em; text-transform: uppercase; }
.card-link { margin-top: 1.25rem; }
.line-link--accent, .card-link--accent { color: rgb(var(--color-accent-700)); }
.line-link:hover, .card-link:hover { text-decoration: underline; }

@media (max-width: 640px) {
    .product-card { grid-template-columns: 1fr; }
    .product-image { min-height: 14rem; }
}

@media (prefers-reduced-motion: reduce) {
    .reveal-element { opacity: 1; transform: none; transition: none; }
    .product-card, .product-image img { transition: none; }
    .product-card:hover { transform: none; }
}
</style>
