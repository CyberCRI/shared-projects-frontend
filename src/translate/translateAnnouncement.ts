import { AnnouncementModel, Language, TranslatedAnnouncement } from '../models'
import { translateProject } from './translateProject'
import { translateEntity } from './utils'

export const translateAnnouncement = (
  data: AnnouncementModel,
  locale: Language | null
): TranslatedAnnouncement => {
  if (!data) {
    return data
  }

  const translated = {
    ...translateEntity<TranslatedAnnouncement>(data, ['description', 'title'], locale),
  }
  if (data.project) {
    translated.project = translateProject(data.project, locale)
  }

  return translated
}
