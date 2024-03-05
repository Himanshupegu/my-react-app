import Header from './components/Header'
import Footer from './components/Footer'
import Food from './components/Food'

//! Introduction to React Components
// React is all about reusing components a component is a small section of code that can include JavaScript and HTML your function will return that code and make it reusable

function App() {
  return (
    <>
      <Header />
      <Food />
      <Footer />
    </>
  )
}

export default App
