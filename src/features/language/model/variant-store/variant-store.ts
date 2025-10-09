import { defineStore } from "pinia"
import { reactive, } from "vue"
import { useTask } from "./use-task"
import { useResult } from "./use-result"
import { useAnswer } from "./use-answer"
import type { Variant } from "@/entities/language"
import { ref } from "vue"

export const useVariantStore = defineStore("variant", () => {
  const data = ref<Variant | null>(null)

  const answer = reactive(useAnswer())
  const result = reactive(useResult())
  const task = reactive(useTask(data, answer, result))

  function setData(newData: Variant) {
    data.value = newData
  }

  function reset() {
    data.value = null
    task.reset()
    answer.reset()
    result.reset()
  }

  return { data, setData, reset, answer, result, task }
})
