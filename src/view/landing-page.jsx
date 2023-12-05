import OjiHero from '../asset/landingPage.png';

export function LandingPage() {
  return (
    <section className="bg-cover min-h-screen flex items-center justify-start" style={{ backgroundImage: `url(${OjiHero})` }}>
      <div className="intro-container left-[80px] absolute flex-col flex">
        <div className="text-white text-[24px] font-bold font-['Poppins']">Hi, it’s me</div>
        <div className="text-white text-[59px] font-bold font-['Poppins']">Miftah Fauzy</div>
        <div className="text-white text-[12px] font-bold font-['Poppins'] my-5">A Front-End Developer. I design and code user interface. </div>
        <button className="w-[120px] h-11 bg-teal-400 text-white rounded-[10px] text-[15px] font-bold font-['Mochiy Pop One'] my-20">Let's connect</button>
      </div>
    </section>
  );
}
