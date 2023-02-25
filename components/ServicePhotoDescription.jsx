import Image from 'next/image'

export default function ServicePhotoDescription({ title = '', description = '', photo = '', order = 1, texts = [] }) {
  return (
    <div className="w-full grid grid-cols-12 gap-x-6">
        <div className={(order == 1 ? 'order-1' : 'order-2') + ' h-full col-span-6 grid grid-cols-6 gap-x-6 items-center justify-center'}>
            <div className="col-span-1"></div>
            { title != '' && (
                <div className="col-span-4 flex flex-col gap-y-10">
                    <p className="text-21 lg:text-25 font-family-lora">
                        { title }
                    </p>
                    <p className="text-16 text-gray-700 leading-[170%]">
                        { description }
                    </p>
                </div>
            )}
            { title == '' && (
                <div className="col-span-4 flex flex-col gap-y-16">
                    {texts.map((item) => (
                        <div className='flex flex-col gap-y-6'>
                            <p className="text-21 lg:text-25 font-family-lora">
                                { item.title }
                            </p>
                            <div className='flex flex-col gap-y-2'>
                                {item.description.map(( text ) => (
                                    <p className="text-16 text-gray-700 leading-[170%]">
                                        { text }
                                    </p> 
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        <div className={(order == 1 ? 'order-2' : 'order-1') + ' h-[800px] py-[125px] col-span-6 grid grid-cols-6 gap-x-6 items-center justify-center bg-yellow-100'}>
            <div className="col-span-1"></div>
            <div className="col-span-4 h-full bg-gray-900">
                <Image src={photo} alt="" height="800" width="800" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-1"></div>
        </div>
    </div>
  )
}
