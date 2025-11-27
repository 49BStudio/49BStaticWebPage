import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GamePage from '@/views/GamePage.vue'
import RunningBeehind from '@/views/runningBeehind.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/games',
      name: 'games',
      component: GamePage,
    },
    {
      path: '/runningBeehind',
      name: 'runningBeehind',
      component: RunningBeehind,
    },
  ],
})

export default router
