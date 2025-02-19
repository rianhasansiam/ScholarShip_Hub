import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Banner from '../Components/Banner'
import TopScholarships from '../Components/TopScholarships'
import SuccessStories from '../Components/SuccessStories'
import FeaturedScholarships from '../Components/FeaturedScholarships'
import Loading from './Loading'
import { contextData } from '../Contex'
import FAQ from '../Components/FAQ'
import NewsLetter from '../Components/NewsLetter'
import SalesPromotion from '../Components/SalesPromotion'

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
    <FAQ></FAQ>
    <NewsLetter></NewsLetter>
    <SalesPromotion></SalesPromotion>
    
    
    </>}
   </>
  )
}

Home.propTypes = {}

export default Home