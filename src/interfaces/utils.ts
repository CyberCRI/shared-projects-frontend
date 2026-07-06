// change field to optional
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
