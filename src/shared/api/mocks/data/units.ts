import type { components } from "../../schema/generated";

export const MOCK_UNITS: components["schemas"]["UnitList"] = [
  {
    id: "unit-1",
    number: 1,
    sectionNumber: 1,
    title: "Use basic phrases",
    description: "Description of unit 2",
    lessons: [
      {
        id: "lesson-1-unit-1",
        number: 1,
        totalVariants: 3,
      },
      {
        id: "lesson-2-unit-1",
        number: 2,
        totalVariants: 3,
      },
      {
        id: "lesson-3-unit-1",
        number: 3,
        totalVariants: 2,
      },
      {
        id: "lesson-4-unit-1",
        number: 4,
        totalVariants: 2,
      },
      {
        id: "lesson-5-unit-1",
        number: 6,
        totalVariants: 1,
      },
    ],
  },
  {
    id: "unit-2",
    number: 2,
    sectionNumber: 1,
    title: "Form the plural",
    description: "Description of unit 2",
    lessons: [
      {
        id: "lesson-1-unit-2",
        number: 1,
        totalVariants: 5,
      },
      {
        id: "lesson-2-unit-2",
        number: 2,
        totalVariants: 5,
      },
      {
        id: "lesson-3-unit-2",
        number: 3,
        totalVariants: 3,
      },
      {
        id: "lesson-4-unit-2",
        number: 4,
        totalVariants: 3,
      },
      {
        id: "lesson-5-unit-2",
        number: 5,
        totalVariants: 1,
      },
    ],
  },
  {
    id: "unit-3",
    number: 3,
    sectionNumber: 1,
    title: "First declension",
    description: "Description of unit 3",
    lessons: [
      {
        id: "lesson-1-unit-3",
        number: 1,
        totalVariants: 5,
      },
      {
        id: "lesson-2-unit-3",
        number: 2,
        totalVariants: 5,
      },
      {
        id: "lesson-3-unit-3",
        number: 3,
        totalVariants: 3,
      },
      {
        id: "lesson-4-unit-3",
        number: 4,
        totalVariants: 3,
      },
      {
        id: "lesson-5-unit-3",
        number: 5,
        totalVariants: 1,
      },
    ],
  },
]
