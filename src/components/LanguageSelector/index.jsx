import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactSVG } from 'react-svg';
import EnglishFlag from '../../assets/usa.svg'; // Importe o SVG da bandeira para inglês
import PortugueseFlag from '../../assets/brazil.svg'; // Importe o SVG da bandeira para português

function LanguageSelector() {
    const { i18n } = useTranslation();

    const changeLanguage = (event) => {
        i18n.changeLanguage(event);
        setLanguage(event);
    };
    const [langague, setLanguage] = useState('en');

    return (
        <div className="flex gap-2 items-center">
            <a onClick={() => changeLanguage('en')} className={`${langague === 'en' ? 'border-b-2' : 'border-b-0'} rounded-sm p-1 cursor-pointer`}>
                <img src={EnglishFlag} style={{ width: 14, height: 14 }} alt="English" />
            </a>
            <a onClick={() => changeLanguage('pt')} className={`${langague === 'pt' ? 'border-b-2' : 'border-b-0'} rounded-sm p-1 cursor-pointer`}>
                <img src={PortugueseFlag} style={{ width: 14, height: 14 }} alt="Português" />
            </a>
        </div>
    );
}

export default LanguageSelector;
