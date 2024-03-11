import React from 'react';
import { motion } from "framer-motion"
import './home.css'
import Social from './Social';
import ScrollDown from './ScrollDown';
import Data from './Data';

import { AnimatedImage } from '../AnimatedImage';

const Home = () => {
    return (
        <section className='home section  h-screen flex justify-center items-around ' id='home'>
            <div className='home__container container grid'>
                <div className='home__content grid'>
                    <Social isHorizontal={false} />
                    <AnimatedImage>
                        <motion.div
                            className="home__img rounded-full"
                            whileHover={{ scale: 1.2, rotate: 9 }}
                            whileTap={{ scale: 0.8, rotate: -9, borderRadius: "100%" }}
                        />
                    </AnimatedImage>
                    <Data />

                    <ScrollDown />
                </div>
            </div>
        </section>
    )
}

export default Home;