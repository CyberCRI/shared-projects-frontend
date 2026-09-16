import { BlogEntryModel, Language, TranslatedBlogEntry } from '../models'
import { translateEntity } from './utils'

export const translateBlogEntry = (
  data: BlogEntryModel,
  locale: Language | null
): TranslatedBlogEntry => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedBlogEntry>(data, ['title', 'content'], locale)
}
