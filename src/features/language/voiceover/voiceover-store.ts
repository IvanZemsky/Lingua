import { useSpeechSynthesis } from "@vueuse/core"
import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useSpeechStore = defineStore("speech", () => {
  const text = ref<string>("")

  const synth = useSpeechSynthesis(text, { lang: "es-AR" })

  const isPlaying = computed(() => synth.isPlaying.value)
  const status = computed(() => synth.status.value)
  const error = computed(() => synth.error.value)

  function speak(newText?: string) {
    synth.stop()
    if (newText) text.value = newText
    synth.speak()
  }

  function stop() {
    synth.stop()
  }

  function toggle(force?: boolean) {
    synth.toggle(force)
  }

  return {
    text,
    isPlaying,
    status,
    error,
    speak,
    stop,
    toggle,
  }
})
