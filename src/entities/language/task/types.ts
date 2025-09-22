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
  text: string
  translations: string[]
}

export type TaskTranslateAll = TaskBase & {
  type: "translate-all"
  text: string
  translations: string[]
}

export type TaskTranslatePart = TaskBase & {
  type: "translate-part"
  text: (string | { text: string; translation: string })[]
  translations: string[]
}

export type TaskPlaceInOrder = TaskBase & {
  type: "place-in-order"
  text: string
  words: string[]
}

export type TaskType =
  | "listen-and-write-all"
  | "translate-all"
  | "translate-part"
  | "place-in-order"
