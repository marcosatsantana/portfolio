import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">MKDesigners</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projetos
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Depoimentos
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
        <span className='footer__copy'>&#169; MKDesigners. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer;