import type { Variant } from "@/entities/language"
import { computed, ref, type ShallowRef } from "vue"
import type { UseAnswerReturn } from "./use-answer"

export function useTask(
  data: ShallowRef<Variant | null>,
  answer: UseAnswerReturn,
) {
  const currentTaskNumber = ref(1)

  const currentTask = computed(() =>
    data.value?.tasks.find((t) => t.number === currentTaskNumber.value),
  )

  const variantClickCallbacks = {
    notChecked: () => answer.checkAnswer(currentTask.value?.results),
    correct: () => {
      answer.handleCorrect()
      currentTaskNumber.value++
    },
    incorrect: () => answer.handleIncorrect(),
  }

  function handleBtnClick() {
    const variant = answer.variant.value

    variantClickCallbacks[variant]()
  }

  return {
    currentTask,
    currentTaskNumber,
    handleBtnClick,
  }
}
