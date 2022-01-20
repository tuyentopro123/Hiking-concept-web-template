import React from 'react';

const Review = (prop) => {
  const text = React.useRef(null)
  const img = React.useRef(null)
  const handleMore = () => {
      text.current.classList.toggle('whitespace-nowrap')
      img.current.classList.toggle('w-0')
      img.current.classList.toggle('opacity-0')
      document.querySelector(`.img-${prop.id}`).classList.toggle('md:w-0')
      console.log('hah')
  }
  return (
    <section className={`review ${prop.bg} md:flex md:align-center ${prop.flex ? prop.flex : ''} md:h-[40vh]  xl:h-[80vh]`}>
        <div  className={`img-${prop.id} md:h-full`}>
          <img ref={img} src={prop.img} className="w-full transition-all ease-in-out duration-300 md:w-full md:h-full" alt="" />
        </div>
        <div className="text-white md:w-1/2 md:flex-1 md:p-[100px]">
          <h2 className="text-3xl pt-4 px-6 xl:text-6xl">{prop.h2}</h2>
          <p ref={text} className=" text-md pt-4 px-4 whitespace-nowrap overflow-hidden text-ellipsis xl:whitespace-normal md:text-xl">{prop.p}</p>
          <button className="my-3 
                            px-10
                            py-2 
                            text-lg 
                            mx-6
                            mb-12
                            cursor-pointer 
                            rounded-3xl 
                            font-bold 
                            text-white 
                            uppercase 
                            bg-second
                            hover:tracking-[4px]
                            transditon
                            ease-in-out
                            duration-300"
                            onClick={() => handleMore()}
                            >Read more</button>
        </div>
    </section>
  )
};

export default Review;
