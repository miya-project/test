/**
 * @copyright 2024 menma
 * @license Apache2.0
 */


const aboutItems = [
    {
        label: 'Project done',
        number: 10
    },
    {
        label: 'Years of experience',
        number: 2
    }
];

const About = () => {
    return (
        <section
            id="about"
            className="section"
        >
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    My name is Yutaro Miyamoto and I entered aprogramming school in july 2022,
                    I started working for a web development company and built my career as a back-end-engineer
                    and project manager. while working as a back-end engineer, I became insterested in front-end development
                    and started learning it on my own. I developed this portfolio useing react.

                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({label,number},key)=>(
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }

                        <img 
                        src="/images/logo.svg" 
                        alt="logo" 
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40px]"
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About