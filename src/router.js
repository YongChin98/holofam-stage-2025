import { createRouter, createWebHistory} from 'vue-router'

import IndexView from './pages/Index.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'hololive 2nd World Tour Synchronize Fan Project', component: IndexView }
    ]
})

router.afterEach((to) => {
    if(to.name) {
        document.title = `${to.name} `;
    }
})

export default router;