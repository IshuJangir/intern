import React, { useState } from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
export default function Card({reviews}) {


    const[index,setIndex]=useState(0);

    function prevHandler(){
        if(index===0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1)
        }
    }
    function nextHandler(){
        if(index===(reviews.length-1)){
            setIndex(0)
        }

        else{
            setIndex(index+1)
        }
    }
    function randomHandler(){
        let rndno=Math.floor((Math.random())*(reviews.length-1))
        setIndex(rndno)
    }


    
    
  return (
    <div className='w-[100vw] flex justify-center items-center m-3 relative '>
        <div className='bg-white w-[700px] h-[450px] mt-10 rounded-md '>
                <div className='bg-[#8b5cf6]  h-[150px] w-[150px] rounded-full absolute -top-[0.5rem] left-[21rem] '></div>

                <img className='h-[150px] w-[150px] rounded-full absolute top-[0.1rem] left-[20.5rem] ' src={reviews[index].image} alt="" />
                <div className='tracking-wider font-bold text-2xl capitalize flex justify-center mt-24'>
                    {reviews[index].name}
                </div>
                
                <div className='flex justify-center text-violet-300 uppercase text-sm mb-4'>
                    {reviews[index].job}
                </div>
                
                <div className='flex justify-center text-violet-300'>
                    <FaQuoteLeft></FaQuoteLeft>
                </div>

                <div className='flex justify-center items-center text-center mb-4 mt-4 text-slate-500 '>
                {reviews[index].text}
                </div>

                <div className='flex justify-center text-violet-300 mb-4'>
                    <FaQuoteRight></FaQuoteRight>
                </div>

                <div className='flex justify-center text-violet-300 gap-5 mt-10 scale-150'>
                    <div className='cursor-pointer'>
                        <FiChevronLeft onClick={prevHandler} ></FiChevronLeft>
                    </div>

                    <div className='cursor-pointer'>
                        <FiChevronRight onClick={nextHandler} ></FiChevronRight>
                    </div>
                </div>

                <div className='flex justify-center mt-6 w-[100%] items-center text-center'>
                    <button onClick={randomHandler} className='w-52  bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>Surprise Me</button>
                </div>
        </div>
    </div>
  )
}
