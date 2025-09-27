<script setup lang="ts">
import VoiceoverBtn from "../voiceover/voiceover-btn.vue"
import SlowVoiceoverBtn from "../voiceover/slow-voiceover-btn.vue"
import { useSpeechStore } from "@/features/language/model/speech-store"

const { text } = defineProps<{
  text: string
}>()

const store = useSpeechStore()

const slowText = text.split(" ").join("... ")
</script>

<template>
  <div class="flex items-center gap-4">
    <VoiceoverBtn
      :is-playing="store.isPlaying"
      @play-audio="store.speak(text)"
    />
    <SlowVoiceoverBtn @play-audio="store.speak(slowText, { rate: 0.6 })" />
  </div>
</template>
