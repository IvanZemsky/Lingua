import type { RouteRecordInfo } from "vue-router"

type SectionParams = { sectionNumber: string }

type LessonParams = {
  sectionNumber: string
  unitNumber: string
  lessonNumber: string
  variantNumber: string
}

interface RouteNamedMap {
  sections: RouteRecordInfo<"sections", "/sections">
  section: RouteRecordInfo<
    "section",
    "/sections/:sectionNumber",
    SectionParams,
    SectionParams
  >
  lesson: RouteRecordInfo<
    "lesson",
    "/sections/:sectionNumber/units/:unitNumber/lessons/:lessonNumber/variants/:variantNumber",
    LessonParams,
    LessonParams
  >
}

export function getLessonPagePath(
  sectionNumber: string | number,
  unitNumber: string | number,
  lessonNumber: string | number,
  variantNumber: string | number,
) {
  return `/sections/${sectionNumber}/units/${unitNumber}/lessons/${lessonNumber}/variants/${variantNumber}`
}

declare module "vue-router" {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap
  }
}
