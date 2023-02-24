import Container from '@/components/Container'
import ButtonChevron from './ui/ButtonChevron'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Navigation } from 'swiper'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/grid'

export default function Story() {
  const imagesSwiperGrid = [
    '/images/swiper-grid-1.jpg',
    '/images/swiper-grid-2.jpg',
    '/images/swiper-grid-3.jpg',
  ]

  return (
    <>
        <Container>
            {/* Text */}
            <div className='grid grid-cols-12 gap-x-6 gap-y-10'>
                <div className="col-span-12">
                    <p className='text-14 uppercase font-medium font-family-montserrat tracking-wider'> La nostra Storia </p>
                </div>
                <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-10">
                    <div className="w-full h-px bg-gray-300"></div>
                    <p className="text-25 font-family-lora">
                        Da più di 40 anni, noi di Enomarket ci occupiamo di distriubuire alle aziende del Nord Italia vini, birre, distillati e beverage provenienti tutto il mondo.
                        Siamo inoltre specializzati in servizi come il noleggio di attrezzature e installazioni di impianti di spillatura.
                    </p>
                </div>
                <div className='col-span-12 lg:col-span-6 grid grid-cols-12 gap-x-6 gap-y-10'>
                    <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-10">
                        <div className="w-full h-px bg-gray-300"></div>
                        <p className="text-25 font-family-lora"> 150+ Staff </p>
                        <p className="text-14 text-gray-700">
                            With an eclectic and brilliant mix of individuals, AvroKO’s family is a wonderful and diverse melting pot of visionary interior designers, architects, lighting specialists, artists, furniture crafters, and business leaders.
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-10">
                        <div className="w-full h-px bg-gray-300"></div>
                        <p className="text-25 font-family-lora"> 5 Uffici </p>
                        <p className="text-14 text-gray-700">
                            With an eclectic and brilliant mix of individuals, AvroKO’s family is a wonderful and diverse melting pot of visionary interior designers, architects, lighting specialists, artists, furniture crafters, and business leaders.
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-10">
                        <div className="w-full h-px bg-gray-300"></div>
                        <p className="text-25 font-family-lora"> Tutto il Nord Italia </p>
                        <p className="text-14 text-gray-700">
                            With an eclectic and brilliant mix of individuals, AvroKO’s family is a wonderful and diverse melting pot of visionary interior designers, architects, lighting specialists, artists, furniture crafters, and business leaders.
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-10">
                        <div className="w-full h-px bg-gray-300"></div>
                        <p className="text-25 font-family-lora"> 40+ Anni di esperienza </p>
                        <p className="text-14 text-gray-700">
                            With an eclectic and brilliant mix of individuals, AvroKO’s family is a wonderful and diverse melting pot of visionary interior designers, architects, lighting specialists, artists, furniture crafters, and business leaders.
                        </p>
                    </div>
                </div>
            </div>
        

            {/* Images */}
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
                        <SwiperSlide key={'photo-slider-story-'+index} className='h-full bg-gray-100 !mt-0'>
                            <Image src={item} alt={'Enomarket story ' + index} width='600' height='600' className='w-full h-full object-cover' />
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>
                {/* button */}
                <div className="flex gap-x-6">
                    <ButtonChevron id='swiper-grid-prev-el' orientation='left' />
                    <ButtonChevron id='swiper-grid-next-el' orientation='right' />
                </div>
            </div>
        </Container>    
    </>
  )
}
