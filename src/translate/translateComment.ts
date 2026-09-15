import { CommentModel, Language, TranslatedComment } from 'shared-projects-frontend/models'
import { translateEntity, translateMany } from './utils'

export const translateComment = (data: CommentModel, locale: Language): TranslatedComment => {
  if (!data) {
    return data
  }

  const translate = translateEntity<TranslatedComment>(data, ['content'], locale)

  if (data.replies) {
    translate.replies = translateMany(translateComment, data.replies, locale)
  }

  return translate
}
