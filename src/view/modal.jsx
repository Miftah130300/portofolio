import Blackgithub from '../asset/github-black.png'
import BlackInstagram from '../asset/instagram-black.png'
import BlackLinkedin from '../asset/linkedin-black.png'
import { GrClose } from "react-icons/gr";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

export function Modal({ open, close, openedAlert}) {
  const form = useRef();
  const [formError, setFormError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

        // Check if any required fields are empty
        const isEmptyField = Array.from(form.current.elements).some((element) => {
        return element.required && !element.value.trim();
        });

        if (isEmptyField) {
        setFormError("Please fill in all required fields.");
        return;
        }

        // Clear any previous form errors
        setFormError(null);

    // Proceed with sending the email
    emailjs.sendForm('service_lt9es88', 'template_t0n4xvw', form.current, 'HtPeCu-iL-uOrTNE0')
      .then((result) => {
        form.current.reset();
        console.log(result.text);
        console.log('Message sent');
        openedAlert()
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  if (!open) return null;

  return (
    <>
    <div className="max-w-[340px] md:max-w-[420px] xl:max-w-[440px] max-h-[460px] w-full h-full bg-white rounded-[20px] flex fixed inset-0 my-auto shadow-[0_5px_60px_5px_rgba(0,0,0,0.3)] mx-auto">
        <div className='flex flex-col gap-3 justify-center items-center w-full h-full mx-auto mt-3'>
                <ul className="flex bg-transparent mx-auto">
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
          <GrClose className="absolute top-7 right-7 cursor-pointer" onClick={close} />
              <div className="flex justify-center items-center w-full h-[25px] mx-auto">
                  <p className="text-blue-950 font-bold">Or</p>
              </div>
                    <form className="grid items-center w-full h-full p-5 " ref={form} onSubmit={sendEmail}>
                        <div className="grid justify-center items-center xl:flex xl:justify-between">
                            <label className="text-blue-950 font-bold h-7">Name</label>
                            <input className="border border-black w-[300px] rounded-[5px] p-1 h-7" placeholder='Your name' type="text" name="user_name" required />
                        </div>
                          <div className="grid justify-center items-center xl:flex xl:justify-between">
                              <label className=" text-blue-950 font-bold">Email</label>
                              <input className="border border-black w-[300px] rounded-[5px] p-1 h-7" placeholder='Your email' type="email" name="user_email" required />
                          </div>
                          <div className="grid justify-center xl:flex xl:justify-between">
                              <label className=" text-blue-950 font-bold ">Message</label>
                              <textarea className="border border-black w-[300px] rounded-[5px] h-[70px] xl:h-[120px] text-top-align p-1" placeholder='Your message' name="message" required />
                          </div>
                          {formError && <p className="text-red-500">{formError}</p>}
                          <div className="flex justify-center items-center">
                              <input className="w-[120px] h-11 bg-teal-400 text-white 
                              rounded-[10px] text-[15px] font-bold font-['Mochiy Pop One'] mb-2 cursor-pointer 
                              transform transition-transform duration-200 active:scale-95" type="submit" value="Send" />
                          </div>
                    </form>
              </div>
    </div>
    </>
  );
}
