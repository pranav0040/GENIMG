import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const {user,setShowLogin} = useContext(AppContext)
    const {navigate}=useNavigate()
    
    const onClickhandler=()=>{
        if(user)
            navigate('/result')
        else
        setShowLogin(true)

    }
  return (
    <motion.div className="flex flex-col justify-center items-center text-center my-20" 
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1 ,y:0}}
    viewport={{once:true}}>
        <motion.div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500"
        initial={{opacity:0,y:-20}}
        transition={{duration:0.8,delay:0.2}}
        animate={{opacity:1 ,y:0}}
        >
            <p>Best text to image generator</p>
            <img src={assets.star_icon} alt=""/></motion.div>
            <motion.h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center"
            >
                Turn text to <motion.span className="text-blue-600"initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.4,duration:2}}
                >image</motion.span>, in seconds.
            </motion.h1>
            <motion.p className="text-center max-w-x1 mx-auto mt-5"
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.6,duration:0.8}}>
                Unleash your creativity with Ai. turn your imagination into visual art in seconds - just type, and watch the magic happen.
            </motion.p>
            <motion.button className=" flex items-center gap-2 sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 rounded-full"
            initial={{opacity:0}}
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            animate={{opacity:1}}
            transition={{default:{duration:0.5},opacity:{delay:0.8,duration:1}}}
            onClick={onClickhandler}
            >Generate Images <img src={assets.star_group} alt="star group" className="h-6"/></motion.button>

            <div className="flex flex-wrap justify-center mt-16 gap-3">
                {Array(6).fill('').map((item, index)=>(
                    <img className="rounded hover:scale-105 transition-all duration-300 cursor-pointer" src={index %2===0 ? assets.sample_img_1 : assets.sample_img_2} alt=""
                    key={index} width={70}/>
                ))}
            </div>
        <motion.p className='mt-2 text-neutral-600'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.2,duration:0.8}}>
            Generated images from imagify

        </motion.p>


    </motion.div>
  )
}

export default Header