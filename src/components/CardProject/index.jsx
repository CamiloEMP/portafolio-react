import './CardProject.css'

export const CardProject = ({ img, alt, title, technolgys, dictionary }) => {
  const existImg = img || ''

  const filterIcon = Object.keys(technolgys)
    .filter(key => dictionary.includes(key))
    .reduce((obj, key) => {
      obj[key] = technolgys[key]
      return obj
    }, {})
  const arrayIcons = Object.values(filterIcon)

  return (
    <section className='card-container'>
      <h3>{title}</h3>
      <div>
        <img src={existImg} alt={alt} />
      </div>
      <footer className='card-icons-footer'>
        {arrayIcons.map(item => item)}
      </footer>
    </section>
  )
}
