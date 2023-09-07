import logo from "../assets/logo.svg";
import {Button} from "./Button.tsx";

const SubFooter = () => {
    return(
        <div className='hidden lg:flex justify-end p-2 gap-3 '>
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
        </div>
    )
}

const Footer = () => {
    return(
        <footer
            className='divide-y divide-slate-200 w-full bg-white z-40 '
        >
            <div></div>
            <SubFooter />
            <div className='flex items-center justify-between p-4'>
                <div className='lg:w-1/3' >
                    <img src={logo} alt='logo'/>
                </div>
                <div className='hidden lg:flex w-1/3 justify-center text-green-900 font-medium'>
                    <span>© 2020-2023 Все права защищены</span>
                </div>
                <div className='hidden md:flex w-1/3 justify-end'>
                    <div className='w-[200px]'>
                        <Button buttonType='secondary'>К предложениям</Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export {Footer}