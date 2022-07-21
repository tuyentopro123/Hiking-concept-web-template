import React,{useRef} from 'react'
import logo from '../../assets/logo.png'

const Header = () => {
    const nav = useRef(null)
    const handleClick = () => {
        nav.current.classList.remove('invisible')
        nav.current.classList.add('visible')
    }
    const handleClose = () => {
        nav.current.classList.add('invisible')
        nav.current.classList.remove('visible')
        console.log('jhaha')
    }

    return (
        <header className=" header
                        relative 
                        h-header 
                        top-0 
                        left-0 
                        right-0 
                        bottom-0
                        bg-shadow1
                        bg-cover
                        z-10
                        ">
            <nav className="flex justify-between items-center py-[15px] px-[50px] z-50">
                <div className="w-16">
                    <img src={logo} alt="" />
                </div>
                <ul ref={nav} onClick={() => handleClose()} className="invisible
                                        fixed
                                        top-0
                                        left-0
                                        w-full
                                        h-[100vh]
                                        flex 
                                        flex-col
                                        justify-center
                                        items-center 
                                        text-xl
                                        leading-[70px] 
                                        uppercase 
                                        font-medium 
                                        bg-gray-900
                                        bg-opacity-90
                                        text-second
                                        transition-all
                                        ease-in-out
                                        duration-100
                                        md:w-1/2
                                        md:flex-row
                                        md:justify-between
                                        md:bg-transparent
                                        md:static
                                        md:h-auto
                                        md:visible
                                        md:text-sm
                                        md:text-black
                                        ">
                    <li className="px-[12px] leading-full hover:text-second hover:cursor-pointer hover:transition-colors"><a href="">Home</a></li>
                    <li className="px-[12px] leading-full hover:text-second hover:cursor-pointer hover:transition-colors"><a href="">Menu</a></li>
                    <li className="px-[12px] leading-full hover:text-second hover:cursor-pointer hover:transition-colors"><a href="">Our Story</a></li>
                    <li className="px-[12px] leading-full hover:text-second hover:cursor-pointer hover:transition-colors"><a href="">Contact Us</a></li>
                    <div className="relative w-1/4 invisible md:visible">
                        <input className=" bg-search rounded-3xl w-full p-[6px] block leading-none" type="text" />
                        <svg  xmlns="http://www.w3.org/2000/svg" className="absolute h-6 w-6 top-[5px] right-[10px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </ul>
                <div className="md:hidden" onClick={() => handleClick()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none " viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
            </nav> 
        </header>
    )
}

export default Header
