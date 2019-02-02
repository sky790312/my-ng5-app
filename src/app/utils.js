export const chunk = (array, chunkNumber) =>
  [].concat.apply(
    [],
    array.map((elem, i) => i % chunkNumber ? [] : [array.slice(i, i + chunkNumber)])
  )