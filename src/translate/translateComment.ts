import { CommentModel, Language, TranslatedComment } from '../models'
import { translateEntity, translateMany } from './utils'

export const translateComment = (
  data: CommentModel,
  locale: Language | null
): TranslatedComment => {
  if (!data) {
    return data
  }

  const translate = translateEntity<TranslatedComment>(data, ['content'], locale)

  if (data.replies) {
    translate.replies = translateMany(translateComment, data.replies, locale)
  }

  return translate
}
