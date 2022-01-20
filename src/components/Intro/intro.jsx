import React from 'react'

const Intro = () => {
    return (
        <section className="intro 
                            relative 
                            bg-intro 
                            bg-cover 
                            h-[110vh] 
                            top-[-135px]
                            after:content-['']
                            after:absolute
                            after:w-full
                            after:h-header
                            after:-bottom-2
                            after:bg-shadow2
                            lg:bg-center
                            xl:h-[130vh]
                            ">
            <div className="top-1/4 
                            left-1/2 
                            absolute  
                            w-5/6
                            translate-x-[-50%] 
                            md:ml-6 
                            md:top-1/3
                            md:left-1/4
                            md:w-1/3">
                <h1 className="my-3 font-bold text-main text-5xl md:text-7xl text-shadow-md">IT´S TIME</h1>
                <h1 className="my-3 font-bold text-main text-5xl md:text-7xl text-shadow-md">FOR HIKING</h1>
                <h4 className="mt-3 mb-10 text-xl tracking-[6px] font-medium font-Neo">LOREMIPSUM DOLOR</h4>
                <button className=" my-3 
                                    px-[1.2rem] 
                                    py-[0.3rem] 
                                    text-lg 
                                    cursor-pointer 
                                    rounded-3xl 
                                    font-bold 
                                    text-third 
                                    uppercase 
                                    bg-white
                                    hover:tracking-[4px]
                                    transditon
                                    ease-in-out
                                    duration-300
                                    ">Read more</button>
                <p className="my-3 w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut labore et dolore magna.</p>
            </div>
        </section>
    )
}

export default Intro
