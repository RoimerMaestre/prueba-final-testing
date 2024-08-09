import { createRouter, createWebHistory } from 'vue-router' // Importa las funciones necesarias para crear un router
import HomeView from '../views/HomeView.vue' // Importa la vista HomeView
import AboutView from '@/views/AboutView.vue' // Importa la vista AboutView
import ParentComponent from '@/components/ParentComponent.vue'

// Definición de las rutas de la aplicación
const routes = [
  {
    path: '/', // Ruta raíz que se carga cuando el usuario navega a "/"
    name: 'home', // Nombre de la ruta
    component: HomeView // Componente que se renderiza para esta ruta
  },
  {
    path: '/about', // Ruta para la página "About"
    name: 'about', // Nombre de la ruta
    component: AboutView // Componente que se renderiza para esta ruta
  },
  {
    path: '/parent', // Ruta para la página "About"
    name: 'parent', // Nombre de la ruta
    component: ParentComponent // Componente que se renderiza para esta ruta
  },
  
  {
    path: '/contador', // Ruta para la página "Contador"
    name: 'contador', // Nombre de la ruta
    /**
     * Esta ruta utiliza "code-splitting" a nivel de ruta.
     * 
     * Esto genera un chunk separado (about.[hash].js) para esta ruta,
     * que se carga de manera perezosa (lazy-loaded) solo cuando se visita la ruta.
     */
    component: () => import(/* webpackChunkName: "about" */ '../views/CounterView.vue')
  }
]

// Creación del router utilizando el historial de navegación web
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Utiliza el historial de HTML5 para manejar las rutas
  routes // Asigna las rutas definidas al router
})

export default router // Exporta el router para ser usado en la aplicación principal
