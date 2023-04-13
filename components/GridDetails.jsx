import Balancer from 'react-wrap-balancer'

import IconPin from '@/public/icons/pin.svg'
import IconShield from '@/public/icons/shield.svg'
import IconClock from '@/public/icons/clock.svg'

export default function GridDetails({ array }) {
    return (
        <div className="grid grid-cols-12 gap-y-8 gap-x-6">
            {array.map( item => (
                <div key={'general-info-'+item.title.replace(' ', '-').trim()} className="col-span-12 lg:col-span-4 text-center border border-gray-300 flex flex-col items-center gap-y-6 px-6 py-10">
                    <div className="w-[80px] lg:w-[145px] h-[80px] lg:h-[145px] rounded-full bg-yellow-200 flex-center">
                        <span className="w-8 lg:w-12 h-8 lg:h-12 text-yellow-800">
                            { item.icon == 'pin' && <IconPin /> }
                            { item.icon == 'shield' && <IconShield /> }
                            { item.icon == 'clock' && <IconClock /> }
                        </span>
                    </div>
                    <p className='text-21 lg:text-25 font-family-lora leading-[140%]'> 
                        <Balancer>
                            {item.title} 
                        </Balancer>
                    </p>
                    <p className='text-14 text-gray-700'> 
                        <Balancer>
                            {item.description} 
                        </Balancer>
                    </p>
                </div>
            ))}
        </div>
    )
}