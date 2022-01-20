import React from 'react';

const Explore = () => {
  return (
        <section className="relative 
                            explore 
                            bg-explore 
                            bg-cover 
                            min-h-[40vh] 
                            bg-right 
                            after:content-['']
                            after:absolute
                            after:w-full
                            after:h-1/4
                            after:bg-shadow2
                            after:bg-cover
                            after:bottom-[-10%]
                            after:md:bottom-[-15%]
                            md:min-h-[100vh] ">
            <div className="absolute w-full top-[35%] text-right px-4 md:top-1/3 md:px-24">
                <h1 className="text-3xl my-1 font-black italic uppercase text-main text-shadow-md md:text-7xl md:text-shadow-xl">Explore</h1>
                <h1 className="text-3xl my-1 font-black italic uppercase text-txt1 text-shadow-md md:text-7xl md:text-shadow-xl">The world</h1>
            </div>
        </section>
    )
};

export default Explore;
