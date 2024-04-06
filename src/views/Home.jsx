import React from 'react'
import '../styles/Home.css'
import CardList from '../components/CardList'

const Home = () => {
  return (
    <>
    
        <div className='container-home'>
            <div className='banner'></div>
            <div className='container-card'>
              <CardList/>
            </div>
        </div>

    </>
  )
}

export default Home