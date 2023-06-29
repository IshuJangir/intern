import React, { useState } from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {IoEllipsisHorizontalSharp} from 'react-icons/io5';
import {RxSwitch} from 'react-icons/rx';
import {IoNavigateOutline} from 'react-icons/io5';
import {BsFillSunriseFill,BsFillSunsetFill} from 'react-icons/bs';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';
import {BsSun} from 'react-icons/bs';
import clouds from './clouds.jpg'
import user from './user.png'
import big from './big.jpg'
import first from './first.jpg'
import second from './second.jpg'
import third from './third.jpg'
import fourth from './fourth.jpg'
import fifth from './fifth.jpg'
import sixth from './sixth.jpg'



export default function Card({reviews}) {

    
  return (
    <div className='flex  justify-center m-3 relative bg-[#4d99e7] h-[500px] w-[800px] rounded-3xl lg:scale-105 md:scale-90 sm:scale-75'>

        <div className='flex flex-col justify-between   w-[250px] h-fit  '>
                <div className='text-white flex justify-between p-6'>
                    <div><AiOutlinePlusCircle className='text-2xl cursor-pointer text-[#5c9ce5] bg-white rounded-full'></AiOutlinePlusCircle></div>
                    <div><IoEllipsisHorizontalSharp className='text-3xl'></IoEllipsisHorizontalSharp></div>
                    <div className='flex gap-2 text-xs justify-center items-center'>
                        <span>°C</span>
                        <RxSwitch className='text-2xl cursor-pointer'></RxSwitch>
                        <span>°F</span>
                    </div>
                </div>

                <div className='flex flex-col gap-4 justify-between p-5  items-center'>
                   <div className='flex gap-8 '>
                       
                            <div className='flex  items-center gap-1 text-white'>
                                    <IoNavigateOutline></IoNavigateOutline>
                                    <span className='text-xs'>New York,USA</span>
                            </div>
                        
                            <div className='text-white flex items-center gap-1'>
                                <div><BsFillSunriseFill></BsFillSunriseFill></div>
                                <span className='text-sm'>07:19</span>
                            </div>
                   </div>

                    <div className='flex gap-10'>
                            
                            <div className='flex items-center gap-1 text-white'>
                                    <span className='text-xs'>Today 28 Sept</span>
                            </div>
                            
                            <div className='text-white flex items-center gap-1'>
                                <div><BsFillSunsetFill></BsFillSunsetFill></div>
                                <div className='text-sm'>07:19</div>
                            </div>
                    </div>
                </div>


                <div className='flex flex-col'>
                    <div className='flex justify-between p-5 text-white items-center'>
                        <div><AiOutlineLeft className='text-white opacity-50 h-5 w-5 cursor-pointer hover:bg-white hover:bg-opacity-25 rounded-full'></AiOutlineLeft></div>
                        <div className='text-[60px]'>27°</div>
                        <div><AiOutlineRight className='text-white opacity-50 h-5 w-5 cursor-pointer  hover:bg-white hover:bg-opacity-25 rounded-full ' ></AiOutlineRight></div>
                    </div>

                    <div className='flex justify-center items-center gap-2 text-white'>
                        <div className='text-'><BsSun></BsSun></div>
                        <span>Sunny</span>
                    </div>
                </div>


                <div>
                    <img className=' rounded-bl-3xl overflow-hidden h-[172px] w-64' src={clouds} alt="" />
                </div>


        </div>
       
       <div className='h-[500px] w-[550px] rounded-3xl bg-[#e4f1ff]  p-4'>
                <div className='h-fit flex justify-between'>
                    <div>
                        <p className='font-bold'>Welcome back Ishu!</p>
                        <p className='text-xs'>Check out today's weather information</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <div><IoEllipsisHorizontalSharp className='text-xl'></IoEllipsisHorizontalSharp></div>
                        <img className='h-[40px] w-[40px] rounded-lg' src={user} alt="" />
                    </div>
                </div>

                

                <div className='w-full bg-white mt-9 h-44 rounded-3xl '>
                        <img className='rounded-3xl pt-2 w-[550px]' src={big} alt="" />
                </div>

                <p className='text-xs m-3'>More details of today's weather</p>

                <div className='flex flex-col  gap-4  justify-between  '>
                    <div className='flex justify-between'>
                            <div className='bg-white rounded-2xl h-20 w-[30%] '>
                                    <img className='rounded-2xl' src={first} alt="" />
                            </div>

                            <div className='bg-white rounded-2xl h-20 w-[30%]'>
                                    <img className='rounded-2xl' src={second} alt="" />
                            </div>

                            <div className='bg-white rounded-2xl h-20 w-[30%]'>
                                    <img className='rounded-2xl' src={third} alt="" />
                            </div>
                    </div>


                    <div className='flex justify-between'>
                            <div className='bg-white rounded-2xl h-20 w-[30%]'>
                                    <img className='rounded-2xl' src={fourth} alt="" />
                            </div >

                            <div className='bg-white rounded-2xl h-20 w-[30%]'>
                                    <img className='rounded-2xl' src={fifth} alt="" />
                            </div>

                            <div className='bg-white rounded-2xl h-20 w-[30%]'>
                                    <img className='rounded-2xl' src={sixth} alt="" />
                            </div>
                    </div>

                    
                </div>
       </div>
    </div>
  )
}
