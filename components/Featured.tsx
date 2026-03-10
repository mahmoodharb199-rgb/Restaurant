import Image from "next/image";
import { featuredProducts } from "../app/data";

export default function Featured() {
  return (
    <div className="w-screen overflow-x-auto scroll-smooth snap-x snap-mandatory">
      <div className="flex w-max gap-4">
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen shrink-0 h-[60vh] flex flex-col items-center justify-around p-4 snap-start bg-white hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* Image */}
           { item.img &&(

            <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
              <Image
                src={item.img}
                alt=""
                fill
                className="object-contain"
              />
            </div>)}

            {/* Text */}
            <div className="flex-1 flex flex-col gap-2 justify-center items-center text-center text-red-500">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}