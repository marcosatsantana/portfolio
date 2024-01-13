import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const Info = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Só dispara uma vez
    });

    const springs = useSpring({
        from: { x: -50 },
        to: { x: inView ? 0 : -50 },
    });

    return (
        <div className='about__info grid' ref={ref}>
            <animated.div className='about__box' style={{ ...springs }}>
                <i className='bx bx-award about__icon'></i>
                <h3 className='about__title'>Experiencia</h3>
                <span className='about__subtitle'>8 Anos</span>
            </animated.div>
            <animated.div className='about__box' style={{ ...springs }}>
                <i className='bx bx-briefcase-alt about__icon'></i>
                <h3 className='about__title'>Concluídos</h3>
                <span className='about__subtitle'>48+ Projetos</span>
            </animated.div>
            <animated.div className='about__box' style={{ ...springs }}>
                <i className='bx bx-support about__icon'></i>
                <h3 className='about__title'>Suporte</h3>
                <span className='about__subtitle'>Online 24/7</span>
            </animated.div>
        </div>
    );
}

export default Info;
