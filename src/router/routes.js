
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ],
  }, {
    path: '/people',
    component: () => import('pages/People.vue')
  }, {
    path: '/planets',
    component: () => import('pages/Planets.vue')
  }, {
    path: '/starships',
    component: () => import('pages/Starships.vue')
  }, {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
