import React, { useEffect, useState } from 'react'
import "./header.css"
import DarkModeToggle from "react-dark-mode-toggle";
import Social from '../Home/Social';
import LanguageSelector from '../LanguageSelector';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();
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
        const social = document.querySelector(".social");
        if (this.scrollY >= 80) {
            header.classList.add("shadow-md")
        }
        else {
            header.classList.remove("shadow-md")
        }

        if (this.scrollY >= 280) {
            social.classList.add("show-social-header")
        }
        else {
            social.classList.remove("show-social-header")
        }
    })

    return (
        <header className='header dark:bg-zinc-950 bg-white'>

            <nav className='nav container'>
                <a href='index.html' className='nav__logo text-slate-900 dark:text-white'>
                    MKDesigners
                </a>
                <div className="social">
                    <Social isHorizontal={true} />
                </div>

                <div className={Toggle ? "nav__menu show-menu dark:bg-zinc-950 bg-white" : "nav__menu"}>
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-stone-400"}>
                                <i className='uil uil-estate nav__icon'></i> {t('header.home')}
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-stone-400"}>
                                <i className='uil uil-user nav__icon'></i> {t('header.about')}
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-stone-400"}>
                                <i className='uil uil-file-alt nav__icon'></i> {t('header.skills')}
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-stone-400"}>
                                <i className='uil uil-briefcase-alt nav__icon'></i> {t('header.services')}
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-stone-400"}>
                                <i className='uil uil-scenery nav__icon'></i> {t('header.portfolio')}
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-stone-400"}>
                                <i className='uil uil-message nav__icon'></i> {t('header.contact')}
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#language' className='dark:text-white '>
                                <LanguageSelector />
                                <div className="nav__theme-text">
                                    {t('header.language')}
                                </div>
                            </a>
                        </li>
                        <li>
                            <a onClick={toggleDarkMode} style={{ cursor: 'pointer' }} className="text-slate-900 dark:text-stone-200 text-sm">
                               
                                {isDarkMode ?  <i className='bx bx-moon dark:text-stone-400'></i> :  <i className='bx bx-sun dark:text-stone-400'></i>}

                                <p className='nav__theme-text'>
                                    {isDarkMode ? t('header.dark') : t('header.light')}
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