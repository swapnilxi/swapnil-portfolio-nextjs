import React from 'react'
import { ThreeDCard } from '@/components/ThreeDCard'
import SkillCards from './pages/SkillsCards'
import CompanyCards from './pages/CompanyCards'
import AnimatedStatsCard from '@/components/ui/cards/AnimatedStatsCard'

function HomePage() {
  return (
    <div>HomePage
      <div></div>
      {/* skills */}
      <SkillCards />
    {/* sponsers */}
    <div>
    <CompanyCards/>
    <AnimatedStatsCard/>
    </div>
    </div>
  )
}

export default HomePage