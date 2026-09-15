import {
  AnnouncementModel,
  Language,
  TranslatedAnnouncement,
} from 'shared-projects-frontend/models'
import { translateProject } from './translateProject'
import { translateEntity } from './utils'

export const translateAnnouncement = (
  data: AnnouncementModel,
  locale: Language
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
