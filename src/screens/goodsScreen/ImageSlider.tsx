import {FC, useState} from "react";
import leftArrow from './assets/leftArrow.svg'
import rightArrow from './assets/rightArrow.svg'


type ImageSliderProps = {
    image: [string, string]
    alt: string
    styles?: string
}
const ImageSlider: FC<ImageSliderProps> = ({image, alt, styles}: ImageSliderProps) => {
    const [currentImage, setCurrentImage] = useState(0)
    const handleImage = () => {
        currentImage === 0 ? setCurrentImage(1) : setCurrentImage(0)
    }
    return (
        <div className={`relative group`}>
            <div>
                <img src={image[currentImage]} alt={alt} className={styles}/>

            </div>
            <div
                className={`block sm:hidden group-hover:block absolute top-1/2 left-0 ml-4  items-center justify-center ${currentImage === 0 ? 'text-gray-500' : 'text-white'} `}
                onClick={handleImage}>
                <img src={leftArrow} alt='left' className='fill-white cursor-pointer'/>
            </div>
            <div
                className={`block sm:hidden group-hover:block absolute top-1/2 right-0 mr-4 items-center justify-center ${currentImage === 0 ? 'text-gray-500' : 'text-white'} fill-white `}
                onClick={handleImage}>
                <img src={rightArrow} alt='right' className='fill-white cursor-pointer'/>
            </div>
            {/*<div className=' w-full h-[70vh] group'>
                <div style={{backgroundImage: `url(${image[currentImage]})`}}
                     className='duration-500 w-full h-full bg-center bg-cover'></div>
                <div
                    className={`hidden group-hover:block absolute top-1/2 left-0 ml-2  items-center justify-center ${currentImage === 0 ? 'text-gray-500' : 'text-white'} `}
                    onClick={handleImage}>
                    <span className="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </div>
                <div
                    className={`hidden group-hover:block absolute top-1/2 right-0 ml-2 items-center justify-center ${currentImage === 0 ? 'text-gray-500' : 'text-white'} `}
                    onClick={handleImage}>
                    <span className="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                </div>
            </div>*/}

        </div>

    )
}

export default ImageSlider