import React from 'react'
import SectionHeader from '../SectionHeader'
import BlogCards from './BlogCards'

const RecentBlog = () => {
  return (
    <div className='py-20 mx-w-7xl'>
        <SectionHeader
        title="Our recent blog"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat."
        titleClassName='text-black'
        subtitleClassName='text-gray'
        />
        <div>
            <BlogCards/>
        </div>

    </div>
  )
}

export default RecentBlog