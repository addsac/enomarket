import IconChevDown from '@/public/icons/chev-down.svg'
import IconMenu from '@/public/icons/menu.svg'
import ButtonPrimary from '@/components/ui/ButtonPrimary'
import Link from 'next/link'
import { useDetectClickOutside } from 'react-detect-click-outside'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

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

  // animation for priduct list modal modal menu
    const [modalMobileProductListBool, setModalMobileProductListBool] = useState(false)

    const variantsModalProductMobile = {
        hidden: {
            opacity: 0,
            y: -2,
            height: 0,
            padding: '0 12px'
        },
        visible: {
            opacity: 1,
            y: 0,
            height: 'auto',
            padding: '12px 12px'
        }
    }

  return (
    <>
        {/* Modal mobile menu */}
        <div 
            ref={modalMenuMobile} 
            className="fixed -translate-x-full z-50 inset-0 h-screen max-h-screen overflow-y-scroll bg-black transition duration-300 ease-in-out px-6 pt-16 pb-24"
        >
            <div className="relative flex flex-col gap-y-5 text-21 text-white">
                {/* button close modal */}
                <button onClick={() => toggleModalMobile()} className="absolute right-0 border border-white w-10 h-10 transition rounded-full text-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" class="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>                       
                </button>

                <Link href='/'>
                    Home
                </Link>
                <div className='flex flex-col'>
                    <button 
                        onClick={() => setModalMobileProductListBool(!modalMobileProductListBool)} 
                        className='flex items-center gap-x-2'
                    >
                        <p className='text-white'>
                            Prodotti
                        </p>
                        <span className='w-5 h-5 stroke-[1.5]'>
                            <IconChevDown />
                        </span>
                    </button>
                    <motion.div 
                        animate={modalMobileProductListBool ? 'visible' : 'hidden'}
                        variants={variantsModalProductMobile}
                        className='flex flex-col pl-5 text-18'
                    >   
                        {products.map((product) => (
                            <div className='mt-3'>
                                <Link 
                                    key={'modal-mobile-product-list-' + product.sys.id}
                                    href={'/prodotti/'+product.fields.nome.replace(' ', '-').toLowerCase()} 
                                >
                                    {product.fields.nome}
                                </Link>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <Link href='/attrezzature'>
                    Attrezzature
                </Link>
                <Link href='/impianti-di-spillatura'>
                    Impianti di spillatura
                </Link>
                <Link href='/' target={'_blank'}>
                    Shop
                </Link>
                <div className='my-4'>
                    <ButtonPrimary 
                        text='Contattaci' 
                        href="/contatti" 
                        size={'lg'} 
                        white={true} 
                    />
                </div>
                
                <div className='my-4 h-px w-full bg-white/20'></div>

                <div className="flex flex-col gap-y-4">
                    <p className="text-16 text-white"> Dove trovarci </p>
                    <div className='flex flex-col gap-y-4'>
                        <Link href="https://goo.gl/maps/wyfBuBSZE3s7tw8x9" target="_blank" rel='nofollow' className="text-14 lg:text-16 text-gray-400 hover:text-white"> 
                            Fontaniva (PD) <br /> via Chiesa 107, <br /> Italia - 35014 
                        </Link>
                        <p className="text-14 lg:text-16 text-gray-400"> 
                            Da lunedì al venerdì:  <br /> 9.00 - 13.00 | 14.00 - 18.30
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-y-4">
                    <p className="text-16 text-white"> Contatti </p>
                    <div className='flex flex-col gap-y-4'>
                        <Link href="tel:0495971928" className="text-14 lg:text-16 text-gray-400"> 
                            Telefono: 0495971928
                        </Link>
                        <Link href="tel:3202144248" className="text-14 lg:text-16 text-gray-400 hover:text-white"> 
                            Cellulare: 3202144248
                        </Link>
                        <Link href="mailto:info@enomarket.eu" className="text-14 lg:text-16 text-gray-400 hover:text-white"> 
                            Informazioni: info@enomarket.eu
                        </Link>
                        <Link href="mailto:ordini@enomarket.eu" className="text-14 lg:text-16 text-gray-400 hover:text-white"> 
                            Ordini: ordini@enomarket.eu
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Menu bar */}
        <div 
            className={`${headerState == '1' ? 'bg-gradient-to-b from-gray-900/80 to transparent text-white' : 'bg-yellow-50 border-b border-gray-300 text-gray-900'} fixed top-0 w-full text-18 flex justify-between items-center px-6 md:px-16 py-4 md:py-6 z-20`}
        >
            {/* logo */}
            <div className='whitespace-nowrap w-[140px] lg:w-[255px] h-14 flex items-center'>
                <h3 className='text-21'> Enomarket </h3>
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
                <button
                    onClick={() => toggleModalMobile()} 
                    className={`lg:hidden group ${headerState == '1' ? 'button-icon-dark' : 'button-icon-white'}`}
                >
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
