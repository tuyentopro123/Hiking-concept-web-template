import React from 'react';

const Feedback = () => {
  return (
        <section className="relative 
                            feedback 
                            bg-main
                            min-h-[60vh] 
                            md:min-h-[100vh] 
                            after:content-['']
                            after:absolute
                            after:w-full
                            after:h-1/4
                            after:bg-shadow3
                            after:bg-cover
                            after:z-50
                            after:bottom-[-10%]
                            ">
            <div className="relative px-12 pb-12 pt-24 md:top-[25vh]">
                <div className="text-center ">
                    <h1 className="text-3xl text-white pb-6 md:text-5xl md:pb-12">Title Here</h1>
                    <p className="text-txt1 pb-10 md:m-auto md:w-[41%] md:text-xl md:pb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
                </div>
                <div className="relative w-full h-[37px] rounded-3xl bg-white md:m-auto md:w-1/3">
                    <input type="text" placeholder="Your email" className="w-[55%] 
                                                                        outline-none 
                                                                        absolute 
                                                                        h-full 
                                                                        bg-transparent 
                                                                        left-[10px] 
                                                                        md:w-[65%]
                                                                        md:left-[15px]
                                                                        "/>
                    <button class="my-3 
                                    absolute
                                    px-[1.2rem] 
                                    py-[0.3rem] 
                                    text-lg 
                                    top-[-12px]
                                    right-0
                                    cursor-pointer 
                                    rounded-3xl 
                                    font-bold 
                                    text-white 
                                    uppercase 
                                    bg-third
                                    ">Subscribe</button>
                </div>
            </div>
        </section>
  )
};

export default Feedback;
