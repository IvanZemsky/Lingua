import { CONFIG } from "@/shared/model"
import { http, HttpResponse } from "msw"

const MOCK_SECTIONS = [
  {
    id: "section-1",
    number: 1,
    progress: 0,
    title: "Section 1",
  },
]

export const sectionHandlers = [
  http.get(`${CONFIG.API_BASE_URL}/sections`, () => {
    return HttpResponse.json(MOCK_SECTIONS)
  }),
]
