import React from 'react'
import { i18n } from '../../i18n';

const handleChangeLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')
}

const showCurrentLang = () => {
    return i18n.language === 'en' ? 'EN' : '中文';
}

const Banner = () => (
    <header>
        <section className="banner">
            <button onClick={handleChangeLang}> {showCurrentLang()} </button>
        </section>
        <style jsx>{`
      header {
        padding: 0 1rem;
        height: 15rem;
        background: url("/static/images/bidding/banner.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .banner {
        margin: 0 auto;
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        top: 0;
        z-index:1;
        padding: 25px 0;
        justify-content:flex-end;
      }

      .banner img {
        height: 18px;
        width: 92px;
      }

      .banner button {
        border: transparent;
        background: transparent;
        color: #fff;
        font-size:1rem;
        font-weight:500;
      }

      .banner button:hover, .banner>button:active:hover {
        outline: transparent;
      }
    `}</style>
    </header>

)

export default Banner