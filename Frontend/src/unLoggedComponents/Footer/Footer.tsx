import style from '../../styles/Unloged.module.css'
import { IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp, IoMdDownload } from "react-icons/io";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className='flex justify-evenly flex-1 text-base text-center'>
        <div className=' w-52'>
          <h2>Contacto</h2>
          <ul>
            <li className='flex items-center justify-center'><IoLogoWhatsapp />639-549-48-90</li>
            <li>brayansigala21@gmail.com</li>
          </ul>
        </div>
        <div className=' w-52'>
          <h2>Sobre Nosotros</h2>
          <p></p>
        </div>
        <div className=' w-52'>
          <h2>Redes</h2>
          <ul className={style['footer-list']}>
            <li><a href="">Facebook</a></li>
            <li><a href="">Github</a></li>
            <li><a href="">Linkedin</a></li>
            <li><a href="">Intsgram</a></li>
          </ul>
        </div>
      </div>

      <div className='flex h-1/3 shadow-inner justify-between' style={{ background: '#20212c' }}>
        <div className='mt-5 ml-7 hover:shadow-2xl mb-6 rounded-lg px-2'>
          <button className=''>Descargar CV</button>
          <div className=' flex justify-center mt-2'> <IoMdDownload /></div>
        </div>
        <div className=' flex mt-5 mr-7 gap-1 text-2xl'>
          <IoLogoFacebook />
          <IoLogoGithub />
          <IoLogoLinkedin />
          <IoLogoInstagram />
        </div>
      </div>
    </div>
  )
}

export default Footer