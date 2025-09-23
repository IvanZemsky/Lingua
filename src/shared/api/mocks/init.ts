import { CONFIG } from "@/shared/model"

export async function enableMocking() {
  if (import.meta.env.VITE_ENABLE_MOCKING !== "true") {
    return
  }

  const { worker } = await import("@/shared/api/mocks/browser")
  return worker.start({
    serviceWorker: {
      url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
    },
    onUnhandledRequest(req, print) {
      if (req.url.includes(".ts") || req.url.includes(".vue")) return
      if (req.url.includes(CONFIG.API_BASE_URL + "/")) {
        print.warning()
      }
    },
  })
}
