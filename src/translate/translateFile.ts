import {
  AttachmentFileModel,
  Language,
  TranslatedAttachmentFile,
} from 'shared-projects-frontend/models'
import { translateEntity } from './utils'

export const translateFile = (
  data: AttachmentFileModel,
  locale: Language
): TranslatedAttachmentFile => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedAttachmentFile>(data, ['title', 'description'], locale)
}
