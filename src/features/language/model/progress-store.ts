import type { LessonStatus, Unit, UnitWithProgress } from "@/entities/language"
import { useLocalStorage } from "@vueuse/core"
import { defineStore } from "pinia"
import { ref } from "vue"

export type CourseProgressLS = {
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

  const units = ref<Unit[]>([])

  function convertUnitToUnitWithProgress(data: Unit[]): UnitWithProgress[] {
    return data.map((unit) => ({
      ...unit,
      lessons: unit.lessons.map((lesson) => ({
        ...lesson,
        currentVariant: getLessonVariant(
          { unit: unit.number, number: lesson.number },
          progress.value,
        ),
        status: getLessonStatus({
          unit: unit.number,
          number: lesson.number,
        }),
      })),
    }))
  }

  function reset() {
    progress.value = initialProgress
  }

  function updateProgress() {
    const { unit, number, variant } = progress.value.lesson
    const currentUnit = units.value.find((u) => u.number === unit)
    if (!currentUnit) return

    const currentLesson = currentUnit.lessons.find((l) => l.number === number)
    if (!currentLesson) return

    if (variant < currentLesson.totalVariants) {
      progress.value.lesson.variant++
      return
    }

    const nextLesson = currentUnit.lessons.find((l) => l.number === number)
    if (nextLesson) {
      progress.value.lesson = { unit, number: number + 1, variant: 1 }
      return
    }

    const nextUnit = units.value.find((u) => u.number === unit + 1)
    if (nextUnit) {
      progress.value.lesson = { unit: unit + 1, number: 1, variant: 1 }
      return
    }
  }

  function getLessonStatus(lesson: {
    unit: number
    number: number
  }): LessonStatus {
    if (getIsCompleted(lesson, progress.value)) return "completed"
    if (getIsActive(lesson, progress.value)) return "active"

    return "unreached"
  }

  return { progress, units, convertUnitToUnitWithProgress, updateProgress, reset }
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

function getLessonVariant(
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
