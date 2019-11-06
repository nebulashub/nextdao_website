import React from "react";
import Nav from "../components/nav";
import Subscribe from "../components/footer";
import { Link, withTranslation } from "../i18n";
import "../styles/theme.scss";

const Landing = ({ t }) => (
  <section className="landing">
    <img className="logo" src="/static/images/logo_lg.png" alt="NextDAO" />
    <h2 className="title">
      Smart Asset - {t("redefining-the-token-economy")}{" "}
    </h2>

    <div className="staking-method-list">
      {/* <Link href="/flash-nax">
        <a className="btn btn-primary">{t("flash-token-issuance")}</a>
      </Link> */}
      <a
        href="https://nano.nebulas.io/"
        target="__blank"
        className="btn btn-primary"
      >
        {t("wallet-staking")}
      </a>
      <a
        href="https://dstaking.nebulas.io/"
        target="__blank"
        className="btn btn-outline"
      >
        {t("web-staking")}
      </a>
    </div>
    <style jsx>{`
      .landing {
        position: relative;
        text-align: center;
        height: 100vh;
        color: #fff;
        background-image: url("/static/images/banner.png"),
          linear-gradient(
            360deg,
            rgba(45, 47, 64, 1) 0%,
            rgba(14, 11, 18, 1) 100%
          );
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        justify-content: center;
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      .landing > .logo {
        height: 59px;
        width: 304px;
      }

      .landing .title {
        font-size: 28px;
        letter-spacing: 8px;
      }

      .landing .staking-method-list {
        margin-top: 180px;
      }

      .landing .staking-method-list .btn {
        margin: 0 30px;
      }
    `}</style>
  </section>
);

const NextDAOIntro = ({ t }) => (
  <section className="nextdao-intro">
    <section className="container">
      <div className="pure-g">
        <div className="pure-u-1 pure-u-lg-1-2">
          <h3>{t("what-is-nextdao")}</h3>
          <p>{t("what-is-nextdao-p")}</p>

          <section className="sub-container">
            <h4 className="sub-title">- {t("nextdao-eco-feature")}</h4>
            <p>{t("nextdao-eco-feature-p")}</p>
          </section>

          <section className="sub-container">
            <h4 className="sub-title">- {t("nextdao-eco-feature-t2")}</h4>
            <p>{t("nextdao-eco-feature-p2")}</p>
          </section>
        </div>
        <div className="pure-u-1 pure-u-lg-1-2 eco-container">
          <img
            className="eco pure-img"
            src="/static/images/eco.png"
            alt="NextDAO ECO"
          />
        </div>
      </div>
    </section>
    <style jsx>{`
      .nextdao-intro {
        padding-top: 180px;
        padding-bottom: 180px;
        color: #fff;
        background: linear-gradient(
          96deg,
          rgba(45, 47, 64, 1) 0%,
          rgba(14, 11, 18, 1) 100%
        );
      }

      .nextdao-intro .eco-container {
        text-align: center;
      }

      .nextdao-intro .eco {
        width: 394px;
        height: auto;
        margin: 10px auto;
      }
    `}</style>
  </section>
);

const DStaking = ({ t }) => (
  <section className="dstaking">
    <section className="container">
      <h3>{t("fisrt-product-dstaking")}</h3>
      <p>{t("fisrt-product-dstaking-p")}</p>

      <section className="sub-container staking-compare">
        <h4>{t("staking-vs")}</h4>
        <div className="pure-g">
          <div className="pure-u-1 pure-u-lg-1-2">
            <img
              className="pure-img"
              src="/static/images/dstaking_01.png"
              alt="Centeralized Staking"
            />
            <label>{t("c-staking")}</label>
          </div>

          <div className="pure-u-1 pure-u-lg-1-2">
            <img
              className="pure-img"
              src="/static/images/dstaking_02.png"
              alt="dStaking"
            />
            <label>{t("dstaking")}</label>
          </div>
        </div>
      </section>

      <section className="sub-container">
        <h4>{t("dstaking-feature")}</h4>
        <ul className="feature">
          <li>{t("dstaking-feature-p1")}</li>
          <li>{t("dstaking-feature-p2")}</li>
          <li>{t("dstaking-feature-p3")}</li>
        </ul>
      </section>

      <section className="sub-container nax">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-lg-1-2">
            <div className="nax-intro">
              <div className="nax-logo">
                <img alt="NAX" src="/static/images/nax_logo.png" />
              </div>
              <div className="nax-summary">
                <h5>NAX</h5>
                <p>{t("nax-intro-p1")}</p>
                <p>{t("nax-intro-p2")}</p>
              </div>
            </div>
            <a
              className="btn btn-black btn-whitepaper"
              target="__blank"
              href={t("whitepaper_url")}
            >
              NAX {t("whitepaper")}
            </a>

            <h5>{t("nax-usecase")}</h5>
            <img
              className="img-nax-usecase pure-img"
              src="/static/images/nax_usecase.png"
              alt="NAX usecase"
            />
          </div>

          <div className="pure-u-1 pure-u-lg-1-2 nax-distribution">
            <img
              className="img-nax-distribution pure-img"
              src="/static/images/nax_distribution.png"
              alt="NAX distribution"
            />
            <label>{t("dynamic-distribution-diagram")}</label>
          </div>
        </div>

        <a
          className="link"
          target="__blank"
          href="https://explorer.nebulas.io/#/dstaking"
        >
          {t("view-dstaking-dashboard")} >
        </a>

        <a
          href="https://nano.nebulas.io/"
          target="__blank"
          className="btn btn-primary"
        >
          {t("wallet-staking")}
        </a>
        <a
          href="https://dstaking.nebulas.io/"
          target="__blank"
          className="btn btn-outline black"
        >
          {t("web-staking")}
        </a>
        <Link href="/flash-nax">
          <a className="btn btn-text">{t("flash-token-issuance")} ></a>
        </Link>
      </section>
    </section>

    <style jsx>{`
      .dstaking {
        padding-top: 100px;
        padding-bottom: 100px;
      }

      .sub-container {
        margin: 50px auto;
      }

      .staking-compare img {
        width: 388px;
        height: 299px;
        margin: 10px auto;
        display: block;
        text-align: center;
      }

      .staking-compare label {
        display: block;
        margin-top: 10px;
        font-size: 11px;
        text-align: center;
      }

      ul.feature {
        display: flex;
      }

      ul.feature li {
        margin-right: 15px;
      }

      .btn-whitepaper {
        margin: 10px auto;
      }

      .sub-container.nax {
        background: rgba(242, 243, 255, 1);
        border-radius: 10px;
        padding: 54px 63px;
      }

      .nax .nax-intro {
        display: flex;
      }

      .nax .nax-intro .nax-logo {
        display: flex;
        align-items: center;
      }

      .nax .nax-intro .nax-logo img {
        width: 73px;
        height: 84px;
      }

      .nax .nax-intro .nax-summary {
        margin-left: 50px;
      }

      .nax .img-nax-usecase {
        height: auto;
        width: 400px;
        display: block;
      }

      .nax-distribution label {
        font-size: 9px;
        text-align: center;
        margin: 20px auto;
        display: block;
      }

      .nax-distribution .img-nax-distribution {
        width: 428px;
        height: auto;
        display: block;
        margin: 0 auto;
      }

      .nax .link {
        margin: 30px auto;
        display: block;
        font-size: 15px;
      }

      .nax .btn {
        margin-right: 60px;
      }
    `}</style>
  </section>
);

const Nebulas = ({ t }) => (
  <section className="nebulas">
    <section className="container">
      <h3>Nebulas</h3>
      <p>{t("nebulas-intro")}</p>
      <a className="link" href={t("nebulas_url")} target="__blank">
        Nebulas >
      </a>
    </section>
    <style jsx>{`
      .nebulas {
        padding-top: 90px;
        padding-bottom: 60px;
        color: #fff;
        background-image: url("/static/images/nebulas_bg.png"),
          linear-gradient(
            360deg,
            rgba(45, 47, 64, 1) 0%,
            rgba(14, 11, 18, 1) 100%
          );
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        background: ;
      }

      .nebulas h3 {
        font-size: 28px;
      }

      .nebulas p {
        font-size: 15px;
        line-height: 28px;
        margin: 30px auto;
      }

      a {
        color: #fff;
      }
    `}</style>
  </section>
);

const partner_list = [
  {
    name: "genesisgroup",
    title: "GENESIS Group",
    site: "http://newgenesiscap.com/"
  },
  {
    name: "biki",
    title: "BiKi",
    site: "https://www.biki.com/"
  },
  {
    name: "jrr",
    title: "JRR Capital",
    site: "http://www.jrrcapital.com/"
  },
  {
    name: "rootscap",
    title: "ROOTSCAP",
    site: "http://www.rootscap.com/"
  },
  {
    name: "bncapital",
    title: "BNCapital",
    site: "http://bncapital.one/"
  }
];

const Partners = ({ t }) => (
  <section className="partners">
    <section className="container">
      <h3>{t("investors-partners")}</h3>
      <ul className="partner-list">
        {partner_list.map(p => (
          <li key={p.name}>
            <a href={p.site} target="__blank">
              <img
                className="partner-logo"
                src={`/static/images/partner/logo_${p.name}.png`}
                alt={p.title}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
    <style jsx>{`
      .partners {
        padding-top: 90px;
        padding-bottom: 60px;
      }

      .partners h3 {
        font-size: 28px;
      }

      .partner-list {
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
      }

      .partner-list li {
        margin: 0.5rem 1rem;
      }

      .partner-list .partner-logo {
        height: 58px;
        width: auto;
        display: block;
      }
    `}</style>
  </section>
);

const Index = props => (
  <div>
    <Nav />
    <Landing {...props} />
    <NextDAOIntro {...props} />
    <DStaking {...props} />
    <Nebulas {...props} />
    <Partners {...props} />
    <Subscribe {...props} />
  </div>
);

Index.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

export default withTranslation("common")(Index);
