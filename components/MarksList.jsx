import Image from 'next/image'
// import IconArrowRight from '../public/icons/chev-right.svg'

export default function MarksList({ marks = [] }) {
  return (
    <div className="grid grid-cols-12 gap-6">
        {/* <div className="col-span-12">
            <p className="text-21 lg:text-25 font-family-lora">I nostri marchi disponibili </p>
        </div> */}
        {marks.map((item, index) => (
            <div 
                key={item.fields.nome + '-' + index}
                className="relative col-span-6 md:col-span-4 lg:col-span-3 2xl:col-span-2 p-4 aspect-square bg-white border border-gray-300 group flex-center"
            >
                <Image
                    src={'https:'+item.fields.foto.fields.file.url}
                    width="250"
                    height="250"
                    alt={item.fields.nome + ' marchio disponibile su Enomarket '}
                    className="h-auto max-h-full w-full" 
                />

                {/* hoverlay on hover */}
                {/* <a href={item.fields.sito} target={'_blank'} rel="noreferrer" className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition duration-200 cursor-pointer">
                    <div className="absolute inset-0 flex-center p-4 text-center">
                        <p className="text-white text-16 lg:text-21 font-family-lora opacity-0 group-hover:opacity-100 transition duration-200">
                            Apri il sito del produttore 
                            <IconArrowRight className="inline-block w-4 h-4 ml-2 stroke-2" />
                        </p>
                    </div>
                </a> */}
            </div>
        ))}
    </div>
  )
}
