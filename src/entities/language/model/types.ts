import type { APISchemas } from "@/shared/api"

export type Section = APISchemas["Section"]

export type Unit = APISchemas["Unit"]

export type UnitWithProgress = Omit<Unit, "lessons"> & {
  lessons: LessonWithProgress[]
}

export type Lesson = APISchemas["Lesson"]

export type LessonStatus = "completed" | "unreached" | "active"

export type LessonWithProgress = Lesson & {
  status: LessonStatus
  currentVariant: number
}

export type Variant = APISchemas["Variant"]

export type Word = {
  id: string
  text: string
  transcription: string[]
}
