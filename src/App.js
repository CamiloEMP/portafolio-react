import { Header } from './components/Header/Header'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App () {
  const MainStyle = {
    position: 'absolute',
    top: 75,
    width: '100%'
  }
  return (
    <>
      <Header />
      <main style={MainStyle}>
        <About />
        <Projects />
        <Skills />
      </main>
    </>
  )
}

export default App
