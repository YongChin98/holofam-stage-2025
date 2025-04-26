import { createRouter, createWebHistory} from 'vue-router'

import IndexView from './pages/Index.vue'
import ChanteyView from './pages/Chantey.vue'
import CruisesView from './pages/Cruises.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: IndexView },
        {path: '/cruises', name: 'Cruise', component: CruisesView },
        {path: '/chantey', name: 'Chantey', component: ChanteyView }
    ]
})

router.afterEach((to) => {
    if(to.name) {
        document.title = `${to.name} | Senchou Treasure`;
    }
})

export default router;