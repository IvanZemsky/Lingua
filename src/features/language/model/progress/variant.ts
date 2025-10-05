import type { Variant } from "@/entities/language"
import type { CourseProgressLS } from "."

export function isCurrentVariant(
  progress: CourseProgressLS,
  passedVariant: Variant,
): boolean {
  if (
    progress.lesson.variant === passedVariant.number &&
    progress.lesson.unit === passedVariant.unitNumber &&
    progress.lesson.number === passedVariant.unitNumber &&
    progress.section === passedVariant.sectionNumber
  ) {
    return true
  }
  return false
}
