import {
  AttachmentLinkModel,
  Language,
  TranslatedAttachmentLink,
} from 'shared-projects-frontend/models'
import { translateEntity } from './utils'

export const translateLink = (
  data: AttachmentLinkModel,
  locale: Language
): TranslatedAttachmentLink => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedAttachmentLink>(data, ['title', 'description'], locale)
}
