import type { TaskType } from "@/entities/language"
import type { Component } from "vue"
import TaskListenAndWriteAll from "./task-listen-and-write-all.vue"
import TaskListenAndPlaceInOrder from "./task-listen-and-place-in-order.vue"
import TaskTranslateAll from "./task-translate-all.vue"
import TaskWritePart from "./task-write-part.vue"
import TaskSelectWordByImage from "./task-select-word-by-image.vue"

export const TASK_TYPES_UI: Record<TaskType, Component> = {
  "listen-and-write-all": TaskListenAndWriteAll,
  "listen-and-place-in-order": TaskListenAndPlaceInOrder,
  "translate-all": TaskTranslateAll,
  "write-part": TaskWritePart,
  "select-word-by-image": TaskSelectWordByImage,
}

export const TASK_TYPES_TITLES: Record<TaskType, string> = {
  "listen-and-write-all": "Listen and write all",
  "listen-and-place-in-order": "Place words in order",
  "translate-all": "Translate text",
  "write-part": "Fill in the gaps in the text",
  "select-word-by-image": "Select word by image",
}
