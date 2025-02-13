import ButtonSecondary from './ui/ButtonSecondary'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import Balancer from 'react-wrap-balancer'

export default function Slider({ sliderData }) {
  return (
    <div className='relative w-screen h-[calc(100vh-24px)]'>

        <div className="z-10 absolute bottom-[40px] lg:bottom-[100px] right-[24px] lg:right-[100px]">
          <div className="pagination flex"></div>
        </div>

        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '.pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="swiper-pagination-bullet"></span>`
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {sliderData.map( item => (
            <div key={item.sys.id}>
              <SwiperSlide className='relative bg-gray-900'>
                {/* gradient left */}
                <div className="absolute z-[-1] top-0 bottom-0 w-[500px] bg-gradient-to-r from-gray-900/80 to-transparent"></div>

                <img 
                  src={'https:' + item.fields.foto.fields.file.url} 
                  alt="" 
                  width="1200"
                  height="1200"
                  className="z-[-2] absolute w-full h-full object-cover opacity-40" 
                  />
    
                <div className="w-full h-full grid grid-cols-12 gap-x-[17px] md:gap-x-6 px-6 md:px-16 pb-[40px] lg:pb-[100px]">
                  <div className="col-span-12 lg:col-span-8 h-full flex flex-col justify-end gap-y-10">
                    <p className='uppercase text-16 lg:text-18 font-familiy-monserrat font-medium text-yellow-400 -mb-2'> { item.fields.categoria } </p>
                    <p className='text-[32px] lg:text-58 font-family-lora text-white leading-[130%]'> 
                      <Balancer>
                        { item.fields.titolo }
                      </Balancer>
                    </p>
                    <div className='mt-2'>
                      <ButtonSecondary
                        text={ item.fields.bottone }
                        href={ item.fields.link }
                        size='lg'
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
    </div>
  )
}
