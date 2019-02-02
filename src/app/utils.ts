export const chunk = (array = [], chunkNumber = 1) =>
  [].concat.apply(
    [],
    array.map((elem, i) => i % chunkNumber ? [] : [array.slice(i, i + chunkNumber)])
  )

export const truncate = (string = '', maxNumber = 50) => {
  return `${string.substring(0, maxNumber)}...`
}

export const formatDate = (date) => {
  const monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct",
    "Nov", "Dec"
  ]

  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  return `${monthNames[monthIndex]} ${day} ${year}`
}