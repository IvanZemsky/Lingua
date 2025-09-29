import { nextTick, onBeforeUnmount, onMounted, ref } from "vue"
import { type CourseProgressLS } from "../../model/progress-store"

export function useScrollToLesson(currentLesson: CourseProgressLS["lesson"]) {
  const buttonRef = ref<HTMLButtonElement | null>(null)
  const arrowDirection = ref<"up" | "down">("down")

  function updateArrowDirection() {
    const selector = getSelector(currentLesson.unit, currentLesson.number)
    const lessonBtn = document.querySelector<HTMLElement>(selector)
    if (!lessonBtn || !buttonRef.value) return

    const elRect = lessonBtn.getBoundingClientRect()
    const btnRect = buttonRef.value.getBoundingClientRect()

    arrowDirection.value = elRect.top > btnRect.top ? "down" : "up"
  }

  function scrollToLesson(behavior: ScrollBehavior = "smooth") {
    const selector = getSelector(currentLesson.unit, currentLesson.number)
    const lessonBtn = document.querySelector<HTMLElement>(selector)
    if (!lessonBtn) return

    lessonBtn.scrollIntoView({ behavior, block: "center" })
  }

  onMounted(() => {
    window.addEventListener("scroll", updateArrowDirection, { passive: true })

    nextTick(() => {
      updateArrowDirection()
      scrollToLesson("instant")
    })
  })

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", updateArrowDirection)
  })

  return {
    buttonRef,
    scrollToLesson,
    arrowDirection,
  }
}

function getSelector(unit: number, lesson: number) {
  return `[data-unit="${unit}"] [data-lesson="${lesson}"]`
}
