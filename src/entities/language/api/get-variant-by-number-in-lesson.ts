import { type Variant } from "../model/types"
import { useFetchClient } from "@/shared/api"

type GetVariantParams = {
  sectionNumber: number
  unitNumber: number
  lessonNumber: number
  variantNumber: number
}

export function useGetVariantByNumberInLessonQuery({
  sectionNumber,
  unitNumber,
  lessonNumber,
  variantNumber,
}: GetVariantParams) {
  return useFetchClient<Variant>(
    `/sections/${sectionNumber}/units/${unitNumber}/lessons/${lessonNumber}/variants/${variantNumber}`,
  ).json<Variant>()
}
