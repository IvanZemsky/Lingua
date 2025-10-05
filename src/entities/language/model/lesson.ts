import type { APISchemas } from "@/shared/api"

export type Lesson = APISchemas["Lesson"]

export type LessonStatus = "completed" | "unreached" | "active"

export type LessonWithProgress = Lesson & {
  status: LessonStatus
  currentVariant: number
}

export function findLessonByNumber(lessons: Lesson[], number: number) {
  return lessons.find((l) => l.number === number)
}
