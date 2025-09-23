import { useFetch } from "@vueuse/core"
import { type Section } from "../model/types"

export function useGetAllSectionsQuery() {
  return useFetch<Section[]>("/api/sections")
}
