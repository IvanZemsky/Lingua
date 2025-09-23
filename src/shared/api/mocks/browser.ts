import { setupWorker } from "msw/browser"
import { sectionHandlers } from "./handlers/section"

export const worker = setupWorker(...sectionHandlers)
