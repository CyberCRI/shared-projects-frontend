import { Language, LinkedProject, TranslatedLinkedProject } from 'shared-projects-frontend/models'
import { translateProject } from './translateProject'

export const translatedProjectLinked = (
  data: LinkedProject,
  locale: Language
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
