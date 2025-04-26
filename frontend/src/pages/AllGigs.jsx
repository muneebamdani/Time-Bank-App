import React from 'react'
import Header from './components/main-components/Header'
import  BreadCrumbGigs  from './components/gigs-components/BreadCrmbGigs'
import Footer from './components/main-components/Footer'


function AllGigs() {
  return (
    <div>
        <Header />
        <BreadCrumbGigs />
        <Footer/>

    </div>
  )
}

export default AllGigs

