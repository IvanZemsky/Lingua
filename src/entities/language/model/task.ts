import type { Word } from "./types"

export type Task =
  | TaskListenAndWriteAll
  | TaskTranslateAll
  | TaskTranslatePart
  | TaskTranslateAll

export type TaskBase = {
  number: number
  type: TaskType
}

export type TaskListenAndWriteAll = TaskBase & {
  type: "listen-and-write-all"
  text: Word[]
  translations: string[]
}

export type TaskTranslateAll = TaskBase & {
  type: "translate-all"
  text: Word[]
  translations: string[]
}

export type TaskTranslatePart = TaskBase & {
  type: "translate-part"
  text: Word[]
  translations: string[]
}

export type TaskPlaceInOrder = TaskBase & {
  type: "place-in-order"
  text: Word[]
  words: string[]
}

export type TaskType =
  | "listen-and-write-all"
  | "translate-all"
  | "translate-part"
  | "place-in-order"
