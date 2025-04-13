import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About'
import Universe from './Components/Universe'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     {/* <About /> */}
     {/* <Universe />
     <Footer /> */}
    </>
  )
}

export default App
