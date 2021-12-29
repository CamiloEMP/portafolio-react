import { Header } from './components/Header/Header'
import { About } from './components/About'
import { Works } from './components/Works'

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
        <Works />
      </main>
    </>
  )
}

export default App
