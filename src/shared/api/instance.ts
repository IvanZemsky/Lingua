import { createFetch } from "@vueuse/core"
import { CONFIG } from "../model"

export const useFetchClient = createFetch({
  baseUrl: CONFIG.API_BASE_URL,
  fetchOptions: {
    mode: "cors",
  },
})
