import React from 'react'
import Header from './components/main-components/Header'
import Banner from './components/main-components/Banner'
import ExploreGigs from './components/main-components/ExploreGigs'
import Popular from './components/main-components/Popular'
import Listings from './components/main-components/Listings'
import FindYourNeeds from './components/main-components/FindYourNeeds'
import Clients from './components/main-components/Clients'
import PopularLists from './components/main-components/PopularLists'
import Testimonials from './components/main-components/TestImonials'
import ExpertSection from './components/main-components/ExpertSection'
import  Questions  from './components/main-components/Questions'
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
        <ExploreGigs />
        <Popular />
        <Listings />
        <FindYourNeeds />
        <Clients />
        <PopularLists />
        <Testimonials />
        <ExpertSection />
        <Questions />
        <Footer/>
        </div>
  )
}

export default Home