import { createRouter, createWebHistory } from 'vue-router'
import SocialView from '@/views/SocialView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '', name: 'XeanutsP', component: SocialView }]
})

export default router
