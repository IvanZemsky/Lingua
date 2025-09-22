import type { Task } from "../task/types"

export type Section = {
  number: number
  progress: number
  title: string
}

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
