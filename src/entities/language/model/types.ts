import type { APISchemas } from "@/shared/api"
import type { Task } from "./task"

export type Section = APISchemas["Section"]

export type Unit = APISchemas["Unit"]

export type UnitWithProgress = Omit<Unit, "lessons"> & {
  lessons: LessonWithProgress[]
}

export type Lesson = {
  number: number
  totalVariants: number
  currentVariant: number
}

export type LessonStatus = "completed" | "unreached" | "active"

export type LessonWithProgress = Lesson & {
  status: LessonStatus
  currentVariant: number
}

export type Variant = {
  lessonNumber: number
  tasks: Task[]
}

export type Word = {
  id: string
  text: string
  transcription: string[]
}
