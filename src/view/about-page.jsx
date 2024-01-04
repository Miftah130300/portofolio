import aboutpage from '../asset/about-page.png';

export function AboutPage({onClick}) {
  return (
    <section className="bg-center sm:bg-cover min-h-screen flex justify-center w-full" style={{ backgroundImage: `url(${aboutpage})` }} id='about'>
      <div className='flex flex-col w-full my-auto'>
        <h1 className='text-[18px] md:text-lg xl:text-xl 2xl:text-2xl text-white font-semibold w-[100%] md:w-[90%] lg:w-[100%] xl:w-[100%] 2xl:w-[60%] bottom-[50%] p-3 text-center'>
          In my halt time, I love joining online courses, walking around city, and going to the gym. <br/>I plan to explore Europe.
        </h1>
        <button className="w-[120px] h-11 bg-teal-400 hover:bg-teal-600 text-white rounded-[10px] text-[15px] font-bold font-['Mochiy Pop One'] mt-[20px] mx-auto" onClick={onClick}>Let's connect</button>
      </div>
    </section>
  );
}
