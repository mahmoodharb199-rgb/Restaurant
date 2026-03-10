'use client'
import Countdown from 'react-countdown'
const endDate = new Date("2026-03-07T23:59:59+03:00");
export default function CountDown(){

    return (
       <Countdown className='font-bold text-yellow-300 text-5xl' date={endDate}/>
    )
}