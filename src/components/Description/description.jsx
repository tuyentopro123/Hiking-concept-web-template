import React from 'react';
import shadow from '../../assets/Shadow.png'

const Description = () => {
  return (
        <section className="description 
                        relative
                        bg-[#99928d]
                        before:content-['']
                        before:absolute
                        before:top-0
                        before:bg-shadow1
                        before:w-full
                        before:h-1/4
                        before:bg-cover
                        before:md:bg-contain
                        after:content-['']
                        after:absolute
                        after:bottom-[-10%]
                        after:bg-shadow3
                        after:w-full
                        after:h-1/4
                        after:bg-cover
                        after:z-50
                        ">
                <div className="px-12 py-24 text-center md:px-24 md:py-60">
                    <h2 className="text-white py-4 text-2xl md:text-4xl md:py-10">Hiking in the mountains</h2>
                    <p className="text-[#dbdbdb] md:text-2xl md:w-[55%] md:m-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis </p>
                </div>
                <img src={shadow} alt="" className="absolute opacity-40 w-2/5 left-[-5%] bottom-[15%] rotate-[160deg] invisible md:visible" />
        </section>
    )
};

export default Description;
