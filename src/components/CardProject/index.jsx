import './CardProject.css'

export const CardProject = ({ img, alt, title, technolgys, dictionary, url }) => {
  const filterIcon = Object.keys(technolgys)
    .filter(key => dictionary.includes(key))
    .reduce((obj, key) => {
      obj[key] = technolgys[key]
      return obj
    }, {})

  const arrayIcons = Object.values(filterIcon)

  return (
    <section className='card-container'>
      <h3 className='card-title'>{title}</h3>
      <a href={url} target={!url.includes('#') ? '_blank' : null} rel="noreferrer" >
        <img className='card-img' src={img} alt={alt} />
      </a>
      <footer className='card-footer'>
        {arrayIcons.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
      </footer>
    </section>
  )
}
