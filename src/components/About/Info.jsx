import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const Info = () => {
    const [ref, inView] = useInView({ triggerOnce: true });

    const springs = useSpring({
        from: { scale: 0 },
        to: { scale: inView ? 1 : 0 },
    });

    return (
        <div className='about__info grid'>
            <animated.div className='about__box dark:bg-zinc-900 bg-white' style={{ ...springs }}>
                <i className='bx bx-award about__icon dark:text-stone-400 text-zinc-700 '></i>
                <h3 className='about__title text-slate-900 dark:text-white'>Experiencia</h3>
                <span className='about__subtitle text-slate-500 dark:text-stone-400' ref={ref}>8 Anos</span>
            </animated.div>
            <animated.div className='about__box dark:bg-zinc-900 bg-white' style={{ ...springs }}>
                <i className='bx bx-briefcase-alt about__icon dark:text-stone-400 text-zinc-700'></i>
                <h3 className='about__title text-slate-900 dark:text-white'>Concluídos</h3>
                <span className='about__subtitle text-slate-500 dark:text-stone-400' ref={ref}>48+ Projetos</span>
            </animated.div>
            <animated.div className='about__box dark:bg-zinc-900 bg-white' style={{ ...springs }}>
                <i className='bx bx-support about__icon dark:text-stone-400 text-zinc-700'></i>
                <h3 className='about__title text-slate-900 dark:text-white'>Suporte</h3>
                <span className='about__subtitle text-slate-500 dark:text-stone-400' ref={ref}>Online 24/7</span>
            </animated.div>
        </div>
    );
}

export default Info;
