import { Language } from '../models'

export const getTranslatableField = <
  DataT extends Record<string, any>,
  Field extends keyof DataT = keyof DataT,
>(
  entity: DataT,
  field: Field,
  locale: Language | null
): string => {
  const isNotTranslated = !entity[`${field.toString()}_detected_language`]
  const isDetectectedLanguage = locale == entity[`${field.toString()}_detected_language`]

  if (locale === null || isDetectectedLanguage || isNotTranslated) {
    return entity[field.toString()] || ''
  } else {
    return entity[`${field.toString()}_${locale}`] || entity[field.toString()] || ''
  }
}

export const getTranslatableFields = <
  DataT extends Record<string, any>,
  Field extends keyof DataT = keyof DataT,
>(
  entity: DataT,
  fields: Field[],
  locale: Language | null
): Record<Field, string> => {
  // @ts-ignore
  const res: Record<Field, string> = {}

  for (const field of fields) {
    res[field] = getTranslatableField(entity, field, locale)
  }
  return res
}

export const translateEntity = <
  ResultT extends { $t: Record<string, any>; [key: string]: any },
  Fields extends keyof ResultT['$t'] = keyof ResultT['$t'],
  DataT = any,
>(
  entity: DataT,
  fields: Fields[],
  locale: Language | null
): DataT | (DataT & ResultT) => {
  if (!entity) {
    return entity
  }
  return {
    ...entity,
    $t: getTranslatableFields(entity, fields, locale),
  }
}

export const translateMany = <Result, Data>(
  func: (data: Data, locale: Language | null) => Result,
  datas: Data[],
  locale: Language | null
) => {
  return datas.map((data) => func(data, locale))
}
