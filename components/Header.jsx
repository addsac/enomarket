import IconChevDown from '@/public/icons/chev-down.svg'
import ButtonPrimary from '@/components/ui/ButtonPrimary'

export default function Header() {

  const toggleButtonProducts = (bool) => {
    const el = document.querySelector('#button-product-dialog')

    if(bool == 'enter'){
        el.classList.remove('hidden')
        el.classList.add('flex')
        setTimeout(() => {
            el.classList.remove('opacity-0', '-translate-y-2')
        }, 150)
    }
    else if (bool == 'leave'){
        el.classList.add('opacity-0', '-translate-y-2')
        setTimeout(() => {
            el.classList.remove('flex')
            el.classList.add('hidden')
        }, 150)
    }
  }


  return (
    <div className='w-full text-18 flex justify-between items-center px-6 md:px-16 py-4 md:py-6 border-b border-gray-300'>
        {/* logo */}
        <div className='w-[255px] h-14 bg-yellow-900'></div>
        {/* Links */}
        <div className='flex items-center gap-x-8'>
            <div className='relative'>
                <button 
                    onMouseEnter={() => toggleButtonProducts('enter')} 
                    className='flex items-center gap-x-2 h-[54px]'
                >
                    <p>Prodotti</p>
                    <span className='w-5 h-5 stroke-[1.5]'>
                        <IconChevDown />
                    </span>
                </button>

                <div
                    id="button-product-dialog" 
                    className='opacity-0 -translate-y-2 w-[200px] hidden flex-col gap-y-1 p-2 bg-gray-900 absolute left-1/2 top-100 -mt-[2px] [transform:translateX(-50%)] rounded-lg transition duration-150'
                    onMouseLeave={() => toggleButtonProducts('leave')} 
                >
                    <button className="px-[16px] py-[6px] text-16 text-left text-white hover:text-gray-900 hover:bg-yellow-50 rounded">Vino</button>
                    <button className="px-[16px] py-[6px] text-16 text-left text-white hover:text-gray-900 hover:bg-yellow-50 rounded">Birre</button>
                    <button className="px-[16px] py-[6px] text-16 text-left text-white hover:text-gray-900 hover:bg-yellow-50 rounded">Spirits</button>
                    <button className="px-[16px] py-[6px] text-16 text-left text-white hover:text-gray-900 hover:bg-yellow-50 rounded">Bibite</button>
                    <button className="px-[16px] py-[6px] text-16 text-left text-white hover:text-gray-900 hover:bg-yellow-50 rounded">Acqua</button>
                    <button className="px-[16px] py-[6px] text-16 text-left text-white hover:text-gray-900 hover:bg-yellow-50 rounded">Succhi</button>
                </div>
            </div>
            <button className='button-text'>Attrezzature</button>
            <button className='button-text'>Impianti</button>
        </div>
        {/* Buttons */}
        <div className='flex items-center gap-x-8'>
            <button className='button-text'>Shop</button>
            <ButtonPrimary />
        </div>
    </div>
  )
}
