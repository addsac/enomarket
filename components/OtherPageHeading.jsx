import Link from "next/link";

export default function OtherPageHeading({ title = '', description = '', category = '', links = [] }) {
  return (
    <div className="flex flex-col gap-y-10">
        <p className='text-12 lg:text-14 uppercase font-medium font-family-montserrat tracking-wider'> 
            { category }
        </p>
        <div className="w-full h-px bg-gray-300"></div>
        <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="order-2 lg:order-1 flex flex-col gap-y-10 lg:gap-y-16">
                <p className="text-58 lg:text-78 font-family-lora leading-[140%]"> { title } </p>
                <p className="max-w-[680px] text-21 lg:text-25 text-gray-700 font-family-lora leading-[170%]"> { description } </p>
            </div>
            <div className="order-1 lg:order-2 flex items-center gap-x-3 text-16 mb-8">
                { links.map((link, index) => (
                    <>
                        { index != links.length - 1 
                            ? <Link href={link.href} className="text-gray-700"> {link.label} </Link> 
                            : <p className="text-gray-500"> {link.label} </p> }

                        { index != links.length - 1 && <div className="text-gray-500"> / </div> }
                    </>
                ))}
            </div>
        </div>
    </div>
  )
}
