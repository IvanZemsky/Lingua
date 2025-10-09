import { ref, computed, type UnwrapRef } from "vue"

export function useAnswer() {
  const answerValue = ref("")
  const isCorrect = ref(false)
  const isChecked = ref(false)
  const variant = computed(getVariant)

  function checkAnswer(result: string[] | string | undefined) {
    if (!result) return
    const isAnswerCorrect = compareWithResult(result)

    isCorrect.value = isAnswerCorrect
    isChecked.value = true
  }

  function compareWithResult(result: string[] | string) {
    if (Array.isArray(result)) {
      return result.includes(answerValue.value.trim().toLowerCase())
    }
    return result === answerValue.value.trim().toLowerCase()
  }

  function getVariant() {
    if (!isChecked.value) return "notChecked"
    return isCorrect.value ? "correct" : "incorrect"
  }

  function handleCorrect() {
    answerValue.value = ""
    isChecked.value = false
  }

  function handleIncorrect() {
    isChecked.value = false
  }

  function reset() {
    answerValue.value = ""
    isCorrect.value = false
    isChecked.value = false
  }

  return {
    answerValue,
    isCorrect,
    isChecked,
    variant,
    checkAnswer,
    handleCorrect,
    handleIncorrect,
    reset,
  }
}

export type AnswerModel = UnwrapRef<ReturnType<typeof useAnswer>>
