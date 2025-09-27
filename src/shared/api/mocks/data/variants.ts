import type { components } from "../../schema/generated"

export const MOCK_VARIANTS: components["schemas"]["Variant"][] = [
  {
    id: "section-1-unit-1-lesson-1-variant-1",
    number: 1,
    sectionNumber: 1,
    unitNumber: 1,
    lessonNumber: 1,
    tasks: [
      {
        number: 1,
        type: "translate-all",
        results: ["hello world"],
        text: [
          {
            id: "1",
            text: "Hola",
            translations: ["Hello"],
          },
          {
            id: "2",
            text: ",",
            translations: [],
          },
          {
            id: "3",
            text: "Mundo",
            translations: ["World"],
          },
          {
            id: "4",
            text: "!",
            translations: [],
          },
        ],
        translation: "hello world",
      },
      {
        number: 2,
        type: "listen-and-write-all",
        results: ["juan es espanol"],
        text: [
          {
            id: "1",
            text: "Juan",
            translations: ["Juan"],
          },
          {
            id: "2",
            text: "es",
            translations: ["is"],
          },
          {
            id: "3",
            text: "Español",
            translations: ["Spanish"],
          },
        ],
        translation: "Juan is Spanish",
      },
      {
        number: 3,
        type: "write-part",
        results: ["juan es de espana"],
        text: [
          {
            id: "1",
            text: "Juan",
            translations: ["Juan"],
          },
          {
            id: "2",
            text: "es",
            input: true,
            translations: ["is"],
          },
          {
            id: "3",
            text: "de",
            translations: ["from"],
          },
          {
            id: "4",
            text: "Espana",
            input: true,
            translations: ["Spain"],
          },
          {
            id: "5",
            text: ".",
            translations: [],
          },
        ],
        translation: "Juan is from Spain",
      },
      {
        number: 4,
        type: "listen-and-place-in-order",
        results: ["juan es de espana"],
        text: [
          {
            id: "1",
            text: "Juan",
            translations: ["Juan"],
          },
          {
            id: "2",
            text: "es",
            translations: ["is"],
          },
          {
            id: "3",
            text: "de",
            translations: ["from"],
          },
          {
            id: "4",
            text: "Espana",
            translations: ["Spain"],
          },
        ],
        translation: "Juan is from Spain",
      },
    ],
  },
]
