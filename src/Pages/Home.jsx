import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Banner from '../Components/Banner'
import TopScholarships from '../Components/TopScholarships'
import SuccessStories from '../Components/SuccessStories'
import FeaturedScholarships from '../Components/FeaturedScholarships'
import Loading from './Loading'
import { contextData } from '../Contex'

const Home = () => {
  const {loading,setLoading}= useContext(contextData)

  setLoading(false)
  
  return (
   <>
   
   {loading? <Loading></Loading>: <>
    <Banner></Banner>
    <TopScholarships></TopScholarships>
    <SuccessStories></SuccessStories>
    <FeaturedScholarships></FeaturedScholarships>
    
    
    </>}
   </>
  )
}

Home.propTypes = {}

export default Home