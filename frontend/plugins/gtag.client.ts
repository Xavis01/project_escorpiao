// Registra pageviews no GA4 a cada navegação client-side (NuxtLink não recarrega a página,
// então o gtag('config', ...) disparado uma vez no <head> não cobre rotas seguintes).
export default defineNuxtPlugin(() => {
  const { gaMeasurementId } = useRuntimeConfig().public
  const router = useRouter()

  router.afterEach((to, from) => {
    // Na hidratação o Nuxt dispara uma navegação com from === to, e esse carregamento já foi
    // contado pelo gtag('config') do <head>. Mesmo caminho também cobre troca só de âncora (#secao),
    // que não é uma nova página.
    if (to.path === from.path) return
    if (typeof window.gtag !== 'function') return
    window.gtag('config', gaMeasurementId, { page_path: to.fullPath })
  })
})
