import {Button} from "../../components/"
import mainTree from '../../assets/main-tree.png'
import {Link} from 'react-scroll';

const MainScreen = () => {
    return (
        <section className="md:flex justify-between items-center px-4 py-12 md:px-0 md:py-8">
            <div className="relative md:w-1/2 xl:w-1/3">
                <div
                    className="
                                before:absolute
                                md:before:-top-20
                                lg:before:-top-28
                                xl:before:-top-36
                                2xl:before:-top-40
                                md:before:content-sloganmd
                                lg:before:content-sloganlg
                                xl:before:content-sloganxl
                    ">
                    <div className='flex justify-center flex-col gap-6'>
                        <div className='text-3xl font-medium'>
                            Новогоднее настроение в каждый дом
                        </div>
                        <div className='text-xl'>
                            Онлайн - магазин искусственных елей, чтобы в два клика создать атмосферу праздника
                        </div>
                        <Link to="goods" smooth={true} duration={1000} offset={-150}>
                        <Button buttonType='primary'>К подборкам</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='z-10 flex justify-center lg:w-1/2 xl:w-1/2'>
                <img alt="main-tree" src={mainTree}/>
            </div>
        </section>
    )
}

export {MainScreen}