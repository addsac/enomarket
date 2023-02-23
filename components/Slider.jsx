import ButtonSecondary from './ui/ButtonSecondary'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Slider({ sliderData }) {
  return (
    <div className='relative w-screen h-[calc(100vh-40px)]'>

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
             <SwiperSlide className='relative bg-gray-900' key={item.sys.id}>
              {/* gradient left */}
              <div className="absolute z-[-1] top-0 bottom-0 w-[500px] bg-gradient-to-r from-gray-900/80 to-transparent"></div>

              <img src={item.fields.foto.fields.file.url} alt="" className="z-[-2] absolute w-full h-full object-cover opacity-40" />
  
              <div className="w-full h-full grid grid-cols-12 gap-x-[17px] md:gap-x-6 px-6 md:px-16 pb-[40px] lg:pb-[100px]">
                <div className="col-span-12 lg:col-span-8 h-full flex flex-col justify-end gap-y-10">
                  <p className='uppercase text-16 lg:text-18 font-familiy-monserrat font-medium text-yellow-400'> { item.fields.categoria } </p>
                  <p className='text-44 lg:text-58 xl:text-78 font-family-lora text-white leading-[130%]'> { item.fields.titolo } </p>
                  <div>
                    <ButtonSecondary
                      text={ item.fields.bottone }
                      href={ item.fields.link }
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}
