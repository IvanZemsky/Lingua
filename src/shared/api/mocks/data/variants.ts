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
        type: "select-word-by-image",
        result: "mundo",
        wordToGuess: {
          id: "1",
          text: "mundo",
          translations: ["world"],
        },
        words: [
          {
            id: "1",
            text: "mundo",
            img: "https://placehold.co/400x400?text=World",
          },
          {
            id: "2",
            text: "árbol",
            img: "https://placehold.co/400x400?text=Tree",
          },
          {
            id: "3",
            text: "gato",
            img: "https://placehold.co/400x400?text=Cat",
          },
          {
            id: "4",
            text: "perro",
            img: "https://placehold.co/400x400?text=Dog",
          },
        ],
      },
      {
        number: 2,
        type: "translate-all",
        result: ["hello"],
        text: [
          {
            id: "1",
            text: "Hola",
            translations: ["Hello"],
          },
          {
            id: "2",
            text: "!",
            translations: [],
          },
        ],
        translation: "Hello",
      },
      {
        number: 3,
        type: "listen-and-write-all",
        result: ["buenos dias", "buenos días"],
        text: [
          {
            id: "1",
            text: "Buenos",
            translations: ["Good"],
          },
          {
            id: "2",
            text: "días",
            translations: ["morning"],
          },
        ],
        translation: "Good morning",
      },
      {
        number: 4,
        type: "write-part",
        result: ["me llamo juan"],
        text: [
          {
            id: "1",
            text: "Me",
            translations: ["I"],
          },
          {
            id: "2",
            text: "llamo",
            input: true,
            translations: ["am called"],
          },
          {
            id: "3",
            text: "Juan",
            translations: ["Juan"],
          },
        ],
        translation: "My name is Juan",
      },
      {
        number: 5,
        type: "listen-and-place-in-order",
        result: ["cómo estás", "como estas"],
        text: [
          {
            id: "1",
            text: "Cómo",
            translations: ["How"],
          },
          {
            id: "2",
            text: "estás",
            translations: ["are you"],
          },
        ],
        translation: "How are you?",
      },
    ],
  },
  {
    id: "section-1-unit-1-lesson-1-variant-2",
    number: 2,
    sectionNumber: 1,
    unitNumber: 1,
    lessonNumber: 1,
    tasks: [
      {
        number: 1,
        type: "select-word-by-image",
        result: "gato",
        wordToGuess: {
          id: "1",
          text: "gato",
          translations: ["cat"],
        },
        words: [
          {
            id: "1",
            text: "gato",
            img: "https://placehold.co/400x400?text=Cat",
          },
          {
            id: "2",
            text: "perro",
            img: "https://placehold.co/400x400?text=Dog",
          },
          {
            id: "3",
            text: "árbol",
            img: "https://placehold.co/400x400?text=Tree",
          },
          {
            id: "4",
            text: "casa",
            img: "https://placehold.co/400x400?text=House",
          },
        ],
      },
      {
        number: 2,
        type: "translate-all",
        result: ["good night"],
        text: [
          {
            id: "1",
            text: "Buenas",
            translations: ["Good"],
          },
          {
            id: "2",
            text: "noches",
            translations: ["night"],
          },
        ],
        translation: "Good night",
      },
      {
        number: 3,
        type: "listen-and-write-all",
        result: ["gracias"],
        text: [
          {
            id: "1",
            text: "Gracias",
            translations: ["Thank you"],
          },
        ],
        translation: "Thank you",
      },
      {
        number: 4,
        type: "write-part",
        result: ["buenas tardes"],
        text: [
          {
            id: "1",
            text: "Buenas",
            input: true,
            translations: ["Good"],
          },
          {
            id: "2",
            text: "tardes",
            translations: ["afternoon"],
          },
        ],
        translation: "Good afternoon",
      },
      {
        number: 5,
        type: "listen-and-place-in-order",
        result: ["hasta luego"],
        text: [
          {
            id: "1",
            text: "Hasta",
            translations: ["See you"],
          },
          {
            id: "2",
            text: "luego",
            translations: ["later"],
          },
        ],
        translation: "See you later",
      },
      {
        number: 6,
        type: "listen-and-place-in-order",
        result: ["buenos dias", "buenos días"],
        text: [
          {
            id: "1",
            text: "Buenos",
            translations: ["Good"],
          },
          {
            id: "2",
            text: "días",
            translations: ["morning"],
          },
        ],
        translation: "Good morning",
      },
    ],
  },
  {
    id: "section-1-unit-1-lesson-1-variant-3",
    number: 3,
    sectionNumber: 1,
    unitNumber: 1,
    lessonNumber: 1,
    tasks: [
      {
        number: 1,
        type: "select-word-by-image",
        result: "perro",
        wordToGuess: {
          id: "1",
          text: "perro",
          translations: ["dog"],
        },
        words: [
          {
            id: "1",
            text: "perro",
            img: "https://placehold.co/400x400?text=Dog",
          },
          {
            id: "2",
            text: "gato",
            img: "https://placehold.co/400x400?text=Cat",
          },
          {
            id: "3",
            text: "árbol",
            img: "https://placehold.co/400x400?text=Tree",
          },
          {
            id: "4",
            text: "casa",
            img: "https://placehold.co/400x400?text=House",
          },
        ],
      },
      {
        number: 2,
        type: "write-part",
        result: ["como te llamas", "cómo te llamas"],
        text: [
          {
            id: "1",
            text: "¿Cómo",
            input: true,
            translations: ["What"],
          },
          {
            id: "2",
            text: "te",
            translations: ["yourself"],
          },
          {
            id: "3",
            text: "llamas",
            translations: ["is your name"],
          },
        ],
        translation: "What is your name?",
      },
      {
        number: 3,
        type: "listen-and-write-all",
        result: ["muy bien"],
        text: [
          {
            id: "1",
            text: "Muy",
            translations: ["Very"],
          },
          {
            id: "2",
            text: "bien",
            translations: ["well"],
          },
        ],
        translation: "Very well",
      },
      {
        number: 4,
        type: "listen-and-place-in-order",
        result: ["estoy bien"],
        text: [
          {
            id: "1",
            text: "Estoy",
            translations: ["I am"],
          },
          {
            id: "2",
            text: "bien",
            translations: ["fine"],
          },
        ],
        translation: "I am fine",
      },
      {
        number: 5,
        type: "write-part",
        result: ["de nada"],
        text: [
          {
            id: "1",
            text: "De",
            translations: ["Of"],
          },
          {
            id: "2",
            text: "nada",
            input: true,
            translations: ["nothing"],
          },
        ],
        translation: "You're welcome",
      },
      {
        number: 6,
        type: "match-words",
        result: "hello-hola goodbye-adiós thank+you-gracias please-por+favor",
        words: [
          {
            id: "1",
            text: "hola",
            translations: ["hello"],
          },
          {
            id: "2",
            text: "adiós",
            translations: ["goodbye"],
          },
          {
            id: "3",
            text: "gracias",
            translations: ["thank+you"],
          },
          {
            id: "4",
            text: "por+favor",
            translations: ["please"],
          },
        ],
      },
    ],
  },
]
