import { defineStore } from "pinia"
import { reactive, shallowRef } from "vue"
import { useTask } from "./use-task"
import { useResult } from "./use-result"
import { useAnswer } from "./use-answer"
import type { Variant } from "@/entities/language"

export const useVariantStore = defineStore("variant", () => {
  const data = shallowRef<Variant | null>(null)

  const answer = reactive(useAnswer())
  const result = reactive(useResult())
  const task = reactive(useTask(data, answer, result))

  function setData(newData: Variant) {
    data.value = newData
  }

  function reset() {
    data.value = null
  }

  return { data, setData, reset, answer, result, task }
})
