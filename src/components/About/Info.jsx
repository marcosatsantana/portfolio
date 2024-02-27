import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion"
import { useTranslation } from 'react-i18next';

const Info = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();
    const array = [
        {
            "id": 1,
            "title": t('about.items.experience.title'),
            "content": t('about.items.experience.description')
        },
        {
            "id": 2,
            "title": t('about.items.completed.title'),
            "content": t('about.items.completed.description')
        },
        {
            "id": 3,
            "title": t('about.items.support.title'),
            "content": t('about.items.support.description')
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
                        <motion.div
                            transition={{
                                duration: 0.5,
                            }}
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            whileTap={{ scale: 0.8, borderRadius: "100%" }}
                        >
                            <div className='about__box dark:bg-zinc-900 bg-white' >
                                <i className='bx bx-award about__icon dark:text-stone-400 text-zinc-700 '></i>
                                <h3 className='about__title text-slate-900 dark:text-white'>{item.title}</h3>
                                <span className='about__subtitle text-slate-500 dark:text-stone-400'>{item.content}</span>
                            </div>
                        </motion.div>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
}

export default Info;
