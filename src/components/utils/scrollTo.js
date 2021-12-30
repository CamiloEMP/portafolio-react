export const scrollTo = (e) => {
  e.preventDefault()
  const target = e.target.getAttribute('href')
  const location = document.querySelector(target).offsetTop
  window.scrollTo({
    left: 0,
    top: location - 64
  })
}
