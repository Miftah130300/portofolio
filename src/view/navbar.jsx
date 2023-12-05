import Github from '../asset/github.png'
import Instagram from '../asset/instagram.png'
import Linkedin from '../asset/linkedin.png'

export function Navbar() {
  return (
    <nav className="container mx-auto w-full object-cover">
      <ul className="flex absolute justify-end bg-transparent right-[80px] top-[20px]">
        <li className='m-4'>
            <a href='https://www.linkedin.com/in/miftahfauzy' target="_blank" rel="noopener noreferrer">
                <img className='h-[35px] w-[35px]' src={Linkedin} alt='linkedin logo' />
            </a>
        </li>
        <li className='m-4'>
            <a href='https://www.instagram.com/miftaahzy/' target="_blank" rel="noopener noreferrer">
                <img className='h-[35px] w-[35px]' src={Instagram} alt='instagram logo' />
            </a>
        </li>
        <li className='m-4 mr-4'>
            <a href='https://github.com/Miftah130300' target="_blank" rel="noopener noreferrer">
                <img className='h-[35px] w-[35px]' src={Github} alt='github logo' />
            </a>
        </li>
      </ul>
    </nav>
  );
}
