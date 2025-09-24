import { type AfterFetchContext, type UseFetchOptions } from "@vueuse/core"
import { type Unit } from "../model/types"
import { useFetchClient } from "@/shared/api"

export function useGetUnitsBySectionNumberQuery<T = Unit, U = Unit>(
  sectionNumber: number,
  options: QueryOptions<T, U> = {},
) {
  return useFetchClient(`/sections/${sectionNumber}/units`, options).json<U[]>()
}

type QueryOptions<T, U> = Omit<UseFetchOptions, "afterFetch"> & {
  afterFetch?: AfterFetch<T, U>
}

type AfterFetch<T, U> = (
  ctx: AfterFetchContext<T[]>,
) => Partial<AfterFetchContext<U[]>> | Promise<Partial<AfterFetchContext<U[]>>>
