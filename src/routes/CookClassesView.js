import React from 'react'
import CookClasses from 'components/CookClasses/CookClasses'
import Payment from 'components/Payment'
import { Helmet } from 'react-helmet'

export default function CookClassesView(props) {
  return (
    <div>
      <Helmet>
        <title>Classes</title>
        <meta
          name="description"
          content="See what cooking classes are available and register your kids today!"
        />
      </Helmet>
      <div style={{ textAlign: 'center' }}>
        <h1 className="text-center">Upcoming Classes</h1>
        <Payment></Payment>
      </div>
      <CookClasses />
    </div>
  )
}
