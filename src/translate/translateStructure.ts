import {
  Language,
  Structure,
  StructureRelation,
  StructureResearcher,
  TranslatedStructureRelation,
  TranslatedStucture,
  TranslateStructureResearcher,
} from '../models'
import { translateOrganization } from './translateOrganization'
import { translateResearcher } from './translateResearcher'
import { translateGroup } from './translateGroup'
import { translateEntity, translateMany } from './utils'

export const translateStructure = (
  data: Structure,
  locale: Language | null
): TranslatedStucture => {
  if (!data) {
    return data
  }

  const translated = translateEntity<TranslatedStucture>(data, ['description'], locale)
  if (data.organization) {
    translated.organization = translateOrganization(data.organization, locale)
  }
  if (data.people_group) {
    translated.people_group = translateGroup(data.people_group, locale)
  }
  if (data.related_structures) {
    translated.related_structures = translateMany(
      translateStructure,
      data.related_structures,
      locale
    )
  }
  if (data.researchers) {
    translated.researchers = translateMany(translateResearcher, data.researchers, locale)
  }

  return translated
}

export const translateStructureRelation = (
  data: StructureRelation,
  locale: Language | null
): TranslatedStructureRelation => {
  if (!data) {
    return data
  }

  return {
    ...data,
    structure: translateStructure(data.structure, locale),
    related_structure: translateStructure(data.related_structure, locale),
  }
}

export const translateStructureResearcher = (
  data: StructureResearcher,
  locale: Language | null
): TranslateStructureResearcher => {
  if (!data) {
    return data
  }

  return {
    ...data,
    ...translateResearcher(data, locale),
  }
}
