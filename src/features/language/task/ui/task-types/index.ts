import type { TaskType } from "@/entities/language"
import type { Component } from "vue"
import TaskListenAndWriteAll from "./task-listen-and-write-all.vue"
import TaskListenAndPlaceInOrder from "./task-listen-and-place-in-order.vue"
import TaskTranslateAll from "./task-translate-all.vue"
import TaskWritePart from "./task-write-part.vue"

export const TASK_TYPES_UI: Record<TaskType, Component> = {
  "listen-and-write-all": TaskListenAndWriteAll,
  "listen-and-place-in-order": TaskListenAndPlaceInOrder,
  "translate-all": TaskTranslateAll,
  "write-part": TaskWritePart,
}

export const TASK_TYPES_TITLES: Record<TaskType, string> = {
  "listen-and-write-all": "Listen and write all",
  "listen-and-place-in-order": "Place in order",
  "translate-all": "Translate all",
  "write-part": "Write part",
}
