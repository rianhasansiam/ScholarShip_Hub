import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../Components/Banner'
import TopScholarships from '../Components/TopScholarships'
import SuccessStories from '../Components/SuccessStories'
import FeaturedScholarships from '../Components/FeaturedScholarships'

const Home = props => {
  return (
    <>
    <Banner></Banner>
    <TopScholarships></TopScholarships>
    <SuccessStories></SuccessStories>
    <FeaturedScholarships></FeaturedScholarships>
    
    
    </>
  )
}

Home.propTypes = {}

export default Home