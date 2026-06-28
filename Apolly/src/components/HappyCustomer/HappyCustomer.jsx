import React from 'react'
import SectionHeader from '../SectionHeader'
import TeamSlider from './TeamSlider'

const HappyCustomer = () => {
  return (
    <div className='py-20 max-w-7xl mx-auto'>
        <SectionHeader 
        title="Our Happy Customers"
        titleClassName='text-white'
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat."
        subtitleClassName='text-white'
        />

        <div>
            <TeamSlider/>
        </div>
    </div>
  )
}

export default HappyCustomer