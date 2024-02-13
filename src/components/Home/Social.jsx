import React from 'react';

const Social = (isHorizontal = false) => {
    return (
        <div className='home__social' style={isHorizontal.isHorizontal ? { display: 'flex', gap: 8, opacity: .9 } : { display: 'grid' }}>
            <a className='home__social-icon' href='https://www.instagram.com/marcos.t.santana/' target='_blank'>
                <i className='uil uil-instagram text-slate-500 dark:text-stone-300' ></i>
            </a>
            <a className='home__social-icon' href='https://dribbble.com/marcostsantana' target='_blank'>
                <i className='uil uil-dribbble text-slate-500 dark:text-stone-300' ></i>
            </a>
            <a className='home__social-icon' href='https://github.com/marcosatsantana' target='_blank'>
                <i className='uil uil-github-alt text-slate-500 dark:text-stone-300' ></i>
            </a>
        </div>
    )
}

export default Social;