import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextPage } from 'next'
import Slider, { CustomArrowProps, Settings } from 'react-slick'

import { cn } from '@/utils/cn'

const NextArrow = (props: CustomArrowProps) => {
    const { className, style, onClick } = props
    return (
        <div
            className={cn(
                className,
                'absolute right-2 top-1/2 z-10 -translate-y-1/2'
            )}
            style={{ ...style }}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={['fas', 'arrow-alt-circle-right']}
                className="hidden size-8 md:block"
            />
        </div>
    )
}

const PrevArrow = (props: CustomArrowProps) => {
    const { className, style, onClick } = props
    return (
        <div
            className={cn(
                className,
                'absolute left-2 top-1/2 z-10 -translate-y-1/2'
            )}
            style={{ ...style }}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={['fas', 'arrow-alt-circle-left']}
                className="hidden size-8 md:block"
            />
        </div>
    )
}

interface Props extends Settings {
    children: React.ReactNode
}

export const CarouselSlider: NextPage<Props> = ({ children, ...props }) => {
    const settings: Settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        fade: false,
        lazyLoad: 'progressive',
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        ...props,
    }
    return (
        <Slider {...settings} useTransform={false}>
            {children}
        </Slider>
    )
}
