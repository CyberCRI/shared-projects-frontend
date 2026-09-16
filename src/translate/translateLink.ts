import { AttachmentLinkModel, Language, TranslatedAttachmentLink } from '../models'
import { translateEntity } from './utils'

export const translateLink = (
  data: AttachmentLinkModel,
  locale: Language | null
): TranslatedAttachmentLink => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedAttachmentLink>(data, ['title', 'description'], locale)
}
