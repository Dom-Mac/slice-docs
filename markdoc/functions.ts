export const includes = {
  transform(parameters: Object) {
    const [array, value] = Object.values(parameters)

    return Array.isArray(array) ? array.includes(value) : false
  },
}

export const upper = {
  transform(parameters: string[]) {
    const string = parameters[0]
    return typeof string === 'string' ? string.toUpperCase() : string
  },
}
