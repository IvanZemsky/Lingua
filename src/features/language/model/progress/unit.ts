import type { Unit, UnitWithProgress } from "@/entities/language"
import { initialProgress, type CourseProgressLS } from "."
import { getLessonVariant, getLessonStatus } from "./lesson"

export function convertUnitToUnitWithProgress(
  data: Unit[],
  progress?: CourseProgressLS,
): UnitWithProgress[] {
  return data.map((unit) => ({
    ...unit,
    lessons: unit.lessons.map((lesson) => ({
      ...lesson,
      currentVariant: getLessonVariant(
        { unit: unit.number, number: lesson.number },
        progress ?? initialProgress,
      ),
      status: getLessonStatus(
        {
          unit: unit.number,
          number: lesson.number,
        },
        progress ?? initialProgress,
      ),
    })),
  }))
}

export function getProgressUpdatedByUnitIncrease(currentUnitNumber: number) {
  return {
    unit: currentUnitNumber + 1,
    number: 1,
    variant: 1,
  }
}
