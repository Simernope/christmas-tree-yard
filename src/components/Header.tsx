import {useMediaQuery} from "../hooks/useMediaQuery.ts";
import logo from '../assets/logo.svg'
import mobileLogo from '../assets/logo-sm.svg'
import {Button} from "./Button.tsx";
import {useState, useEffect} from "react";

const SubHeader = () => {
    return (
        <>
            <div className='flex items-center gap-2 '>
                <span className="material-symbols-outlined">location_on</span>
                Екатеринбург, Краснолесья 32,
            </div>
            <div className='flex items-center gap-2'>
                <span className="material-symbols-outlined">call</span>
                +7-912-222-23-43
            </div>
            <div className='flex items-center gap-2'>
                <span className="material-symbols-outlined">schedule</span>
                10:00 - 20:00, без выходных
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
            className={`divide-y divide-slate-200 ${!isTopOfPage && 'shadow-md'} fixed top-0 w-full bg-white z-40`}>
            {matches &&
                <div className='flex justify-end p-2 gap-3 text-lg'>
                    <SubHeader/>
                </div>
            }

            <div className='p-4 flex justify-between items-center'>
                <img src={isMobile ? mobileLogo : logo} alt='logo'/>
                {matches
                    ? <div className='flex items-center gap-12 text-xl'>
                        <div className='flex gap-3'>
                            <div>Товары</div>
                            <div>Отзывы</div>
                            <div>Вопросы</div>
                            <div>Контакты</div>
                        </div>
                        <Button buttonType='default'>К предложениям</Button>
                    </div>
                    : <span className="material-symbols-outlined cursor-pointer" onClick={() => setIsMenuOpen(true)}>
                            menu
                        </span>
                }
                {isMenuOpen && !matches &&
                    <div
                        className='bg-green-50 p-4 fixed right-0 bottom-0 z-40 h-full w-[300px] bg-secondary-50 drop-shadow-xl'>
                        <div className='h-1/2'>
                            <div className='h-[50px] flex justify-end items-center'>
                            <span className="material-symbols-outlined cursor-pointer"
                                  onClick={() => setIsMenuOpen(false)}>close</span>
                            </div>
                            <div className='flex gap-3 flex-col m-2 items-center text-xl'>
                                <div>Товары</div>
                                <div>Отзывы</div>
                                <div>Вопросы</div>
                                <div>Контакты</div>
                            </div>
                        </div>
                        <div className='flex flex-col  gap-3 justify-end h-1/2'>
                            <SubHeader/>
                            {/*<div className='border-t-2 border-green-100 '>
                                <img className='mt-[0.75rem]' src={logo} alt='logo'/>
                            </div>*/}
                        </div>
                    </div>
                }

            </div>
        </header>
    )
}

export {Header}