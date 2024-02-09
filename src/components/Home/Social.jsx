import React from 'react';

const Social = () => {
    return (
        <div className='home__social'>
            <a className='home__social-icon' target='_blank'>
                <i className='uil uil-instagram text-slate-500 dark:text-stone-300' ></i>
            </a>
            <a className='home__social-icon' target='_blank'>
                <i className='uil uil-dribbble text-slate-500 dark:text-stone-300' ></i>
            </a>
            <a className='home__social-icon' target='_blank'>
                <i className='uil uil-github-alt text-slate-500 dark:text-stone-300' ></i>
            </a>
        </div>
    )
}

export default Social;