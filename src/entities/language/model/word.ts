import type { APISchemas } from "@/shared/api"

export type Word = WordBase | WordInput | WordImg

export type WordBase = APISchemas["Word"]

export type WordInput = APISchemas["WordInput"]

export type WordImg = APISchemas["WordImg"]

export type TextWord = WordBase | WordInput

/**
 * @description Parse words that have no translation.
 * If word has no translation, it will be merged with the previous word and must be perceived as a punctuation mark
 * @returns TextWord[]
 */
export function parsePunctuation(words: TextWord[]): TextWord[] {
  return words
    .map((word, i, array) => {
      if (word.translations.length === 0) return

      const nextItem = array[i + 1]
      if (nextItem && nextItem.translations.length === 0) {
        return {
          ...word,
          text: word.text + nextItem.text,
        }
      }

      return word
    })
    .filter((w) => w !== undefined)
}

export function getWordsAsText(words: Word[]): string {
  return words.map((word) => word.text).join(" ")
}

export function isWordInput(word: Word): word is WordInput {
  return word.hasOwnProperty("input")
}
