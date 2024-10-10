/**
 * @copyright 2024 menma
 * @license Apache2.0
 */

import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP,ScrollTrigger)

/**
 *   components   
*/

import Header from './components/header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {

    // useGSAP(()=>{
    //     const elements = gsap.utils.toArray('.reveal-up');
    //     elements.forEach((element)=>{
    //         gsap.to(element,{
    //             scrollTrigger:{
    //                 trifger: element,
    //                 scrub:true,
    //                 markers:true,
    //             },
    //             y:0,
    //             opacity:1,
    //             duration:1,
    //             ease:'power2.out'
    //         })    
    //     });
    // }); 

    return (
        <ReactLenis root>
            <Header/>
            <main>
                <Hero/>
                <About/>
                <Skill/>
                <Work/>
                <Contact/>
            </main>
            <Footer/>
        </ReactLenis>
    )
}

export default App