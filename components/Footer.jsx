import Link from 'next/link'

export default function Footer({ products }) {
    return (
        <div className="bg-gray-900 flex flex-col gap-y-[80px] lg:gap-y-[125px] px-8 lg:px-16 py-12 lg:py-20">
            <div className="flex flex-col gap-y-20">
                {/* Logo and likns */}
                <div className='grid grid-cols-12 gap-x-6 gap-y-12'>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="w-24 lg:w-32 h-24 lg:h-32 bg-white rounded-full"></div>
                    </div>
                    <div className="col-span-6 lg:col-span-2 flex flex-col gap-y-6">
                        <p className="text-decoration-wide font-family-montserrat text-white"> Prodotti </p>
                        <div className="flex flex-col gap-y-4">
                            { products.map((product) => (
                                <Link 
                                    key={'footer-product-link-'+product.sys.id} 
                                    href={'/prodotti/' + product.fields.nome.replace(' ', '-').trim().toLowerCase()} 
                                    className="text-14 lg:text-16 text-gray-400 hover:text-white"
                                > 
                                    { product.fields.nome } 
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-6 lg:col-span-2 flex flex-col gap-y-6">
                        <p className="text-decoration-wide font-family-montserrat text-white"> Altre pagine </p>
                        <div className='flex flex-col gap-y-4'>
                            <Link href='/servizi/impianti-di-spillatura' className="text-14 lg:text-16 text-gray-400 hover:text-white"> 
                                Impianti di spillatura
                            </Link>
                            <Link href='/servizi/noleggio-attrezzature' className="text-14 lg:text-16 text-gray-400 hover:text-white"> 
                                Noleggio attrezature
                            </Link>
                            <Link href='#' className="text-14 lg:text-16 text-gray-400 hover:text-white"> 
                                Shop online
                            </Link>
                            <Link href='/policy' className="text-14 lg:text-16 text-gray-400 hover:text-white"> 
                                Privacy policy
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-6 lg:col-span-2 flex flex-col gap-y-6">
                        <p className="text-decoration-wide font-family-montserrat text-white"> Dove trovarci </p>
                        <div className='flex flex-col gap-y-4'>
                            <Link href="https://goo.gl/maps/wyfBuBSZE3s7tw8x9" target="_blank" rel='nofollow' className="text-14 lg:text-16 text-gray-400 hover:text-white"> 
                                Fontaniva (PD) <br /> via Chiesa 107, <br /> Italia - 35014 
                            </Link>
                            <p className="text-14 lg:text-16 text-gray-400"> 
                                Da luned?? al venerd??:  <br /> 9.00 - 13.00 | 14.00 - 18.30
                            </p>
                        </div>
                    </div>
                    <div className="col-span-6 lg:col-span-2 flex flex-col gap-y-6">
                        <p className="text-decoration-wide font-family-montserrat text-white"> Contatti </p>
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

                {/* Divider */}
                <div className="h-px w-full bg-gray-500"></div>

                {/* Company data and social links */}
                <div className='grid grid-cols-12 gap-x-6 gap-y-16 items-center'>
                        <p className='col-span-12 lg:col-span-4 text-12 text-gray-500'>
                            ?? 2020 ENOMARKET S.R.L. - via Borgo Padova 101/A Cap 31033 Castelfranco Veneto (TV) | P.Iva e C.F. 03590860262 - REA TV - 283023 - PEC: ferrodistribuzione@legalmail.it - Cap. Soc. Euro 102.960,00
                        </p>

                        <div className='col-span-12 lg:col-span-8 flex lg:justify-end gap-x-6'>
                            <Link
                                href="https://pegasodigitalstudio.com"
                                target={'_blank'}
                                rel="noreferrer"
                                className='font-family-montserrat uppercase text-14 text-gray-300 hover:text-white hover:underline'
                            >
                                Sito by Pegaso
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    )
}
