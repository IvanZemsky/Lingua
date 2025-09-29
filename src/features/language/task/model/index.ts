import type { TaskType } from "@/entities/language"
import type { Component } from "vue"
import TaskListenAndWriteAll from "../ui/task-types/task-listen-and-write-all.vue"
import TaskListenAndPlaceInOrder from "../ui/task-types/task-listen-and-place-in-order.vue"
import TaskTranslateAll from "../ui/task-types/task-translate-all.vue"
import TaskMatchWords from "../ui/task-types/task-match-words.vue"
import TaskWritePart from "../ui/task-types/task-write-part.vue"
import TaskSelectWordByImage from "../ui/task-types/task-select-word-by-image.vue"

export const TASK_TYPES_UI: Record<TaskType, Component> = {
  "listen-and-write-all": TaskListenAndWriteAll,
  "listen-and-place-in-order": TaskListenAndPlaceInOrder,
  "translate-all": TaskTranslateAll,
  "write-part": TaskWritePart,
  "select-word-by-image": TaskSelectWordByImage,
  "match-words": TaskMatchWords,
}

export const TASK_TYPES_TITLES: Record<TaskType, string> = {
  "listen-and-write-all": "Listen and write all",
  "listen-and-place-in-order": "Place words in order",
  "translate-all": "Translate text",
  "write-part": "Fill in the gaps in the text",
  "select-word-by-image": "Select word by image",
  "match-words": "Match words and translations",
}
