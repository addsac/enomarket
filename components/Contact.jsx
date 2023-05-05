import Container from '@/components/Container'
import ModalFormSuccess from '@/components/ModalFormSuccess'
import ButtonPrimary from './ui/ButtonPrimary'
import { useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Contact() {
  const fullname = useRef()
  const companyName = useRef()
  const email = useRef()
  const message = useRef()

  const [loading, setLoading] = useState('false')
  const [modalSuccessBool, setModalSuccessBool] =  useState(false)

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const checkForm = () => {
    let check = true

    if(message.current.value.trim() === '') {
      message.current.classList.add('!border-red-500')
      message.current.focus()
      check = false
    }
    if(!validateEmail(email.current.value)) {
      email.current.classList.add('!border-red-500')
      email.current.focus()
      check = false
    }
    if(companyName.current.value.trim() === '') {
      companyName.current.classList.add('!border-red-500')
      companyName.current.focus()
      check = false
    }
    
    if(fullname.current.value.trim() === '') {
      fullname.current.classList.add('!border-red-500')
      fullname.current.focus()
      check = false
    }

    return check
  }

  const submitForm = () => {
    if(!checkForm()) return

    setLoading('true')

    if(fullname.current.value !== '' && companyName.current.value !== '' && email.current.value !== '' && message.current.value !== '') {
      const data = {
        fullname: fullname.current.value,
        company_name: companyName.current.value,
        email: email.current.value,
        message: message.current.value
      }

      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
        console.log('ok')

        setTimeout(() => {
          setModalSuccessBool(true)
          setLoading('false')
        }, 1000)
      })
      .catch(err => {
        console.log(err)
        setLoading('false')
      })
    }
  }

  return (
    <>
      <Container>
        {/* text */}
        <div className="flex flex-col gap-y-10 text-center">
          <p className='text-decoration-wide font-family-montserrat'> Entra in Contatto </p>
          <div className="col-span-12 lg:col-span-6"> 
            <p className='mx-auto max-w-[850px] text-28 lg:text-44 font-family-lora leading-[140%]'>
              Contattaci senza impegno, ti basterà riempire i campi sottostanti.
            </p>
          </div>
        </div>
        
        {/* form */}
        <div className='w-full flex flex-col lg:flex-row items-start justify-center gap-x-[80px] lg:gap-x-[125px] gap-y-[80px]'>
          {/* inputs */}
          <div className="w-full lg:w-[680px] flex flex-col gap-y-20">
            <div className="flex flex-col gap-y-6">
              <input 
                onChange={() => fullname.current.classList.remove('!border-red-500')}
                ref={fullname} 
                type="text" 
                name="fullname" className="input-contact-form font-family-lora" 
                placeholder='Nome e congnome' 
              />
              <input
                onChange={() => companyName.current.classList.remove('!border-red-500')}
                ref={companyName} 
                type="text" 
                name="company_name" className="input-contact-form font-family-lora" 
                placeholder='Azienda' 
              />
              <input 
                onChange={() => email.current.classList.remove('!border-red-500')}
                ref={email} 
                type="email" 
                name="email" className="input-contact-form font-family-lora" 
                placeholder='Email' 
              />
              <textarea 
                onChange={() => message.current.classList.remove('!border-red-500')}
                ref={message} 
                placeholder='Messaggio...' 
                className='textarea-contact-form font-family-lora'
              ></textarea>
            </div>
            <div className="flex flex-col gap-y-6">
              <ButtonPrimary
                handleClick={() => submitForm()}
                text='Invia il Messaggio'
                size='lg'
                loading={loading.toString()}
                disabled={loading}
              />
              <p className="text-center text-14 text-gray-500">
                Inviando il messaggio accetti i <Link href='/policy' className='underline'>termini</Link> e di essere ricontattato
              </p>
            </div>
          </div>
          
          {/* conatct links */}
          <div className="flex flex-col gap-y-12 lg:gap-y-16 text-14 lg:text-16">
            <div className="flex flex-col gap-y-4">
              <p className="text-decoration-wide font-family-montserrat"> Luogo </p>
              <a href="https://goo.gl/maps/wyfBuBSZE3s7tw8x9" target="_blank" rel="noreferrer" className="text-link-contact"> via Chiesa 108 – 35014 <br /> Fontaniva (PD), Italia </a>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className="text-decoration-wide font-family-montserrat"> Orari </p>
              <p className="text-gray-700"> Da lunedì al venerdì: <br /> 8.00 - 12.00 | 14.30 - 18.00 </p>
              <p className="text-gray-700"> Sabato: <br /> 9.00 - 12.00 </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className="text-decoration-wide font-family-montserrat"> Contatti </p>
              <a href="tel:0495971928" className="text-link-contact"> Telefono: 0495971928 </a>
              <a href="tel:3202144248" className="text-link-contact"> Cellulare: 3202144248 </a>
              <a href="mailto:info@enomarket.eu" className="text-link-contact"> Informazioni: <br /> info@enomarket.eu </a>
              <a href="mailto:ordini@enomarket.eu" className="text-link-contact"> Ordini: <br /> ordini@enomarket.eu </a>
            </div>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {modalSuccessBool && (
          <ModalFormSuccess 
            texts={{
              name: fullname.current.value.trim(),
              company: companyName.current.value.trim(),
              email: email.current.value.trim(),
              message: message.current.value.trim()
            }}
            handleClick={() => setModalSuccessBool(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
