
import Blackgithub from '../asset/github-black.png'
import BlackInstagram from '../asset/instagram-black.png'
import BlackLinkedin from '../asset/linkedin-black.png'

export function Modal(){
    return(
        <div className="bg-white w-full h-full max-w-[490px] max-h-[515px] rounded-[20px] shadow-xl">
            <div>
                <ul className="flex absolute bg-transparent lg:m-6 mx-auto ">
                    <li className='m-4'>
                        <a href='https://www.linkedin.com/in/miftahfauzy' target="_blank" rel="noopener noreferrer">
                            <img className='h-full w-full max-w-[35px] max-h-[35px]' src={BlackLinkedin} alt='linkedin logo' />
                        </a>
                    </li>
                    <li className='m-4'>
                        <a href="https://github.com/Miftah130300"  target="_blank" rel="noopener noreferrer">
                            <img className='h-full w-full max-w-[35px] max-h-[35px]' src={Blackgithub} alt='github logo' />
                        </a>
                    </li>
                    <li className='m-4'>
                        <a href="https://www.instagram.com/miftaahzy/"  target="_blank" rel="noopener noreferrer">
                            <img className='h-full w-full max-w-[35px] max-h-[35px]' src={BlackInstagram} alt='instagram logo' />
                        </a>
                    </li>                   
                </ul>
            </div>
        </div>
    )
}