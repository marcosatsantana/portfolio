import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import { Player } from '@lottiefiles/react-lottie-player';
import loading from "../../assets/loading.json"
import { AnimatedText } from "../AnimatedText";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const form = useRef();
  const { t } = useTranslation();
  const sendEmail = (e) => {
    setIsLoading(true)
    e.preventDefault();

    emailjs.sendForm('service_6tv1x49', 'template_3rgbmkm', form.current, 'LUYQCgy3TRMx7vQof').then(() => setIsLoading(false))
    e.target.reset()
  };
  return (
    <section className="contact section" id='contact'>
      <AnimatedText margin="auto" >

        <h2 className='section__title text-zinc-900 dark:text-white'>{t('contact.title')}</h2>
      </AnimatedText>
      <AnimatedText margin="auto" isInverse>
        <span className='section__subtitle text-stone-500 dark:text-stone-400'>{t('contact.description')}</span>
      </AnimatedText>

      <div className="contact__container container grid">
        <div className="contact__content mt-8">
          <h3 className="contact__title dark:text-white">{t('contact.subtitle_1')}</h3>
          <div className="contact__info">
            <div className="contact__card dark:bg-zinc-900 bg-white">
              <i className="bx bx-mail-send contact__card-icon dark:text-white"></i>
              <h3 className="contact__card-title dark:text-stone-400">Email</h3>
              <span className="contact__card-data dark:text-white">contato@mkdesigners.com.br</span>
              <a href="mailto:contato@mkdesigners.com.br" className="contact__button dark:text-stone-400">{t('contact.btn')} <i className="bx bx-right-arrow-alt contact__button-icon dark:text-stone-400"></i></a>
            </div>

            <div className="contact__card dark:bg-zinc-900 bg-white">
              <i className="bx bxl-whatsapp contact__card-icon dark:text-white"></i>
              <h3 className="contact__card-title dark:text-stone-400">WhatsApp</h3>
              <span className="contact__card-data dark:text-white">+55 (62) 9 8590-5272</span>
              <a href="https://wa.link/19ywa0" className="contact__button dark:text-stone-400">{t('contact.btn')} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
            </div>

            <div className="contact__card dark:bg-zinc-900 bg-white">
              <i className="bx bxl-messenger contact__card-icon dark:text-white"></i>
              <h3 className="contact__card-title dark:text-stone-400">Messenger</h3>
              <span className="contact__card-data dark:text-white">user.fb123</span>
              <a href="https://google.com" className="contact__button dark:text-stone-400">{t('contact.btn')} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
            </div>
          </div>
        </div>
        <div className="contact__content mt-8">
          <h3 className="contact__title dark:text-white">{t('contact.subtitle_2')}</h3>

          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            {isLoading ? <Player
              src={loading}
              className="contact__player"
              loop
              autoplay
            /> :
              <div>
                <div className="contact__form-div">
                  <label className="bg-white dark:bg-zinc-950 contact__form-tag dark:text-stone-200">{t('contact.name.label')}</label>
                  <input type="text" name='name' className='contact__form-input dark:border-zinc-50 placeholder:text-stone-200 hover:placeholder:text-stone-400 border-zinc-700 border-2' placeholder={t('contact.name.placeholder')} />
                </div>

                <div className="contact__form-div">
                  <label className="bg-white dark:bg-zinc-950 contact__form-tag dark:text-stone-200">{t('contact.email.label')}</label>
                  <input type="email" name='email' className='contact__form-input dark:border-zinc-50 placeholder:text-stone-200 hover:placeholder:text-stone-400 border-zinc-700 border-2' placeholder={t('contact.email.placeholder')} />
                </div>

                <div className="contact__form-div contact__form-area">
                  <label className="bg-white dark:bg-zinc-950 contact__form-tag dark:text-stone-200">{t('contact.message.label')}</label>
                  <textarea name="project" cols="30" rows="10" className='contact__form-input dark:border-zinc-50 placeholder:text-stone-200 hover:placeholder:text-stone-400 border-zinc-700 border-2' placeholder={t('contact.message.placeholder')}></textarea>
                </div>
                <button href='#contact' className='bg-zinc-900 dark:bg-white dark:text-zinc-950 text-white button button--flex hover:px-12'>{t('contact.send')}
                  <svg
                    className="button__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                      className="dark:stroke-zinc-950 dark:fill-zinc-950 fill-white stroke-white"
                    ></path>
                    <path
                      d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                      className="dark:stroke-zinc-950 dark:fill-zinc-950 fill-white stroke-white"
                    ></path>
                  </svg>
                </button>
              </div>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;