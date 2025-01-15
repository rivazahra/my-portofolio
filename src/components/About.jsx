const About = () => {
    const aboutItems = [
        {
          label: 'Static & dynamic websites built',
          number: 10, 
        },
        {
          label: 'Months internship experience',
          number: 5, 
        },
      ];
      
      
return (
<section className="section" id="about">
    <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 ">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[70ch]">
            Hey there! I'm Riva, your go-to web developer for crafting websites that aren’t just beautiful but also super easy to use. Got an idea? Let’s team up and turn it into a website you’ll absolutely love! 😊</p>
            <div className="flex flex-wrap items-center gap-4 md:gap-7">
                {aboutItems.map(({ label, number }, key) => (
                <div className="" key={key}>
                    <div className="flex items-center md:mb-2">
                        <span className="text-2xl font-bold md:text-4xl">{number}</span>
                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                    </div>
                    <p className="text-sm text-zinc-400">{label}</p>
                </div>
                ))}
                <img src="/logo.svg" alt="logo"  width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]"/>
            </div>
        </div>
    </div>
</section>
)
}

export default About
