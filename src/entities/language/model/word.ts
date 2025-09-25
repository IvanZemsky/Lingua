import type { APISchemas } from "@/shared/api"

export type Word = APISchemas["Word"]

/**
 * @description Parse words that have no translation.
 * If word has no translation, it will be merged with the previous word and must be perceived as a punctuation mark
 * @returns Word[]
 */
export function parsePunctuation(words: Word[]): Word[] {
  return words
    .map((word, i, array) => {
      if (word.translations.length === 0) return

      const nextItem = array[i + 1]
      if (!nextItem) {
        return word
      }

      const isNotWord = nextItem.translations.length === 0
      if (isNotWord) {
        return {
          ...word,
          text: word.text + nextItem.text,
        }
      }
    })
    .filter((w) => w !== undefined)
}
