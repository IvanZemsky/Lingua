import { createApp } from "vue"
import { createPinia } from "pinia"

import "./styles/fonts.css"
import "./styles/index.css"

import App from "./app.vue"
import router from "./router"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount("#app")
