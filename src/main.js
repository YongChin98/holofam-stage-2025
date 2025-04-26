import './assets/stylesheet/main.css'

import { createApp } from 'vue'

import PrimeVue from "primevue/config"
import Aura from '@primeuix/themes/aura'
import AnimateOnScroll from 'primevue/animateonscroll'
import App from './App.vue'
import router from './router'

import {createI18n} from 'vue-i18n'
import en from './assets/locales/en.json'
import jp from './assets/locales/jp.json'


const app = createApp(App);

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en, jp
    }
})

app.use(PrimeVue, {
    theme: {
        preset: Aura,
    },
});
app.use(router);
app.use(i18n);
app.directive('animateonscroll', AnimateOnScroll);
app.mount('#app')
