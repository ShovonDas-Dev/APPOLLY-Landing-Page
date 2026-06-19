import React from 'react'
import SectionHeader from './SectionHeader'
import featuresData from '../data/featuresData'
import Animation from "../components/AnimatedFinanceMockup"
import Something from "../components/p/something"

const Appfeatures = () => {
    console.log(featuresData)
  return (
    
    <div>
        {/* App Features header */}
        <SectionHeader 
        title="App features" 
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat."
        subtitleClassName='text-white'
        titleClassName='text-white'
         />
      <Animation/>

      {/* <div className='py-10'>
        <Something/>
      </div> */}
    </div>
  )
}

export default Appfeatures
