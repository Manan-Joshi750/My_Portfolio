import React, { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
