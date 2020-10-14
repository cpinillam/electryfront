import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/somos',
    name: 'Somos',
    component: () => import('../views/Somos.vue')
  },
    
    {
      path: '/servicios',
      name: 'Servicios',
      component: () => import('../views/Servicios.vue')
    },
    {
      path: '/clientes',
      name: 'Clientes',
      component: () => import('../views/Clientes.vue')
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: () => import('../views/Contacto.vue')
    },
    {
      path: '/contacto-unika',
      name: 'Contacto',
      component: () => import('../views/ContactoMadrid.vue')
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: () => import('../views/Jobs.vue')
    },
    
    {
      path: '/oferta-empleo/:slug',
      name: 'oferta-empleo',
      props: true,
      component: () => import('../views/OfertaEmpleo.vue')
    },
    {
      path: '/delegaciones',
      name: 'Delegaciones',
      component: () => import('../views/Delegaciones.vue')
    },
    {
      path: '/trabaja-con-nosotros',
      name: 'trabaja-con-nosotros',
      component: () => import('../views/trabaja-con-nosotros.vue')
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('../views/Blog.vue')
    },
    {
      path: '/blog/:slug',
      name: 'Blog-detail',
      props: true,
      component: () => import('../views/BlogDetail.vue')
    },



    {
      path: '/landing/:slug',
      name: 'landing',
      props: true,
      component: () => import('../views/Landing.vue')
    },

    {
      path: '/politica-de-privacidad',
      name: 'politica-de-privacidad',
      component: () => import('../views/general/Politica-privacidad.vue')
    },

    {
      path: '/politica-de-cookies',
      name: 'politica-cookies',
      component: () => import('../views/general/Politica-cookies.vue')
    },

    {
      path: '/politica-de-redes-sociales',
      name: 'politica-de-redes-sociales',
      component: () => import('../views/general/Politica-redes.vue')
    },

    {
      path: '/empresas-colaboradoras',
      name: 'empresas-colaboradoras',
      component: () => import('../views/general/Empresas-colaboradoras.vue')
    },

    {
      path: '/nueva-delegacion',
      name: 'nueva-delegacion',
      component: () => import('../views/nueva-delegacion.vue')
    },

    { path: '/404', component: () => import('../views/general/NotFound.vue') },
    
    { path: '/jobs/gracias', component: () => import('../views/general/gracias.vue') },
    { path: '/nueva-delegacion/thanks', component: () => import('../views/general/gracias.vue') },
    { path: '/trabaja-con-nosotros/gracias', component: () => import('../views/general/gracias.vue') },

    { path: '/es/25/que-es-la-generacion-distribuida-de-energia', redirect: '/blog' },  
    { path: '*', redirect: '/404' }
    

    
];


const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
   
    return savedPosition
    } 
    else {
    const position = {}
    
    if (to.hash) {
      position.selector = to.hash
 
      if (document.querySelector(to.hash)) {
        return position
      }  

      return false
    }

   
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior,
  routes,

})

export default router
