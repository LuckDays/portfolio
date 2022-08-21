import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer id='contact' className='w-full pt-36 lg:pt-24'>
      <div className='grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 sm:h-[450px] w-full bg-blue-900 bg-opacity-10'>
        <div className='flex items-center justify-center px-16 lg:px-32 py-2'>
          <p className='text-justify w-full'>
            Agradeço pela visita, aqui me despeço e também peço que me faça mais
            visitas pois daqui para frente certamente irei melhorar ainda mais
            minhas habiliades em front-end e quem sabe, partir para o Full Stack
          </p>
        </div>

        <div className='flex flex-col items-center justify-center space-y-10'>
          <div className='flex flex-col gap-5 p-5 md:px-6 sm:p-0'>
            <h2 className='text-3xl'>Fale comigo por estes meios:</h2>
            <ul className='appearance-none flex flex-col lg:flex-row justify-around gap-8'>
              <li className='duration-200 bg-blue-900 bg-opacity-10 md:hover:bg-opacity-25 focus:bg-opacity-30 p-2 rounded-lg px-6 items-center justify-center'>
                <a
                  className='flex gap-6 items-center justify-center'
                  href='https://wa.me/5588992396764'
                  target='_blank'
                >
                  <div className='relative flex items-center justify-center h-10 w-10 bg-colorPrimary bg-opacity-75 rounded-full p-4'>
                    <FaWhatsapp className='absolute' />
                  </div>
                  <p className='text-xl'>Vamos conversar</p>
                </a>
              </li>
              <li className='duration-200 bg-blue-900 bg-opacity-10 md:hover:bg-opacity-25 focus:bg-opacity-30 p-2 rounded-lg px-6 items-center justify-between'>
                <a
                  className='flex gap-6 items-center justify-center'
                  href='https://www.linkedin.com/in/lucas-dias-a3808821b/'
                  target='_blank'
                >
                  <div className='relative flex items-center justify-center h-10 w-10 bg-colorPrimary bg-opacity-75 rounded-full p-4'>
                    <FaLinkedinIn className='absolute' />
                  </div>
                  <p className='text-xl'>Lucas Dias</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
