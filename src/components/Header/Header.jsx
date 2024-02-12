import React, { useEffect, useState } from 'react'
import "./header.css"


const Header = () => {
    const [Toggle, showMenu] = useState(false)
    const [activeNav, setActiveNav] = useState("#home")
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    const [isDarkMode, setIsDarkMode] = useState(darkThemeMq.matches);

    useEffect(() => {
        document.body.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    useEffect(() => {
        const handleMediaQueryChange = () => {
            setIsDarkMode(darkThemeMq.matches);
        };

        window.addEventListener('mediaquerychange', handleMediaQueryChange);

        return () => window.removeEventListener('mediaquerychange', handleMediaQueryChange);
    }, []);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode); // Invert the state on button click

        // Apply Tailwind's dark mode classes dynamically
        document.body.classList.toggle('dark');
    };

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("shadow-md")
        else header.classList.remove("shadow-md");
    })

    return (
        <header className='header dark:bg-zinc-950 bg-white'>

            <nav className='nav container'>
                <a href='index.html' className='nav__logo text-slate-900 dark:text-white'>
                    MKDesigners
                </a>


                <div className={Toggle ? "nav__menu show-menu dark:bg-zinc-950 bg-white" : "nav__menu"}>
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-stone-400"}>
                                <i className='uil uil-estate nav__icon'></i> Inicio
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-stone-400"}>
                                <i className='uil uil-user nav__icon'></i> Sobre
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-stone-400"}>
                                <i className='uil uil-file-alt nav__icon'></i> Habilidades
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-stone-400"}>
                                <i className='uil uil-briefcase-alt nav__icon'></i> Serviços
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-stone-400"}>
                                <i className='uil uil-scenery nav__icon'></i> Portfolio
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-stone-400"}>
                                <i className='uil uil-message nav__icon'></i> Contato
                            </a>
                        </li>
                        <li>
                            <a onClick={toggleDarkMode} style={{ cursor: 'pointer' }} className="text-slate-900 dark:text-stone-200 text-sm">
                                <i className={`uil ${isDarkMode ? 'uil-moon' : 'uil-sun'} nav__theme`}></i>
                                <p className='nav__theme-text'>
                                    {isDarkMode ? 'Escuro' : 'Claro'}
                                </p>
                            </a>
                        </li>
                    </ul>
                    <i className='uil uil-times nav__close' onClick={() => showMenu(!Toggle)}> </i>
                </div>
                <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;