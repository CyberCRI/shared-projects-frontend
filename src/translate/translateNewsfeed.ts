import { Language, NewsfeedModel, TranslatedNewsfeed } from 'shared-projects-frontend/models'
import { translateAnnouncement } from './translateAnnouncement'
import { translateProject } from './translateProject'
import { translateOneNews } from './translateOneNews'

export const translateNewsFeed = (data: NewsfeedModel, locale: Language): TranslatedNewsfeed => {
  if (!data) {
    return data
  }

  const translate = { ...data } as TranslatedNewsfeed
  if (data.project) {
    translate.project = translateProject(data.project, locale)
  }
  if (data.news) {
    translate.news = translateOneNews(data.news, locale)
  }
  if (data.announcement) {
    translate.announcement = translateAnnouncement(data.announcement, locale)
  }

  return translate
}
