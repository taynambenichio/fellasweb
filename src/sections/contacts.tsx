import { CalendarClockIcon } from "lucide-react";
import { FaFacebook, FaInstagram, FaPhoneVolume, FaWhatsapp } from "react-icons/fa";

export function Contacts() {
  return (
    <div className="bg-neutral-900 w-full h-full">
      <div className="flex flex-col">
        <div className="flex flex-col mt-2 mb-5 items-center">
          <h1 className="font-Hilborn text-2xl text-red-600 text-shadow-black">Contatos</h1>
          <div className="w-14 h-0.5 bg-red-600 "></div>
          <p className="text-white text-lg mt-2">Entre em contato conosco</p>
          <p className="text-white">Saiba como nos encontrar</p>
        </div>
        <div className="lg:flex lg:space-y-0 space-y-5 mx-auto">
          <div className="flex flex-col justify-center gap-5">
            <h1 className="text-xl font-Hilborn text-white mx-auto">Moradas</h1>
            <div className="px-10 flex gap-5 text-white">
              <div className="flex flex-col gap-1">
                <h1 className="font-Hilborn text-md text-white">Unidade Alameda</h1>
                <p>Al. Dom Afonso Henriques, 47A</p>
                <p>1001-23 - Lisboa</p>
                <p className="flex gap-1 items-center"><FaPhoneVolume className="size-4 text-red-600" />215 860 238</p>
                <p className="flex gap-1 items-center"><FaWhatsapp className="size-4 text-green-600" />215 860 238</p>
                <div className="hover:scale-105">
                  <a href="https://sites.appbarber.com.br/fellasbarbersho-auei" target="_blank" className='animatecss animatecss-jackInTheBox shadow-lg shadow-red-600 p-2 text-white bg-red-600 rounded-none hover:bg-red-500 flex gap-2 items-center justify-center' onClick={() => window.location.reload()}>
                    AGENDAR AGORA <CalendarClockIcon className='lg:size-5 size-10' />
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="font-Hilborn text-md text-white">Unidade Campo Grande</h1>
                <p>Campo Grande 296, 296B</p>
                <p>1700-097 - Lisboa</p>
                <p className="flex gap-1 items-center"><FaPhoneVolume className="size-4 text-red-600" />215 904 241</p>
                <p className="flex gap-1 items-center"><FaWhatsapp className="size-4 text-green-600" />910 452 767</p>
                <div className="hover:scale-105">
                  <a href="https://sites.appbarber.com.br/fellasbarberpre-81lr" target="_blank" className='animatecss animatecss-jackInTheBox shadow-lg shadow-red-600 p-2 text-white bg-red-600 rounded-none hover:bg-red-500 flex gap-2 items-center justify-center' onClick={() => window.location.reload()}>
                    AGENDAR AGORA <CalendarClockIcon className='lg:size-5 size-10' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto items-center space-y-2">
            <h1 className="text-xl font-Hilborn text-white">Redes Sociais</h1>
            <div className="text-white space-y-2">
              <p onClick={() => alert()} className="flex gap-2 cursor-pointer items-center hover:scale-105"><FaFacebook className="size-5" />FellasBarberAlameda</p>
              <p onClick={() => alert()} className="flex gap-2 cursor-pointer items-center hover:scale-105"><FaInstagram className="size-5" />@fellasbarber.pt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}