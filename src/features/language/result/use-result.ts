import { ref, type UnwrapRef } from "vue"

export type LessonResult = {
  mistakes: number
  correct: number
}

export function useResult() {
  const result = ref<LessonResult>({
    mistakes: 0,
    correct: 0,
  })

  function increaseMistakes() {
    result.value.mistakes++
  }

  function increaseCorrect() {
    result.value.correct++
  }

  return {
    result,
    increaseMistakes,
    increaseCorrect,
  }
}

export type ResultModel = UnwrapRef<ReturnType<typeof useResult>>
