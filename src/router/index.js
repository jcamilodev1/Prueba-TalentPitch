import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        { 
          path: '', 
          name: 'profile', 
          children: [
            { 
              path: '', 
              name: 'profileCompany', 
              component: () => import('@/views/profile/components/tabs/TabProfile.vue') 
            },
            { 
              path: '/vacantes', 
              name: 'vacantesCompany', 
              component: () => import('@/views/profile/components/tabs/TabVacancy.vue') 
            }
          ]
        }
      ]
});

export default router;
