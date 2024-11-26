import React from 'react'
import { ThreeDCard } from '@/components/ThreeDCard'
import SliderCards from '@/components/ui/cards/sliderCards/SliderCards'

function SkillsCards() {
  return (
    <div>
    <SliderCards>
        <ThreeDCard 
          title="Apple Vision Pro"
          description="Expertise in developing for Apple's latest AR/VR platform"
        />
        <ThreeDCard 
          title="AI Development"
          description="Creating intelligent systems and RAG Based Chatbots"
        />
        <ThreeDCard 
          title="Full Stack Development"
          description="Building end-to-end web applications with Spring Boot and React"
        />
        <ThreeDCard 
          title="DevOps and Cloud Engineering"
          description="Implementing robust CI/CD pipelines, dockers and cloud infrastructure"
        />
    </SliderCards>
    <div className='flex justify-center items-center'>
 
    </div>
    </div>
  )
}

export default SkillsCards