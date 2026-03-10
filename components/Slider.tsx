'use client';
import Image from "next/image";
import { useState ,useEffect } from "react";
const data = [
{
id:1,
title:"always fresh",
image:"/slide1.png"
},
{
id:2,
title:"we deliver your order wherever you are",
image:"/slide2.png"
}
,{
id:3,
title:"the best pitzza to share with your family",
image:"/slide3.jpg"
}

]
export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    useEffect(()=>{
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
      }, 2000); // Change slide every 3 seconds
      return () => clearInterval(interval); // Clean up the interval on component unmount
    },[])
    
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TextContainer */}
      <div className="flex-1 flex items-center justify-center flex-col gap-5 text-red-500 font-bold ">
        <h1 className="text-5xl  text-center uppercase p-2">{data[currentSlide].title}</h1>
        <button className="bg-red-500 text-white py-4 px-8 md:text-6xl rounded-lg">Order Now</button>
      </div>

      {/* image container */}
      <div className="flex-1 relative ">
        <Image src={data[currentSlide].image} alt="" fill className="object-cover" />
      </div>
    </div>  
  );
}