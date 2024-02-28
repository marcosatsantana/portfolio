import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


function LanguageSelector() {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState();

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
        setLanguage(event.target.value);
    };

    useEffect(() => {
        // Função para identificar o idioma padrão do dispositivo
        const identifyDefaultLanguage = () => {
            const userLanguage = navigator.language.split('-')[0]; // Obtenha o idioma principal (excluindo a região)
            setLanguage(userLanguage.toString());
        };
        identifyDefaultLanguage(); // Chamada inicial para definir o idioma padrão
    }, []);

    return (
        <form className="max-w-sm mx-auto">
            <select defaultValue={language} onChange={changeLanguage} id="countries" className=" text-sm dark:bg-zinc-950 ">
                <option selected={language === "us"} value="en">US</option>
                <option selected={language === "pt"} value="pt">PT</option>
            </select>

        </form>
    );
}

export default LanguageSelector;
