import {useMediaQuery} from "../hooks/useMediaQuery.ts";
import logo from '../assets/logo.svg'
import mobileLogo from '../assets/logo-sm.svg'
import {Button} from "./Button.tsx";
import {useState, useEffect} from "react";
import {Link} from 'react-scroll';

const SubHeader = () => {
    return (
        <>
            <div className='flex items-center gap-2 '>
                <span className="material-symbols-outlined">location_on</span>
                Екатеринбург, Краснолесья 28
            </div>
            <div className='flex items-center gap-2'>
                <span className="material-symbols-outlined">call</span>
                +7-999-568-15-77
            </div>
            <div className='flex items-center gap-2'>
                <span className="material-symbols-outlined">schedule</span>
                12:00 - 20:00, без выходных
            </div>
        </>
    )
}

const Header = () => {
    const matches = useMediaQuery('(min-width: 1000px)')
    const isMobile = useMediaQuery('(max-width: 400px)')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isTopOfPage, setIsTopOfPage] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true)
            } else {
                setIsTopOfPage(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })

    return (
        <header
            className={`divide-y divide-slate-200 ${!isTopOfPage && 'shadow-md'} fixed top-0 w-full bg-white z-20`}>
            {matches &&
                <div className='flex justify-end p-2 gap-3 text-lg'>
                    <SubHeader/>
                </div>
            }

            <div className='p-4 flex justify-between items-center'>
                <Link to="/" smooth={true} duration={700} offset={-150} className='cursor-pointer'>
                    <img src={isMobile ? mobileLogo : logo} alt='logo'/>
                </Link>
                {matches
                    ? <div className='flex items-center gap-12 text-xl'>
                        <div className='flex gap-3'>
                            <Link to="goods" smooth={true} duration={700} offset={-150} className='cursor-pointer'>Товары</Link>
                            <Link to="feedback" smooth={true} duration={700} offset={-150} className='cursor-pointer'>Отзывы</Link>
                            <Link to="questions" smooth={true} duration={700} offset={-150} className='cursor-pointer'>Вопросы</Link>
                            <Link to="contacts" smooth={true} duration={700} offset={-150} className='cursor-pointer'>Контакты</Link>
                        </div>
                        <Link  to="goods" smooth={true} duration={700} offset={-150} className='cursor-pointer'>
                            <Button buttonType='default'>К предложениям</Button>
                        </Link>
                    </div>
                    : <span className="material-symbols-outlined cursor-pointer" onClick={() => setIsMenuOpen(true)}>
                            menu
                        </span>
                }
                {isMenuOpen && !matches &&
                    <div
                        className='bg-green-50 p-4 fixed right-0 bottom-0 z-20 h-full w-[300px] bg-secondary-50 drop-shadow-xl'>
                        <div className='h-1/2'>
                            <div className='h-[50px] flex justify-end items-center'>
                            <span className="material-symbols-outlined cursor-pointer"
                                  onClick={() => setIsMenuOpen(false)}>close</span>
                            </div>
                            <div className='flex gap-3 flex-col m-2 items-center text-xl'>
                                <Link to="goods" smooth={true} duration={700} offset={-150} className='cursor-pointer'>Товары</Link>
                                <Link to="feedback" smooth={true} duration={700} offset={-150} className='cursor-pointer'>Отзывы</Link>
                                <Link to="questions" smooth={true} duration={700} offset={-150} className='cursor-pointer'>Вопросы</Link>
                                <Link to="contacts" smooth={true} duration={700} offset={-150} className='cursor-pointer'>Контакты</Link>
                            </div>
                        </div>
                        <div className='flex flex-col  gap-3 justify-end h-1/2'>
                            <SubHeader/>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}

export {Header}