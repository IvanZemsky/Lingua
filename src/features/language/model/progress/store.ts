import {
  findLessonByNumber,
  findUnitByNumber,
  type Unit,
  type Variant,
} from "@/entities/language"
import { useLocalStorage } from "@vueuse/core"
import { defineStore } from "pinia"
import { ref } from "vue"
import { initialProgress, type CourseProgressLS } from "."
import { isCurrentVariant } from "./variant"

export const useCourseProgressStore = defineStore("course-progress", () => {
  const progress = useLocalStorage<CourseProgressLS>(
    "course-progress",
    initialProgress,
  )

  const units = ref<Unit[]>([])

  function reset() {
    progress.value = initialProgress
  }

  function updateProgress(passedVariant: Variant) {
    if (!isCurrentVariant(progress.value, passedVariant)) return

    const { unit, number, variant } = progress.value.lesson

    const currentUnit = findUnitByNumber(units.value, unit)
    if (!currentUnit) return

    const currentLesson = findLessonByNumber(currentUnit.lessons, number)
    if (!currentLesson) return

    if (variant < currentLesson.totalVariants) {
      progress.value.lesson.variant++
      return
    }

    const nextLesson = findLessonByNumber(currentUnit.lessons, number + 1)
    if (nextLesson) {
      progress.value.lesson = {
        unit,
        number: number + 1,
        variant: 1,
      }
      return
    }

    const nextUnit = findUnitByNumber(units.value, unit + 1)
    if (nextUnit) {
      progress.value.lesson = {
        unit: unit + 1,
        number: 1,
        variant: 1,
      }
      return
    }
  }

  return {
    progress,
    units,
    updateProgress,
    reset,
  }
})
