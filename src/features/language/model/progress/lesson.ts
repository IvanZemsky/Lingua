import type { LessonStatus } from "@/entities/language"
import type { CourseProgressLS } from "."

export function getLessonStatus(
  lesson: {
    unit: number
    number: number
  },
  progress: CourseProgressLS,
): LessonStatus {
  if (isLessonCompleted(lesson, progress)) return "completed"
  if (isLessonActive(lesson, progress)) return "active"

  return "unreached"
}

export function getLessonVariant(
  lesson: {
    unit: number
    number: number
  },
  progress: CourseProgressLS,
): number {
  const isLesson =
    lesson.unit === progress.lesson.unit &&
    lesson.number === progress.lesson.number

  return isLesson ? progress.lesson.variant : 1
}

export function isLessonCompleted(
  lesson: {
    unit: number
    number: number
  },
  progress: CourseProgressLS,
): boolean {
  const isUnitCompleted = lesson.unit < progress.lesson.unit
  const isLessonInUnitCompleted = lesson.number < progress.lesson.number
  const isUnitInProgress = lesson.unit === progress.lesson.unit
  const isCompleted = isUnitInProgress && isLessonInUnitCompleted

  return isUnitCompleted || isCompleted
}

export function isLessonActive(
  lesson: {
    unit: number
    number: number
  },
  progress: CourseProgressLS,
): boolean {
  const isUnitInProgress = lesson.unit === progress.lesson.unit
  const isLessonInProgress = lesson.number === progress.lesson.number
  return isUnitInProgress && isLessonInProgress
}
