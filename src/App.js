import './App.css'
import Nav from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Tours from './components/Tours'


function App() {
   return (
      <body style={{scrollBehavior:'smooth'}}>
         <Nav  />
         <Hero />
         <About />
         <Services />
         <Tours />
         <Footer />
      </body>
   )
}

export default App
