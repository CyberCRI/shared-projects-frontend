import { AttachmentFileModel, Language, TranslatedAttachmentFile } from '../models'
import { translateEntity } from './utils'

export const translateFile = (
  data: AttachmentFileModel,
  locale: Language | null
): TranslatedAttachmentFile => {
  if (!data) {
    return data
  }

  return translateEntity<TranslatedAttachmentFile>(data, ['title', 'description'], locale)
}
