import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Jobs from '../views/Jobs/JobsView.vue'
import JobDetail from '../views/Jobs/JobDetailView.vue'
import NotFound from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/job/:id', //Para pasar parámetros
    name: 'jobDetail',
    component: JobDetail,
    props: true //Para pasar los parámetros del URL como props de componentes
  },
  //redirection
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  //404
  {
    path: '/:catchAll(.*)', //Regex para capturar patron de todo lo que no este definido
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
