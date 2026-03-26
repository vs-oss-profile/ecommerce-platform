export const getDateTimeString = (s) => {
  const d = new Date(s)

  const time = d.toLocaleString('en-IN', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })

  const date = d.toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return `${date} @${time}`
}

export const getFormattedPrice = (p) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(p)
