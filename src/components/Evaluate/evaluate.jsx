import React from 'react';
import shadow from '../../assets/Shadow.png'


const ideas = [
    {
        h2:'lorem ipsum',
        p:'Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore.',
    },
    {
        h2:'lorem ipsum',
        p:'Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore.',
    },
    {
        h2:'lorem ipsum',
        p:'Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore.',
    },
]
const Evaluate = () => {
  return (
        <section className="evaluate 
                            relative 
                            after:content-[''] 
                            after:absolute 
                            after:w-full 
                            after:md:bottom-[-25%] 
                            after:bottom-[-15%] 
                            after:h-1/5
                            after:md:h-[32%]
                            after:bg-shadow1
                            after:bg-contain
                            after:z-50
                            after:md:bg-cover
                            after:bg-no-repeat
                            ">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-2 lg:w-4/5 lg:m-auto pb-12 pt-24 md:pb-48">
                {ideas.map((idea,index) => (
                    <div key={index} className="px-6">
                        <h2 className="mb-2 text-2xl text-main font-bold">{idea.h2}</h2>
                        <p>{idea.p}</p>
                    </div>
                ))}
            </div>

            <div className="px-6 text-center">
                <h1 className="text-7xl md:text-9xl">“</h1>
                <p className="pb-6 md:w-1/3 md:m-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                <h4 className="text-md font-bold pb-12 ">Lorem Ipsum</h4>
            </div> 
            <img src={shadow} alt="" className="absolute opacity-30 rotate-360 w-1/2 right-[-5%] bottom-[-20%] invisible md:visible z-[100]" />
        </section>
    )
};

export default Evaluate;
