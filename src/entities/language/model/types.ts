import type { APISchemas } from "@/shared/api"

export type Section = APISchemas["Section"]

export function findSectionByNumber(sections: Section[], number: number) {
  return sections.find((section) => section.number === number)
}

export type Variant = APISchemas["Variant"]
