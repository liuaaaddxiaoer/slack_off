import { createRouter, createWebHistory } from 'vue-router'
import video from '@/pages/video/index.vue'
import me from '@/pages/me/index.vue'
import novel from '@/pages/novel/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/video',
      name: 'Video',
      component: video
    },
    {
      path: '/me',
      name: 'Me',
      component: me
    },
    {
      path: '/novel',
      name: 'Novel',
      component: novel
    }
  ],
})

export default router
