import Vue3Toastify, { toast, type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(Vue3Toastify, {
    position: 'top-right',
    duration: 3000
  } as ToastContainerOptions)
  vueApp.config.globalProperties.$toast = toast


  return {
    provide: {
      toast
    }
  }
})
