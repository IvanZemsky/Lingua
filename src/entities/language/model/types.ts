import type { APISchemas } from "@/shared/api"
import type { Task } from "./task"

export type Section = APISchemas["Section"]

export type Unit = {
  number: number
  sectionNumber: number
  title: string
  description: string
  lessons: Lesson[]
}

export type Lesson = {
  number: number
  totalVariants: number
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
