import React from "react";
import Hero from "../Components/HeroSection";
const HomePage =()=>{
    return(
        <div>
             <main className="lg:pt-[40px] md:pt-[120px]">
        <section className=" bg-[url('/bg.jpg')] bg-cover bg-center flex items-center justify-center">
         <Hero/>
        </section>
        
      </main>
        </div>
    )
}
export default HomePage;