import React from 'react'
import Header from './components/main-components/Header'
import Banner from './components/main-components/Banner'
import Footer from './components/main-components/Footer'
import Mouse from './extra/Mouse'
import BackToTop from './extra/BackToTop'
// import Functions from './functions/Functions'
function Home() {
  return (
    <div>
      <Mouse/>
      <BackToTop/>
        <Header/>
        <Banner/>
        <Footer/>
        </div>
  )
}

export default Home