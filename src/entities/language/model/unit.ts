import type { APISchemas } from "@/shared/api"
import type { LessonWithProgress } from "./lesson"

export type Unit = APISchemas["Unit"]

export type UnitWithProgress = Omit<Unit, "lessons"> & {
  lessons: LessonWithProgress[]
}

export function findUnitByNumber(units: Unit[], number: number) {
  return units.find((u) => u.number === number)
}
