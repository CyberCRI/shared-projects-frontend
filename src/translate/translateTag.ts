import { Language, TagModel, TranslatedTag } from '../models'
import { translateEntity } from './utils'

export const translateTag = (data: TagModel, locale: Language | null): TranslatedTag => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedTag>(data, ['title', 'description'], locale)
}
