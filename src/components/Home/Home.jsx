import React from 'react';
import './home.css'
import Social from './Social';
import ScrollDown from './ScrollDown';
import Data from './Data';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const Home = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Só dispara uma vez
    });

    const springsToLeft = useSpring({
        from: { y: -50 },
        to: { y: inView ? 0 : -50 },
    });

    return (
        <section className='home section' id='home'>
            <div className='home__container container grid' ref={ref}>
                <div className='home__content grid'>
                    <Social />
                    <animated.div className='home__img' style={{ ...springsToLeft }}>

                    </animated.div>
                    <Data />
                </div>
                <ScrollDown />
            </div>
        </section>
    )
}

export default Home;