import type { APISchemas } from "@/shared/api"

export type Task = APISchemas["Task"]

export type TaskListenAndWriteAll = APISchemas["TaskListenAndWriteAll"]

export type TaskTranslateAll = APISchemas["TaskTranslateAll"]

export type TaskWritePart = APISchemas["TaskWritePart"]

export type TaskListenAndPlaceInOrder = APISchemas["TaskListenAndPlaceInOrder"]

export type TaskSelectWordByImage = APISchemas["TaskSelectWordByImage"]

export type TaskMatchWords = APISchemas["TaskMatchWords"]

export type TaskType = Task["type"]

export function needToShowTranslation(
  task: Task,
): task is TaskListenAndWriteAll | TaskWritePart {
  return (
    task.type !== "translate-all" &&
    task.type !== "select-word-by-image" &&
    task.type !== "match-words" &&
    task.type !== "write-part"
  )
}
