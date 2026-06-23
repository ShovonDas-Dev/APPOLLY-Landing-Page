import React from 'react'
import SectionHeader from '../SectionHeader'
import FinanceSlider from './FinanceSlider'
import AppDownloadSection from './AppDownloadSection'

const AppInterface = () => {
  return (
    <div className='py-20 flex flex-col max-w-7xl mx-auto' >
        {/* Header section */}
        <div>
            <SectionHeader
               title="Checkout Our App Interface Look"
               subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat."
               titleClassName="text-black"
               subtitleClassName="text-gray"
            />
        </div>
        {/* Slider section start */}
        <div>
            <FinanceSlider/>
        </div>
        {/* Download App Now */}
        <div className='py-10'>
          <AppDownloadSection/>
        </div>
    </div>
  )
}

export default AppInterface