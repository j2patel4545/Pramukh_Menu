import React from 'react'
import { motion } from 'framer-motion'
import ChineseMenu from './ChineseMenu'
import ChineseTwo from './ChineseTwo'
import Feedback from './Feedback'
import PunjabiDish from './PunjabiDish'
import Punjabi from './Punjabi'
import Paubhaji from './Paubhaji'

function MenuCard() {
    return (
        <div>
            <div className='flex flex-col text-white w-screen bg-[#222222] min-h-screen'>
                <div className='text-white pt-3 sm:pb-3 flex justify-center w-screen'>
                    || શ્રી સ્વામિનારાયણો વિજયતે ||
                </div>
                <div className='flex h-24 items-center sm:mt-2 justify-between mx-2 sm:mx-10'>
                    <motion.img whileHover={{ scale: 1.1 }} className='object-contain h-2/3 sm:h-full border-2 border-black rounded-md' src="./PramukhSwamiMaharaj.webp" alt="Pramukh Swami Maharaj" />
                    <motion.img whileHover={{ scale: 1.1 }} className='object-contain h-2/3 sm:h-full' src="./AksharPurushotamMaharaj.webp" alt="Akshar Purushottam Maharaj" />
                    <motion.img whileHover={{ scale: 1.1 }} className='object-contain h-2/3 sm:h-full border-2 border-black rounded-md' src="./MahantSwamiMaharaj.webp" alt="Mahant Swami Maharaj" />
                </div>
                <div id='Title flex flex-col -mt-8'>
                    <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
                        className="text-[#A6B459] sm:-mt-14 flex w-screen justify-center sm:text-[32vh] -ml-4 text-[18vh] font-bold drop-shadow-[2px_2px_0px_#ffffff]">પ્રમુખ</motion.h1>
                    <motion.h6 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}
                        className='flex sm:justify-center sm:-mr-96 sm:-mt-20 sm:text-5xl justify-end text-amber-50 -mt-10 mr-16 text-lg font-serif'>Restaurant</motion.h6>
                    <motion.h3 initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2 }}
                        className="text-[#222222] text-8xl mt-8 ml-3 font-bold [text-shadow:_-1px_-1px_0_#A6B459,_1px_-1px_0_#A6B459,_-1px_1px_0_#A6B459,_1px_1px_0_#A6B459]">
                        ચાઇનીઝ
                    </motion.h3>
                    <div className='flex w-full justify-end'>
                        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}
                            className='text-white/70 text-6xl mt-7 mr-4 -mb-14 flex font-mono'>&</motion.h2>
                        <motion.h3 initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2 }}
                            className="text-[#222222] mx-2 text-8xl flex justify-end font-bold [text-shadow:_-1px_-1px_0_#A6B459,_1px_-1px_0_#A6B459,_-1px_1px_0_#A6B459,_1px_1px_0_#A6B459]">
                            પંજાબી
                        </motion.h3>
                    </div>
                </div>
                <motion.div
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", duration:3,delay:1.5, stiffness: 50 }}
                    className="flex w-full mt-4 h-10 text-zinc-50 p-2 py-2 my-3 text-2xl justify-between items-center border-t-2 border-[#A6B459] border-b-2"
                >
                    <h2>veg Only</h2>
                    <h2>mo no:9904175561</h2>
                </motion.div>
                    <img src="./LandingFood.webp" alt="" />
            </div>
            <ChineseMenu />
            <ChineseTwo />
            <Punjabi/>
            <PunjabiDish/>
            <Paubhaji/>
            <Feedback/>
            <h2 className=' flex justify-center items-center p-3  text-lg font-mono'>MOBILE NO : 9904175561</h2>
        </div>
    )
}

export default MenuCard
