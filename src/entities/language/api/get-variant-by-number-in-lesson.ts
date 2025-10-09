import type { UseFetchOptions, AfterFetchContext } from "@vueuse/core"
import { type Variant } from "../model/types"
import { useFetchClient } from "@/shared/api"

type GetVariantParams = {
  sectionNumber: number
  unitNumber: number
  lessonNumber: number
  variantNumber: number
}

export function useGetVariantByNumberInLessonQuery<T = Variant, U = Variant>(
  { sectionNumber, unitNumber, lessonNumber, variantNumber }: GetVariantParams,
  options: QueryOptions<T, U> = {},
) {
  return useFetchClient<Variant>(
    `/sections/${sectionNumber}/units/${unitNumber}/lessons/${lessonNumber}/variants/${variantNumber}`,
    options,
  ).json<Variant>()
}

type QueryOptions<T, U> = Omit<UseFetchOptions, "afterFetch"> & {
  afterFetch?: AfterFetch<T, U>
}

type AfterFetch<T, U> = (
  ctx: AfterFetchContext<T>,
) => Partial<AfterFetchContext<U>> | Promise<Partial<AfterFetchContext<U>>>
