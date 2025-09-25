import type { TaskType } from "@/entities/language"
import type { Component } from "vue"
import TaskListenAndWriteAll from "./task-listen-and-write-all.vue"
import TaskPlaceInOrder from "./task-place-in-order.vue"
import TaskTranslateAll from "./task-translate-all.vue"
import TaskTranslatePart from "./task-translate-part.vue"

export const TASK_TYPES_UI: Record<TaskType, Component> = {
  "listen-and-write-all": TaskListenAndWriteAll,
  "place-in-order": TaskPlaceInOrder,
  "translate-all": TaskTranslateAll,
  "translate-part": TaskTranslatePart,
}

export const TASK_TYPES_TITLES: Record<TaskType, string> = {
  "listen-and-write-all": "Listen and write all",
  "place-in-order": "Place in order",
  "translate-all": "Translate all",
  "translate-part": "Translate part",
}
