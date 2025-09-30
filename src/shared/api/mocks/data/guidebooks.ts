import type { components } from "../../schema/generated"

export const MOCK_GUIDEBOOKS: components["schemas"]["Guidebook"][] = [
  {
    id: "guidebook-1",
    sectionNumber: 1,
    unitNumber: 1,
    title: 'Guidebook for unit "Use basic phrases"',
    content: [
      {
        id: "guidebook-1-content-1",
        type: "paragraph",
        text: 'Make your first steps in Spanish with this unit, where you\'ll learn basic phrases like "hello", "goodbye", "thank you", etc.',
      },
    ],
  },
]
