import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import App from './App.vue'
import router from './router'
import store from './stores'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store);
app.mount('#app')
