import { createApp } from "vue"
import { createPinia } from "pinia"

import "./styles/fonts.css"
import "./styles/index.css"

import App from "./app.vue"
import router from "./router"
import { enableMocking } from "@/shared/api"
import { useCourseProgressStore } from "@/features/language/progress"

enableMocking().then(() => {
  const app = createApp(App)

  app.use(createPinia())
  app.use(router)

  useCourseProgressStore()

  app.mount("#app")
})
