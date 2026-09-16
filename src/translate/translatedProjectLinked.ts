import { Language, LinkedProject, TranslatedLinkedProject } from '../models'
import { translateProject } from './translateProject'

export const translatedProjectLinked = (
  data: LinkedProject,
  locale: Language | null
): TranslatedLinkedProject => {
  if (!data) {
    return data
  }

  const translated = { ...data } as TranslatedLinkedProject
  if (data.project) {
    translated.project = translateProject(data.project, locale)
  }
  if (data.target) {
    translated.project = translateProject(data.target, locale)
  }

  return translated
}
