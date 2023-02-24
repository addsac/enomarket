import { motion } from "framer-motion"

export default function ModalFormSuccess({ texts, handleClick }) {
  return (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        class="z-50 fixed inset-0 overflow-y-scroll"
    >
        <div
            onClick={() => handleClick()} 
            class="fixed inset-0 bg-gray-800/50 backdrop-blur-sm shadow-sm cursor-pointer"
        ></div>
        <div class="w-[calc(100%-48px)] h-auto max-w-[500px] rounded-[8px] bg-white absolute top-6 lg:top-16 left-1/2 transform translate-x-[-50%] p-10">
            <div class="flex items-center justify-between">
                <p class="text-25 font-family-lora text-gray-900"> Messaggio inviato!</p>
                <button onClick={() => handleClick()} className="bg-white w-10 h-10 border hover:bg-gray-200 transition rounded-full text-gray-900 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" class="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>                       
                </button>
            </div>
            <p class="text-18 text-gray-500 leading-[170%] mt-4 pr-2"> Ti ringraziamo per averci contattato, cercheremo di risponderti il prima possibile non appena avremo valutato la tua richiesta. </p>
            <p class="text-16 text-gray-900 mt-16">Questo è il resoconto del tuo messaggio</p>
            <div class="w-full bg-gray-50 border rounded-[5px] mt-3 p-4 flex flex-col gap-y-1 text-14 text-gray-900">
                <p> Nome: {texts.name} </p>
                <p> Azienda: {texts.company} </p>
                <p> Email: {texts.email} </p>
                <p> Messaggio: {texts.message} </p>
            </div>
        </div>
    </motion.div>
  )
}
