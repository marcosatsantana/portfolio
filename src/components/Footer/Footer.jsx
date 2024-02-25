import React from 'react'
import "./footer.css"
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">MKDesigners</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
            {t('header.about')}
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
            {t('header.portfolio')}
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
            {t('header.testimonials')}
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a className='footer__social-link' target='_blank'>
            <i className='bx bxl-facebook' ></i>
          </a>
          <a className='footer__social-link' target='_blank'>
            <i className='bx bxl-instagram' ></i>
          </a>
          <a className='footer__social-link' target='_blank'>
            <i className='bx bxl-twitter' ></i>
          </a>
        </div>
        <span className='footer__copy'>&#169; MKDesigners. {t('footer.copyright')}</span>
      </div>
    </footer>
  )
}

export default Footer;