import { useSpeechSynthesis } from "@vueuse/core"
import { defineStore } from "pinia"
import { ref, computed, shallowRef } from "vue"

export const useSpeechStore = defineStore("speech", () => {
  const text = ref<string>("")
  const rate = shallowRef(1)

  const synth = useSpeechSynthesis(text, {
    lang: "es-AR",
    rate,
  })

  const isPlaying = computed(() => synth.isPlaying.value)
  const status = computed(() => synth.status.value)
  const error = computed(() => synth.error.value)

  function speak(newText?: string, options: { rate: number } = { rate: 1 }) {
    synth.stop()
    rate.value = options.rate

    if (newText) text.value = newText
    synth.speak()
  }

  function stop() {
    synth.stop()
  }

  return {
    text,
    isPlaying,
    status,
    error,
    speak,
    stop,
  }
})
