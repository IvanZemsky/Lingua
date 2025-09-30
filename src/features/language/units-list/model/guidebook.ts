import type { GuidebookType } from "@/entities/language"
import type { Component } from "vue"
import GuidebookParagraph from "../ui/unit-desc-card/guidebook/guidebook-paragraph.vue"
import GuidebookTable from "../ui/unit-desc-card/guidebook/guidebook-table.vue"
import GuidebookImg from "../ui/unit-desc-card/guidebook/guidebook-img.vue"

export const GUIDEBOOK_CONTENT_UI: Record<GuidebookType, Component> = {
  paragraph: GuidebookParagraph,
  table: GuidebookTable,
  img: GuidebookImg,
}
