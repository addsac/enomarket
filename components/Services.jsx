import Container from '@/components/Container'
import Image from 'next/image'
import ButtonPrimary from '@/components/ui/ButtonPrimary'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

export default function Services({ subtitle, title, description }) {
  return (
    <Container>
        {/* text */}
        <div className='flex flex-col gap-y-10'>
            <p className='text-12 lg:text-14 uppercase font-medium font-family-montserrat tracking-wider'> { subtitle } </p>
            <div className="w-full h-px bg-gray-300"></div>
            <div className="w-full lg:w-1/2 grid grid-cols-12 gap-x-6 gap-y-10">
                <p className="col-span-12 text-28 lg:text-44 font-family-lora leading-[150%]"> 
                  <Balancer>
                    { title }
                  </Balancer>
                </p>
                <p className="col-span-12 text-16 text-gray-700"> { description } </p>
            </div>
        </div>

        {/* services */}
        <div className='grid grid-cols-12 gap-x-6 gap-y-[80px]'>
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-10">
                <Link href="/servizi/impianti-di-spillatura" className='h-[320px] lg:h-[460px] w-full bg-gray-700 group overflow-clip cursor-pointer'>
                  <Image 
                    src="/images/servizi-impianti_di_spillatura.jpg"
                    alt="Enomarket - Servizi - Impianti di spillatura"
                    width="600"
                    height="600"
                    className="w-full h-full object-cover opacity-90 transition group-hover:scale-105 duration-400 ease-out"
                  />
                </Link>

                <div className="flex flex-col gap-y-6">
                  <p className='text-28 lg:text-44 font-family-lora leading-[150%]'> Impianti di spillatura </p>
                  <p className='text-16 text-gray-700'> Siamo esperti in installazione e assistenza oltre alle sanificazioni periodiche degli impianti di spillatura. </p>
                  <div className="lg:mt-8">
                    <ButtonPrimary 
                      text="Scopri di più"
                      href="/servizi/impianti-di-spillatura"
                    />
                  </div>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-10">
                <Link href="/servizi/noleggio-attrezzature" className='h-[320px] lg:h-[460px] w-full bg-gray-700 group overflow-clip cursor-pointer'>
                  <Image 
                    src="/images/servizi-noleggio_attrezzature.jpg"
                    alt="Enomarket - Servizi - Noleggio attrezzature"
                    width="600"
                    height="600"
                    className="w-full h-full object-cover opacity-90 transition group-hover:scale-105 duration-400 ease-out"
                  />
                </Link>

                <div className="flex flex-col gap-y-6">
                  <p className='text-28 lg:text-44 font-family-lora leading-[150%]'> Noleggio attrezzature </p>
                  <p className='text-16 text-gray-700'> Offriamo il servizio di noleggio attrezzature da ristorazione e forniamo materiali di supporto per feste ed eventi. </p>
                  <div className="lg:mt-8">
                    <ButtonPrimary 
                      text="Scopri di più"
                      href="/servizi/noleggio-attrezzature"
                    />
                  </div>
                </div>
            </div>
        </div>
    </Container>
  )
}
