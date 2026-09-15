import { Language, NewsfeedModel, TranslatedNewsfeed } from '../models'
import { translateAnnouncement } from './translateAnnouncement'
import { translateProject } from './translateProject'
import { translateOneNews } from './translateOneNews'

export const translateNewsFeed = (
  datas: NewsfeedModel[],
  locale: Language | null
): TranslatedNewsfeed[] => {
  if (!datas) {
    return datas
  }

  return datas.map((data) => {
    const translate = { ...data } as TranslatedNewsfeed
    if (data.project !== undefined) {
      translate.project = translateProject(data.project, locale)
    }
    if (data.news) {
      translate.news = translateOneNews(data.news, locale)
    }
    if (data.announcement) {
      translate.announcement = translateAnnouncement(data.announcement, locale)
    }
    return translate
  })
}
