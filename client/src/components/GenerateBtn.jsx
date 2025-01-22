import React from 'react'
import { assets } from '../assets/assets'

const GenerateBtn = () => {
  return (
    <div className="pb-16 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">See the magic. Try now</h1>
        <button className="inline-flex items-center gap 2 mt-8 px-12 py-2.5 text-white rounded-full w-auto border bg-black hover:scale-105 transition-all duration-500">Generate Images <img src={assets.star_group} alt="star"className="h-6"/></button>
    </div>
  )
}

export default GenerateBtn