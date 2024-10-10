/**
 * @copyright 2024 menma
 * @license Apache2.0
 */


import SkillCard from "./SkillCard";

const skillItem = [
        {
        imgSrc: '/images/figma.svg',
        label: 'Figma',
        desc: 'Design tool'
        },
        {
        imgSrc: '/images/css3.svg',
        label: 'CSS',
        desc: 'User Interface'
        },
        {
        imgSrc: '/images/javascript.svg',
        label: 'JavaScript',
        desc: 'Interaction'
        },
        {
        imgSrc: '/images/nodejs.svg',
        label: 'NodeJS',
        desc: 'Web Server'
        },
        {
        imgSrc: '/images/php3.png',
        label: 'PHP',
        desc: 'Backend'
        },
        {
        imgSrc: '/images/laravel.png',
        label: 'Laravel',
        desc: 'PHP Framework'
        },
        {
        imgSrc: '/images/react.svg',
        label: 'React',
        desc: 'Framework'
        },
        {
        imgSrc: '/images/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
        },
];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headerline-2 reveal-up">
                    Essential Tools I use
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                I have summarized the languages and tools that I have used in my experience so far.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({imgSrc,label,desc},key)=>
                        (
                            <SkillCard
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                classes="reveal-up"
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill