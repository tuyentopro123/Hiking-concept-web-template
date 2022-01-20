import React,{useRef,useEffect,useState} from 'react';
import content1 from '../../assets/content1.png'
import content2 from '../../assets/content2.png'
import content3 from '../../assets/content3.png'
import shadow from '../../assets/Shadow.png'


const box = [
    {
        img:content1,
        h3:'Lorem ipsum',
        p:'Lorem ipsum dolor sit amet, consectetur  adipisicing...',
    },
    {
        img:content2,
        h3:'Lorem ipsum',
        p:'Lorem ipsum dolor sit amet, consectetur  adipisicing...',
    },
    {
        img:content3,
        h3:'Lorem ipsum',
        p:'Lorem ipsum dolor sit amet, consectetur  adipisicing...',
    },    
]

const box2 = [
    {
        img:content1,
        h3:'Lorem ipsum',
        p:'Lorem ipsum dolor sit amet, consectetur  adipisicing...',
    },
    {
        img:content2,
        h3:'Lorem ipsum',
        p:'Lorem ipsum dolor sit amet, consectetur  adipisicing...',
    },
    {
        img:content3,
        h3:'Lorem ipsum',
        p:'Lorem ipsum dolor sit amet, consectetur  adipisicing...',
    },
]

const Content = () => {
    const btn= useRef(null)
    const [add,setAdd] = useState(true)
    // useEffect(() => {
    //     document.querySelector('.content__item')
    // },[add])
    const handleAdd = () => {
        if(add) {
            box2.map((child) => {
                box.push(child)
            })
            btn.current.innerHTML = 'Compact'
            setAdd(false)
        } else {
            box.splice(3)
            btn.current.innerHTML = 'Show more'
            setAdd(true)
        }
    }
  return (
    <section className="content relative top-[-100px] min-h-[110vh] lg:min-h-[55vh]">
        <div className="text-center mb-12 lg:mb-[5rem]">
            <h1 className="text-4xl my-4 text-second lg:text-6xl">LET´S GO</h1>
            <p className=" my-4 text-xl text-third lg:w-1/2 lg:m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
        </div>
        <div className=" grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-2 lg:w-4/5 lg:m-auto">
            {box.map((content,index) => (
                <a key={index} href='#' className="content__item relative m-auto w-9/10 shadow-gray-200 shadow-md lg:w-4/">
                    <div className="overflow-hidden">
                        <img src={content.img} alt="" className="w-full hover:scale-[1.2] transition-scale ease duration-500" />
                    </div>
                    <div className="bg-third text-white">
                        <h3 className="mb-4 pt-8 px-2 text-3xl">{content.h3}</h3>
                        <p className=" pb-12 px-2">{content.p}</p>
                    </div>
                </a>
            ))}
        </div>
        <button className="relative
                            my-3 
                            px-[3rem] 
                            py-[1rem] 
                            text-lg 
                            w-[90%]
                            mt-10
                            cursor-pointer 
                            rounded-3xl 
                            font-bold 
                            text-white 
                            uppercase 
                            bg-third
                            hover:tracking-[4px]
                            transditon
                            ease-in-out
                            duration-300
                            mx-auto
                            left-1/2
                            translate-x-[-50%]
                            lg:w-1/5
                            "
                            onClick={() => handleAdd()}
                            ref={btn}
                            >Show more</button>
        <img src={shadow} alt="" className="absolute opacity-40 rotate-180 w-1/3 left-[-2%] bottom-[-5%] invisible md:visible" />
    </section>
  )
};

export default Content;
