import React from 'react'
import { i18n, Link } from '../i18n';

const handleChangeLang = () => {
  i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')
}

const showCurrentLang = () => {
  return i18n.language === 'en' ? 'EN' : '中文';
}

const Nav = () => (
  <header>
    <section className="nav">
      <Link href="/">
        <a><img src="/static/images/logo_sm.png" alt="NextDAO" /></a>
      </Link>
      <button onClick={handleChangeLang}> {showCurrentLang()} </button>
    </section>
    <style jsx>{`
      header {
        background-color: #0E0B12;
        padding: 0 1rem;
      }

      .nav {
        margin: 0 auto;
        max-width: 1024px;
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        top: 0;
        z-index:1;
        padding: 25px 0;
        background-color: #0E0B12;
        justify-content: space-between;
      }

      .nav img {
        height: 18px;
        width: 92px;
      }

      .nav button {
        border: transparent;
        background: transparent;
        color: #fff;
      }

      .nav button:hover, .nav>button:active:hover {
        outline: transparent;
      }
    `}</style>
  </header>

)

export default Nav