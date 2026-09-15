import { BlogEntryModel, Language, TranslatedBlogEntry } from 'shared-projects-frontend/models'
import { translateEntity } from './utils'

export const translateBlogEntry = (data: BlogEntryModel, locale: Language): TranslatedBlogEntry => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedBlogEntry>(data, ['title', 'content'], locale)
}
