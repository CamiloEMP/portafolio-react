import { Header } from './components/Header/Header'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'

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
        <About/>
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App
