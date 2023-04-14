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
    '/images/swiper-grid-4.jpg',
    '/images/swiper-grid-5.jpg',
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
                    <p className="text-25 font-family-lora md:pr-8">
                        Da più di 50 anni, noi di Enomarket ci occupiamo di distriubuire i migiori marchi di vini, birre, distillati e beverage provenienti tutto il mondo.
                        Siamo inoltre specializzati in servizi come il noleggio di attrezzature e installazioni di impianti di spillatura.
                    </p>
                </div>
                <div className='col-span-12 lg:col-span-6 grid grid-cols-12 gap-x-6 gap-y-10'>
                    <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-10">
                        <div className="w-full h-px bg-gray-300"></div>
                        <p className="text-25 font-family-lora leading-[140%]"> 54+ Anni di Attività </p>
                        <p className="text-14 text-gray-700">
                            Siamo attiviti dal 1969, fin dal primo momento ci siamo voluti specializzare in prodotti di qualità per offrire il meglio ai nostri clienti. Da più di 50 anni fino a oggi, per il settore del beverage.
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-10">
                        <div className="w-full h-px bg-gray-300"></div>
                        <p className="text-25 font-family-lora leading-[140%]"> 800+ Prodotti in catalogo </p>
                        <p className="text-14 text-gray-700">
                        Abbiamo disponibili in catalogo più di 800 prodotti, tra cui vini, birre, distillati e beverage provenienti dai più grandi Brand di tutto il mondo, per garantire alta qualità e un’ottima varietà.
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-10">
                        <div className="w-full h-px bg-gray-300"></div>
                        <p className="text-25 font-family-lora leading-[140%]"> Servizi di spillatura e noleggio </p>
                        <p className="text-14 text-gray-700">
                            Installiamo impianti di Spillatura in comodato d’uso gratuito. Riforniamo il tuo Evento di varie attrezzature sia in comodato d’uso, che a noleggio.
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-10">
                        <div className="w-full h-px bg-gray-300"></div>
                        <p className="text-25 font-family-lora leading-[140%]"> Corso di formazione </p>
                        <p className="text-14 text-gray-700">
                            Per i nostri clienti, offriamo corsi gratuiti di formazione per la preparazione di spirits, per la miscelatura, e per servizi di splillatura professionale.
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
                            <Image src={item} alt={'Enomarket story ' + index} width='1000' height='1000' className='w-full h-full object-cover' />
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
