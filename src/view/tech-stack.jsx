import html from '../asset/html-5.png'
import css from '../asset/css-3.png'
import javascript from '../asset/js.png'
import reactjs from '../asset/logo192.png'
import figma from '../asset/figma.png'
import tailwind from '../asset/tailwindcss.png'

export function TechStack() {
  return (
    <section className="bg-white h-full w-full min-h-[852px]" id='techstack'>
      <div className="grid max-w-[350px] md:max-w-[600px] mt-[67px] justify-center mx-auto w-full">
        <h1 className="text-blue-950 font-bold font-['Poppins'] text-[20px] xl:text-[30px] mx-auto m-5 mt-[50px]">Tech Stack and Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full h-full max-h-[800px] max-w-[500px] rounded-[20px] bg-white shadow-xl p-5 mt-[67px]">
          <div className='flex flex-col justify-center items-center'>
              <img className='m-5 h-full w-full max-w-[100px] max-h-[100px] p-3' src={html} alt='html logo'/>
              <label className='font-bold text-blue-950'>HTML</label>
          </div>
          <div className='flex flex-col justify-center items-center'>
              <img className='m-5 h-full w-full max-w-[100px] max-h-[100px] p-3' src={css} alt='css logo'/>
              <label className='font-bold text-blue-950'>CSS</label>
          </div>
          <div className='flex flex-col justify-center items-center'>
              <img className='m-5 h-full w-full max-w-[100px] max-h-[100px] p-3' src={javascript} alt='javascript logo'/>
              <label className='font-bold text-blue-950'>JavaScript</label>
          </div>
          <div className='flex flex-col justify-center items-center'>
              <img className='m-5 h-full w-full max-w-[100px] max-h-[100px] p-3' src={reactjs} alt='reactjs logo'/>
              <label className='font-bold text-blue-950'>ReactJS</label>
          </div>
          <div className='flex flex-col justify-center items-center'>
              <img className='m-5 h-full w-full max-w-[120px] max-h-[85px] p-3' src={tailwind} alt='tailwindcss logo'/>
              <label className='font-bold text-blue-950'>TailwindCSS</label>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img className='m-5 h-full w-full max-w-[100px] max-h-[100px] p-3' src={figma} alt='figma logo'/>
            <label className='font-bold text-blue-950'>Figma</label>
          </div>          
        </div>
      </div>
    </section>
  );
}
