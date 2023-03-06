import IconChevDown from '@/public/icons/chev-down.svg'
import IconMenu from '@/public/icons/menu.svg'
import ButtonPrimary from '@/components/ui/ButtonPrimary'
import Link from 'next/link'
import { useDetectClickOutside } from 'react-detect-click-outside'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

export default function Header({ products }) {

  const closeDropdown = () => {
        const el = document.querySelector('#button-product-dialog')

        el.classList.add('opacity-0', '-translate-y-2')
        setTimeout(() => {
            el.classList.remove('flex')
            el.classList.add('hidden')
        }, 150)
  }

  const ref = useDetectClickOutside({ onTriggered: closeDropdown })
  const modalMenuMobile = useRef()

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

  const toggleModalMobile = () => {
    const check = [...modalMenuMobile.current.classList].includes('-translate-x-full')

    if(check){
        modalMenuMobile.current.classList.remove('-translate-x-full')
    }
    else{
        modalMenuMobile.current.classList.add('-translate-x-full')
    }
  }

  const [headerState, setHeaderState] = useState('1')
  const router = useRouter()

  /* change header state if route path != home in next.js */
    useEffect(() => {
        const check = router.asPath == '/'

        if(check){
            setHeaderState('1')
        }
        else{
            setHeaderState('2')
        }
    }, [router])

  // change header state if scroll > 0
  useEffect(() => {
    const handleScroll = () => {
        const scrollCheck = window.scrollY > 0
        if (scrollCheck) {
            setHeaderState('2')
        } else {
            if(router.asPath == '/'){
                setHeaderState('1')
            }
        }
    }

    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
        document.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <>
        {/* Modal mobile menu */}
        <div 
            ref={modalMenuMobile} 
            onClick={() => toggleModalMobile()}
            className="fixed -translate-x-full z-50 inset-0 bg-black transition duration-300 ease-in-out"
        ></div>
        
        {/* Menu bar */}
        <div 
            className={`${headerState == '1' ? 'bg-gradient-to-b from-gray-900/80 to transparent text-white' : 'bg-yellow-50 border-b border-gray-300 text-gray-900'} fixed top-0 w-full text-18 flex justify-between items-center px-6 md:px-16 py-4 md:py-6 z-20`}
        >
            {/* logo */}
            <div className='whitespace-nowrap w-[140px] lg:w-[255px] h-14 flex items-center'>
                <h3 className='text-21'> Enomarket.eu { headerState } </h3>
            </div>
            {/* Links */}
            <div className='z-50 hidden lg:flex items-center gap-x-8'>
                <div className='relative'>
                    <button 
                        onMouseEnter={() => toggleButtonProducts('enter')} 
                        className='flex items-center gap-x-2 h-[54px]'
                    >
                        Prodotti
                        <span className='w-5 h-5 stroke-[1.5]'>
                            <IconChevDown />
                        </span>
                    </button>

                    <div
                        ref={ref}
                        id="button-product-dialog" 
                        className='opacity-0 -translate-y-2 w-[200px] hidden flex-col gap-y-1 p-2 bg-gray-800 absolute left-1/2 top-100 -mt-[2px] [transform:translateX(-50%)] rounded-lg transition duration-150'
                        onMouseLeave={() => toggleButtonProducts('leave')} 
                    >
                        {products.map( product => (
                            <Link 
                                key={'header-list-' + product.sys.id}
                                href={'/prodotti/'+product.fields.nome.replace(' ', '-').toLowerCase()} 
                                className="px-[16px] py-[6px] text-16 text-left text-white hover:text-gray-900 hover:bg-yellow-50 rounded"
                            > 
                                { product.fields.nome } 
                            </Link> 
                        ))}
                    </div>
                </div>
                <Link href='/servizi/noleggio-attrezzature' className='button-text'>Attrezzature</Link>
                <Link href='/servizi/impianti-di-spillatura' className='button-text'>Impianti di spillatura</Link>
            </div>
            {/* Buttons */}
            <div className='flex items-center gap-x-4 lg:gap-x-8'>
                {/* Button mobile menu */}
                <button onClick={() => toggleModalMobile()} className='lg:hidden group button-icon'>
                    <span className='h-5 w-5 stroke-[1.5] stroke-gray-900'>
                        <IconMenu />
                    </span>
                </button>
                <button className='hidden lg:block button-text'>Shop</button>
                {headerState == '1' ? (
                    <ButtonPrimary text='Contattaci' href="/contatti" size={'sm'} white={true} />
                ) : (
                    <ButtonPrimary text='Contattaci' href="/contatti" size={'sm'} />
                )}
            </div>
        </div>
    </>
  )
}
