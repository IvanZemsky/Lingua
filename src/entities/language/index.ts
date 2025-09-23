import MOCK_COURSE from "./mocks/course.json"

export { MOCK_COURSE }

export type { Section, Unit, Variant, Lesson, Word } from "./model/types"
export type {
  Task,
  TaskType,
  TaskPlaceInOrder,
  TaskListenAndWriteAll,
  TaskTranslateAll,
  TaskTranslatePart,
} from "./model/task"

export {useGetAllSectionsQuery} from "./api/get-all-sections"
