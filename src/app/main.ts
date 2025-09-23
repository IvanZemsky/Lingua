import { createApp } from "vue"
import { createPinia } from "pinia"

import "./styles/fonts.css"
import "./styles/index.css"

import App from "./app.vue"
import router from "./router"
import { enableMocking } from "@/shared/api"

enableMocking().then(() => {
  const app = createApp(App)

  app.use(createPinia())
  app.use(router)

  app.mount("#app")
})
