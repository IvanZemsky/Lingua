import { ref, computed } from "vue"

export function useAnswer() {
  const answerValue = ref<string>("")
  const isCorrect = ref(false)
  const isChecked = ref(false)
  const variant = computed(getVariant)

  function checkAnswer(results: string[] | undefined) {
    if (!results) return
    const isAnswerCorrect = compareWithResult(results)

    isCorrect.value = isAnswerCorrect
    isChecked.value = true
  }

  function compareWithResult(results: string[]) {
    return results.includes(answerValue.value.trim().toLowerCase())
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

  return {
    answerValue,
    isCorrect,
    isChecked,
   variant,
    checkAnswer,
    handleCorrect,
    handleIncorrect,
  }
}

export type UseAnswerReturn = ReturnType<typeof useAnswer>
