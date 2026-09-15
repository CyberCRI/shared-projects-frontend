import { Language, TagModel, TranslatedTag } from 'shared-projects-frontend/models'
import { translateEntity } from './utils'

export const translateTag = (data: TagModel, locale: Language): TranslatedTag => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedTag>(data, ['title', 'description'], locale)
}
