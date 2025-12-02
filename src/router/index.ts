import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalcComponent from "@/components/CalcComponent.vue";
import IndexView from "@/views/IndexView.vue";
import ChildrenView from "@/views/ChildrenView.vue";
import CounterView from "@/views/CounterView.vue";
import TodoView from '@/views/TodoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/test/:username?',
      name: 'test',
      component: () => import('../components/TestComponent.vue'),
    },
    {
      path: '/calc',
      name: 'calc',
      component: CalcComponent,
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterView
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoView
    },
    {
      path: '/index/:id',
      name: 'index',
      component: IndexView,
      props: true,
      children: [
        {
          path: '/index/:id/info',
          name: 'infoChildren',
          component: ChildrenView,
          props: true,
        }
      ]
    },
  ],
})

export default router
