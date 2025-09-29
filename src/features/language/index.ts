import SectionCard from "./section-card/section-card.vue"
import AnswerMsg from "./task/ui/answer-msg.vue"
import TaskLayout from "./task/ui/task-layout.vue"
import VariantHeader from "./task/ui/variant-header.vue"
import UnitsList from "./units-list/ui/units-list.vue"
import TaskBtn from "./task/ui/task-btn.vue"
import LessonEndScreen from "./result/lesson-end-screen.vue"

export {
  SectionCard,
  UnitsList,
  VariantHeader,
  TaskLayout,
  AnswerMsg,
  TaskBtn,
  LessonEndScreen,
}

export { TASK_TYPES_UI } from "./task/model"

export { useScrollToUnit } from "./units-list/model/use-scroll-to-unit"
export { useSpeechStore } from "./model/speech-store"
export { useCourseProgressStore } from "./model/progress-store"

export { useAnswer } from "./task/model/use-answer"
export { useTask } from "./task/model/use-task"
export { useResult } from "./result/use-result"
export { default as ResetProgressBtn } from "./units-list/ui/reset-progress-btn.vue"
