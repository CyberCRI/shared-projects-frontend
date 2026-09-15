import {
  Language,
  ProjectMessageModel,
  TranslatedProjectMessage,
} from 'shared-projects-frontend/models'
import { translateEntity, translateMany } from './utils'

export const translateProjectMessage = (
  data: ProjectMessageModel,
  locale: Language
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
