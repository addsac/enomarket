import Container from '@/components/Container'
import GridDetails from '@/components/GridDetails'

export default function GeneralInfo({ subtitle, title, array }) {
  return (
    <Container>
        {/* testi */}
        { title && (
            <div className="flex flex-col gap-y-10">
                <p className='text-12 lg:text-14 uppercase font-medium font-family-montserrat tracking-wider'> { subtitle } </p>
                <div className="w-full h-px bg-gray-300"></div>
                <p className="lg:w-1/2 text-28 lg:text-44 font-family-lora leading-[140%]"> { title } </p>
            </div>
        )}

        {/* grid */}
        <GridDetails array={array} />
        
    </Container>
  )
}
