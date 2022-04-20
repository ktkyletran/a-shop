import React from 'react'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import './index.css'

const FeaturedInfo = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$34,325</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownward className='featuredIcon negative' />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$64,325</span>
          <span className="featuredMoneyRate">
            +31.4
            <ArrowUpward className='featuredIcon negative' />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Costs</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$30,000</span>
          <span className="featuredMoneyRate">+50.0 <ArrowUpward className='featuredIcon' /> </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo