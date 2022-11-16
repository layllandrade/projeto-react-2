import './App.css'
import { Header } from './components/Header'
import { Bio } from './components/Bio'
import { Search } from './components/Search'
import { Repositorios } from './components/Repositorios'
import { Footer } from './components/Footer'


function App() {
  return(
    <div className="App">
      <Header content="Meu github search" />
      <Bio />
      <Search />
      <Repositorios />
      <Footer content="Feito com ♡ por Laylla. E todos os direitos são reservados." />
    </div>
  )
}

export default App
