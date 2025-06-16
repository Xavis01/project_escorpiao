// // frontend/src/composables/useSection.js
// import { ref, onMounted, onUnmounted } from 'vue'

// export function useSection() {
//   const activeSection = ref('')
//   let observer = null

//   const initScrollObserver = (sections) => {
//     observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
//           activeSection.value = entry.target.id
//         }
//       })
//     }, {
//       threshold: 0.4,
//       rootMargin: '0px 0px -40% 0px'
//     })

//     sections.forEach(id => {
//       const el = document.getElementById(id)
//       if (el) observer.observe(el)
//     })
//   }

//   onUnmounted(() => {
//     if (observer) observer.disconnect()
//   })

//   return { activeSection, initScrollObserver }
// }
