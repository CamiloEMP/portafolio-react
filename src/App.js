import { Header } from './components/Header/Header'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { MessageContact } from './components/MessageContact'
import { useState } from 'react'
function App () {
  const [infoMessage, setInfoMessage] = useState({ success: false, error: false })

  const MainStyle = {
    position: 'absolute',
    top: 75,
    width: '100%'
  }
  return (
    <>
      <Header />
      <MessageContact infoMessage={infoMessage} setInfoMessage={setInfoMessage} />
      <main style={MainStyle}>
        <About/>
        <Projects />
        <Skills />
        <Contact infoMessage={infoMessage} setInfoMessage={setInfoMessage} />
        <Footer />
      </main>
    </>
  )
}

export default App
