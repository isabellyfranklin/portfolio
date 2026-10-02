import './App.css'
import { Hero } from './components/Hero/Hero'
import { Nav } from './components/Nav/Nav'
import {About} from './components/About/About'
import { Certificates } from './components/Certificates/Certificates'
import { Projects } from './components/Project/Project'
import { Contact } from './components/Contact/Contact'


function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <About/>
      <Certificates/>  
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
