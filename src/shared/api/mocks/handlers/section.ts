import { CONFIG } from "@/shared/model"
import { http, HttpResponse } from "msw"
import { MOCK_SECTIONS } from "../data/sections"
import { MOCK_UNITS } from "../data/units"

export const sectionHandlers = [
  http.get(`${CONFIG.API_BASE_URL}/sections`, () => {
    return HttpResponse.json(MOCK_SECTIONS)
  }),

  http.get(`${CONFIG.API_BASE_URL}/sections/:sectionNumber/units`, (req) => {
    const sectionNumber = parseInt(req.params.sectionNumber as string)

    const section = MOCK_SECTIONS.find((s) => s.number === sectionNumber)

    if (!section) {
      return HttpResponse.json({ message: "Not found" }, { status: 404 })
    }

    const units = MOCK_UNITS.filter((u) => u.sectionNumber === section?.number)

    if (!units) {
      return HttpResponse.json({ message: "Not found" }, { status: 404 })
    }

    return HttpResponse.json(units)
  }),
]
