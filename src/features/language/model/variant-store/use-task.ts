import type { Variant } from "@/entities/language"
import { computed, ref, type ShallowRef } from "vue"
import type { AnswerModel } from "../../model/variant-store/use-answer"
import type { ResultModel } from "./use-result"
import { useCourseProgressStore } from "../../model/progress/store"

const FIRST_TASK_NUMBER: number = 1

type LessonState = "in-progress" | "finished"

export function useTask(
  data: ShallowRef<Variant | null>,
  answer: AnswerModel,
  result: ResultModel,
) {
  const progress = useCourseProgressStore()
  const state = ref<LessonState>("in-progress")
  const currentTaskNumber = ref(FIRST_TASK_NUMBER)

  const currentTask = computed(() =>
    data.value?.tasks.find((t) => t.number === currentTaskNumber.value),
  )

  const endTaskNumber = computed(
    () => data.value?.tasks[data.value.tasks.length - 1].number,
  )

  const variantClickCallbacks = {
    notChecked: () => answer.checkAnswer(currentTask.value?.result),
    correct: () => {
      answer.handleCorrect()
      result.increaseCorrect()

      if (endTaskNumber.value === currentTaskNumber.value) {
        state.value = "finished"
        if (data.value) {
          progress.updateProgress(data.value)
        }
      }

      currentTaskNumber.value++
    },
    incorrect: () => {
      answer.handleIncorrect()
      result.increaseMistakes()
    },
  }

  const skip = () => {
    if (answer.variant === "incorrect") {
      result.increaseMistakes()
    }
    answer.answerValue = ""
    answer.isChecked = false
    currentTaskNumber.value++
  }

  function handleBtnClick() {
    const variant = answer.variant
    variantClickCallbacks[variant]()
  }

  function reset() {
    state.value = "in-progress"
    currentTaskNumber.value = FIRST_TASK_NUMBER
  }

  return {
    state,
    currentTask,
    currentTaskNumber,
    skip,
    handleBtnClick,
    reset,
  }
}
