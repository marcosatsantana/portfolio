import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion"

const Info = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();
    const array = [
        {
            "id": 1,
            "title": "Experiencia",
            "content": "8 Anos"
        },
        {
            "id": 2,
            "title": "Concluídos",
            "content": "48+ Projetos"
        },
        {
            "id": 3,
            "title": "Suporte",
            "content": "Online 24/7" 
        }
    ]
    const { ref: inViewRef, inView } = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    useEffect(() => {
        if (isVisible) {
            controls.start("visible");
        }
    }, [isVisible, controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className=''>
            <motion.ul
                ref={inViewRef}
                className="about__info grid"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                {array.map((item, index) => (
                    <motion.li key={item.id} className="item" variants={itemVariants} transition={{ delay: index / 2 }}>
                        <div className='about__box dark:bg-zinc-900 bg-white' >
                            <i className='bx bx-award about__icon dark:text-stone-400 text-zinc-700 '></i>
                            <h3 className='about__title text-slate-900 dark:text-white'>{item.title}</h3>
                            <span className='about__subtitle text-slate-500 dark:text-stone-400'>{item.content}</span>
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
}

export default Info;
