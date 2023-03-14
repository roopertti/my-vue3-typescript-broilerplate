import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
import './index.css'

const routes = [
  { path: '/', sensitive: true, name: 'HomePage', component: HomePage },
  { path: '/about', sensitive: true, name: 'AboutPage', component: AboutPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
