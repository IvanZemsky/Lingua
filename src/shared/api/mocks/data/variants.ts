import type { components } from "../../schema/generated"

export const MOCK_VARIANTS: components["schemas"]["Variant"][] = [
  {
    id: "section-1-unit-1-lesson-1variant-1",
    number: 1,
    sectionNumber: 1,
    unitNumber: 1,
    lessonNumber: 1,
    tasks: [
      {
        number: 1,
        type: "translate-all",
        text: [
          {
            id: "1",
            text: "Salve",
            translations: ["Hello"],
          },
          {
            id: "2",
            text: ",",
            translations: [],
          },
          {
            id: "3",
            text: "Mundum",
            translations: ["World"],
          },
        ],
        translations: ["Hello World"],
      },
      {
        number: 2,
        type: "listen-and-write-all",
        text: [
          {
            id: "1",
            text: "Marcus",
            translations: ["Marcus, Mark"],
          },
          {
            id: "2",
            text: "vir",
            translations: ["man"],
          },
          {
            id: "3",
            text: "Romanus",
            translations: ["Roman"],
          },
          {
            id: "4",
            text: "est",
            translations: ["is"],
          },
        ],
        translations: ["Marcus is a Roman man", "Mark is a Roman man"],
      },
    ],
  },
]
