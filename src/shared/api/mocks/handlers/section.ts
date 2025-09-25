import { CONFIG } from "@/shared/model"
import { http, HttpResponse } from "msw"
import { MOCK_SECTIONS } from "../data/sections"
import { MOCK_UNITS } from "../data/units"
import { MOCK_VARIANTS } from "../data/variants"

export const sectionHandlers = [
  http.get(`${CONFIG.API_BASE_URL}/sections`, () => {
    return HttpResponse.json(MOCK_SECTIONS)
  }),

  http.get(`${CONFIG.API_BASE_URL}/sections/:sectionNumber/units`, (req) => {
    const sectionNumber = parseInt(req.params.sectionNumber as string)

    const section = MOCK_SECTIONS.find((s) => s.number === sectionNumber)

    if (!section) {
      return HttpResponse.json(
        { message: "Section not found" },
        { status: 404 },
      )
    }

    const units = MOCK_UNITS.filter((u) => u.sectionNumber === section?.number)

    if (!units) {
      return HttpResponse.json({ message: "Unit not found" }, { status: 404 })
    }

    return HttpResponse.json(units)
  }),

  http.get(
    `${CONFIG.API_BASE_URL}/sections/:sectionNumber/units/:unitNumber/lessons/:lessonNumber/variants/:variantNumber`,
    (req) => {
      const sectionNumber = parseInt(req.params.sectionNumber as string)
      const unitNumber = parseInt(req.params.unitNumber as string)
      const lessonNumber = parseInt(req.params.lessonNumber as string)
      const variantNumber = parseInt(req.params.variantNumber as string)

      console.log(sectionNumber, unitNumber, lessonNumber, variantNumber)

      const variant = MOCK_VARIANTS.find(
        (v) =>
          v.sectionNumber === sectionNumber &&
          v.unitNumber === unitNumber &&
          v.lessonNumber === lessonNumber &&
          v.number === variantNumber,
      )
      if (!variant) {
        return HttpResponse.json(
          { message: "Variant not found" },
          { status: 404 },
        )
      }

      return HttpResponse.json(variant)
    },
  ),
]
