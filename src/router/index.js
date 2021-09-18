import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import Movie from '../views/Movie.vue'
import Form from '../views/Form.vue'

const routes = [
  {
    path: '/',
    redirect: '/home/form'
  },
  {
    path: '/home/',
    component: Home,
    children: [
      {
        path: '',
        redirect: '/home/form'
      },
      {
        path: 'form',
        name: 'form',
        component: Form,
        props: true
      },
      // {
      //   path: '/home/form/details',
      //   name: 'Details',
      //   component: () => import('../pages/FormDetails.vue'),
      //   props: true
      // },
      {
        path: 'movie',
        name: 'movie',
        component: Movie
      },
      {
        path: '/home/movie/:id',
        name: 'MovieDetails',
        component: () => import('../pages/MovieDetails.vue'),
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
