import type { LessonStatus, Unit, UnitWithProgress } from "@/entities/language"
import { useLocalStorage } from "@vueuse/core"
import { defineStore } from "pinia"

type CourseProgressLS = {
  section: number
  lesson: {
    unit: number
    number: number
    variant: number
  }
}

const initialProgress: CourseProgressLS = {
  section: 1,
  lesson: { unit: 1, number: 1, variant: 1 },
}

export const useCourseProgressStore = defineStore("course-progress", () => {
  const progress = useLocalStorage<CourseProgressLS>(
    "course-progress",
    initialProgress,
  )

  function convertUnitToUnitWithProgress(data: Unit[]): UnitWithProgress[] {
    return data.map((unit) => ({
      ...unit,
      lessons: unit.lessons.map((lesson) => ({
        ...lesson,
        currentVariant: progress.value.lesson.variant,
        status: getLessonStatus({
          unit: unit.number,
          number: lesson.number,
        }),
      })),
    }))
  }

  function getLessonStatus(lesson: {
    unit: number
    number: number
  }): LessonStatus {
    if (getIsCompleted(lesson, progress.value)) return "completed"
    if (getIsActive(lesson, progress.value)) return "active"

    return "unreached"
  }

  return { progress, convertUnitToUnitWithProgress }
})

function getIsCompleted(
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

function getIsActive(
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
