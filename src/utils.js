export function objectToArray(data) {
  const result = []
  for (const property in data) {
    if (data.hasOwnProperty(property)) {
      const value = data[property]
      result.push({
        id: property,
        ...value
      })
    }
  }
  return result
}