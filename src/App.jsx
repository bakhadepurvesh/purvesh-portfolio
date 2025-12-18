
import './App.css'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Skills } from './components/Skills'

function App() {
  return (
    <>
    <Navbar />
    
    <div className="container">
         <Home />
         < Skills />
    </div>
    </>
  )
}
export default App
