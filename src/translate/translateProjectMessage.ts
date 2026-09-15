import { Language, ProjectMessageModel, TranslatedProjectMessage } from '../models'
import { translateEntity, translateMany } from './utils'

export const translateProjectMessage = (
  data: ProjectMessageModel,
  locale: Language | null
): TranslatedProjectMessage => {
  if (!data) {
    return data
  }

  const translated = {
    ...translateEntity<TranslatedProjectMessage>(data, ['content'], locale),
  }
  if (data.replies) {
    translated.replies = translateMany(translateProjectMessage, data.replies, locale)
  }

  return translated
}
