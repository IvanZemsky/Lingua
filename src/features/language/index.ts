import SectionCard from "./section-card/section-card.vue"
import AnswerMsg from "./task/ui/answer-msg/answer-msg.vue"
import TaskLayout from "./task/ui/task-layout.vue"
import VariantHeader from "./task/ui/variant-header.vue"
import UnitsList from "./units-list/ui/units-list.vue"
import TaskBtn from "./task/ui/task-btn.vue"
import LessonEndScreen from "./result/lesson-end-screen.vue"
import LessonAnswerMsg from "./task/ui/answer-msg/lesson-answer-msg.vue"

export {
  SectionCard,
  UnitsList,
  VariantHeader,
  TaskLayout,
  AnswerMsg,
  TaskBtn,
  LessonEndScreen,
  LessonAnswerMsg,
}

export { TASK_TYPES_UI } from "./task/model"

export { useScrollToLesson } from "./units-list/model/use-scroll-to-lesson"
export { useSpeechStore } from "./model/speech-store"
export { useCourseProgressStore } from "./model/progress/store"

export { default as ResetProgressBtn } from "./units-list/ui/reset-progress-btn.vue"
export { default as ScrollToLessonBtn } from "./units-list/ui/scroll-to-lesson-btn.vue"

export { convertUnitToUnitWithProgress } from "./model/progress/unit"

export {useVariantStore} from "./model/variant-store/variant-store"
