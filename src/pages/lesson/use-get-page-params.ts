import { useRoute } from "vue-router"

export function useGetPageParams() {
  const route = useRoute()

  return {
    sectionNumber: parseInt(route.params.sectionNumber as string),
    unitNumber: parseInt(route.params.unitNumber as string),
    lessonNumber: parseInt(route.params.lessonNumber as string),
    variantNumber: parseInt(route.params.variantNumber as string),
  }
}
