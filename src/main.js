import { createApp } from 'vue'
import App from './App.vue'
import uploader from 'vue-simple-uploader'

const app = createApp(App)
app.use(uploader)
 
createApp(App).mount('#app')
