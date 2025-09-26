<script setup lang="ts">
import VoiceoverBtn from "../voiceover/voiceover-btn.vue"
import SlowVoiceoverBtn from "../voiceover/slow-voiceover-btn.vue"
import { useSpeechStore } from "@/features/language/voiceover/store"

const { text } = defineProps<{
  text: string
}>()

const { speak } = useSpeechStore()

const slowText = text.split(" ").join("... ")
</script>

<template>
  <div class="flex items-center gap-4">
    <VoiceoverBtn @play-audio="speak(text)" />
    <SlowVoiceoverBtn @play-audio="speak(slowText, { rate: 0.6 })" />
  </div>
</template>
