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
  {
    id: "guidebook-2",
    sectionNumber: 1,
    unitNumber: 2,
    title: 'Guidebook for unit "Form the plural"',
    content: [
      {
        id: "guidebook-2-content-1",
        type: "paragraph",
        text: "In this unit, you will learn how to form the plural of nouns in Spanish. Most nouns ending in a vowel simply add -s, while nouns ending in a consonant add -es.",
      },
      {
        id: "guidebook-2-content-2",
        type: "table",
        caption: "Plural forms in Spanish",
        headers: ["Singular", "Plural", "Translation"],
        rows: [
          ["libro", "libros", "book → books"],
          ["casa", "casas", "house → houses"],
          ["profesor", "profesores", "teacher → teachers"],
          ["ciudad", "ciudades", "city → cities"],
        ],
      },
    ],
  },
]
