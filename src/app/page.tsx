import React from 'react'
import { ThreeDCard } from '@/components/ThreeDCard'

function HomePage() {
  return (
    <div>HomePage

      {/* skills */}
      <div className='flex justify-center items-center gap-10'>
        <ThreeDCard title="Apple Vision Pro"/>
        <ThreeDCard title="AI Development"/>
        <ThreeDCard title="Full Stack Development"/>
        <ThreeDCard title="DevOps and Cloud Engineering"/>
       
      </div>
    </div>
  )
}

export default HomePage