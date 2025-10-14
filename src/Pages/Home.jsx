import React from 'react'
import Hero from '../Components/Home/Banner/Hero'
import LatetestCollecton from '../Components/Home/LatetestCollection/LatetestCollecton'
import BestSeller from '../Components/Home/BestSeller/BestSeller'
import OurPolicy from '../Components/Home/OurPolicy/OurPolicy'
import NewsLetter from '../Components/Home/NewsLetter/NewsLetter'

export default function Home() {
  return (
    <div>
      <Hero/>
      <LatetestCollecton/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetter/>
    </div>
  )
}
