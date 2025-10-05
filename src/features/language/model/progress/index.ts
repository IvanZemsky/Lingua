export type CourseProgressLS = {
  section: number
  lesson: {
    unit: number
    number: number
    variant: number
  }
}

export const initialProgress: CourseProgressLS = {
  section: 1,
  lesson: { unit: 1, number: 1, variant: 1 },
}
