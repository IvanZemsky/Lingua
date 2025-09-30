import type { APISchemas } from "@/shared/api"

export type Guidebook = APISchemas["Guidebook"]

export type GuidebookType = Guidebook["content"][0]["type"]

export type GuidebookContentParagraph = APISchemas["GuidebookContentParagraph"]

export type GuidebookContentImage = APISchemas["GuidebookContentImage"]

export type GuidebookContentTable = APISchemas["GuidebookContentTable"]
