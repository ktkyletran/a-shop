import React from 'react'
import Chart from '../../components/Chart/Chart'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import { userData } from '../../dummyData'
import SmallWidget from '../../components/SmallWidget/SmallWidget'
import LargeWidget from '../../components/LargeWidget/LargeWidget'
import './index.css'

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active Users"/>
      <div className="homeWidget">
        <SmallWidget />
        <LargeWidget />
      </div>
    </div>
  )
}

export default Home