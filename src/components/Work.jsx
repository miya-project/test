/**
 * @copyright 2024 menma
 * @license Apache2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
        {
        imgSrc: '/images/project-1.jpg',
        title: 'Movie website',
        tags: ['Coding'],
        projectLink: 'https://github.com/miya-project/movie-website'
        },
        {
        imgSrc: '/images/project-2.jpg',
        title: 'Company website',
        tags: ['Coding'],
        projectLink: 'https://github.com/miya-project/company-website'
        },
        {
        imgSrc: '/images/project-3.jpg',
        title: 'Recipe app',
        tags: ['Coding'],
        projectLink: '#'
        },
        {
        imgSrc: '/images/project-4.jpg',
        title: 'Cafe website',
        tags: ['Coding'],
        projectLink: 'https://github.com/miya-project/cafe-website'
        },
        {
        imgSrc: '/images/project-5.jpg',
        title: 'Career website',
        tags: ['Coding'],
        projectLink: 'https://github.com/miya-project/career-website'
        },
        {
        imgSrc: '/images/project-6.jpg',
        title: 'vCard Personal portfolio',
        tags: ['Coding'],
        projectLink: '#'
        },
    ];
    

const Work = () => {
    return (
        <section
            id="work"
            className="section"
        >
            <div className="container">
                <h2 className="headerline-2 mb-8">
                    My portfolio highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({imgSrc,title,tags,projectLink},key)=>(
                        <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work