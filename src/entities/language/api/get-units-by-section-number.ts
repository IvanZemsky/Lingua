import { type Unit } from "../model/types"
import { useFetchClient } from "@/shared/api"

export function useGetUnitsBySectionNumberQuery(sectionNumber: number) {
  return useFetchClient(`/sections/${sectionNumber}/units`).json<Unit[]>()
}
