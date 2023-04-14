import Container from '@/components/Container'
import ButtonChevron from './ui/ButtonChevron'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/grid'

export default function SliderNoleggioAttrezzature() {
  const imagesSwiperGrid = [
    '/images/swiper-grid-attrezzature-1.jpg',
    // '/images/swiper-grid-attrezzature-2.png',
    // '/images/swiper-grid-attrezzature-3.png',
    '/images/swiper-grid-attrezzature-4.jpg',
    '/images/swiper-grid-attrezzature-5.jpg',
  ]

  return (
    <Container>
        <div className="w-full flex flex-col gap-y-12 lg:gap-y-16">
            <p className='text-44 font-family-lora text-gray-900'>
                Alcuni materiali a noleggio:
            </p>

            {/* Grid of photos */}
            <div className='w-full flex flex-col gap-y-10'>
                {/* photo */}
                <div className="w-full h-[240px] lg:h-[400px]">
                <Swiper
                    navigation={{
                        nextEl: '#swiper-grid-next-el',
                        prevEl: '#swiper-grid-prev-el',
                    }}            
                    slidesPerView={2}
                    grid={{
                        rows: 1,
                    }}
                    spaceBetween={24}
                    modules={[Grid, Navigation]}
                    className="mySwiper w-full"
                >
                    {imagesSwiperGrid.map((item, index) => (
                        <>
                            <SwiperSlide key={'photo-slider-story-'+index} className='h-full bg-white border border-gray-300 p-4 lg:py-8 !mt-0'>
                                <Image src={item} alt={'Enomarket noleggio materiali ' + index} width='600' height='600' className='mx-auto w-auto max-w-full max-h-full h-full object-cover' />
                            </SwiperSlide>
                        </>
                    ))}
                </Swiper>
                </div>
                {/* button */}
                <div className="flex gap-x-6">
                    <ButtonChevron id='swiper-grid-prev-el' orientation='left' />
                    <ButtonChevron id='swiper-grid-next-el' orientation='right' />
                </div>
            </div>

            {/* buttons */}
        </div>
    </Container>
  )
}
