import Container from '@/components/Container'
import ButtonPrimary from '@/components/ui/ButtonPrimary'
import Image from 'next/image'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

export default function Products({ subtitle, title, description, array }) {
  return (
    <Container>
        {/* text */}
        <div className='flex flex-col gap-y-10'>
            <p className='text-12 lg:text-14 uppercase font-medium font-family-montserrat tracking-wider'> 
                <Balancer>
                    { subtitle } 
                </Balancer>
            </p>
            <div className="w-full h-px bg-gray-300"></div>
            <div className="w-full grid grid-cols-12 gap-x-6 gap-y-10">
                <p className="col-span-12 lg:col-span-6 text-28 lg:text-44 font-family-lora leading-[150%]"> 
                    <Balancer>
                        { title }
                    </Balancer>
                </p>
                <p className="col-span-12 lg:col-span-6 text-16 text-gray-700"> { description } </p>
            </div>
        </div>

        {/* photos */}
        <div className='grid grid-cols-12 gap-x-6 gap-y-[125px]'>
            {array.map( item => (
                <div
                    key={item.sys.id} 
                    className="col-span-6 lg:col-span-4 flex flex-col gap-y-6"
                >
                    <Link
                        href={'/prodotti/'+item.fields.nome.replace(' ', '-').toLowerCase()}
                        className='bg-gray-700 w-full h-[300px] lg:h-[600px] overflow-clip group cursor-pointer'
                    >
                        <img 
                            src={'https:'+item.fields.foto.fields.file.url} 
                            alt={item.fields.foto.fields.file.name}
                            width="600"
                            height="600"
                            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-400 ease-out" 
                        />
                    </Link>
                    <p className='text-28 lg:text-44 font-family-lora leading-[150%]'> { item.fields.nome } </p>
                    <div className='lg:mt-4'>
                        <ButtonPrimary 
                            text="Vedi i Marchi"
                            href={'/prodotti/'+item.fields.nome.replace(' ', '-').toLowerCase()}
                        />
                    </div>
                </div>
            ))}
        </div>
    </Container>
  )
}
