export type FilterTypes = {
  result: ResultFilterType | null
  loading: boolean
  error: string
}

export type ResultFilterType = {
  schema: {
    attributes: {
      origin: {
        enum: any
      }
    }
  }
}
