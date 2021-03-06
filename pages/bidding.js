import React, { Component } from 'react'
import { Link, withTranslation } from '../i18n';
import Banner from '../components/bidding/banner';
import Head from 'next/head'
import '../styles/bidding.scss';
import Countdown from '../components/bidding/countdown';
import Progress from '../components/bidding/progress';
import Buy from '../components/bidding/buy';
import { BIDDING_SOFT_TOP_AMOUNT, BIDDING_NAX_DISTRIBUTION_AMOUNT } from '../config/bidding';
import { STAGE_NOT_START, STAGE_START, getBiddingStage, getTotalBidding } from "../utils/bidding";
import { Neb } from '../utils/neb';

const BiddingAmountDetail = ({ t, boughtAmount }) => (
  <section className="container">
    <div className="card bidding-amount-detail">
      <div className="pure-g">
        <div className="pure-u-1-3">
          <label>{t("total-issue")}<br />(NAX)</label>
          <p>{BIDDING_NAX_DISTRIBUTION_AMOUNT.toLocaleString()}</p>
        </div>
        <div className="pure-u-1-3">
          <label>{t("ready-bought")}<br />(NAS)</label>
          <p>{boughtAmount.toLocaleString()}</p>
        </div>
        <div className="pure-u-1-3">
          <label>{t("soft-top")}<br />(NAS)</label>
          <p>{BIDDING_SOFT_TOP_AMOUNT.toLocaleString()}</p>
        </div>
      </div>
    </div>

    <style jsx>{`
    .container {
      margin-top: -4.5rem;
    }

    .bidding-amount-detail {
    }

    .bidding-amount-detail div {
      text-align: center;
    }

    .bidding-amount-detail div.pure-u-1-3 {
      margin: 0.5rem 0;
    }

    .bidding-amount-detail div.pure-u-1-3:nth-child(2) {
      border-left: 1px solid #F3F2F7;
      border-right: 1px solid #F3F2F7;
      width: 32%;
    }

    .bidding-amount-detail>div label {
      font-size: 0.8rem;
      font-weight:400;
      color: #979797;
      margin: 0;
    }

    .bidding-amount-detail>div p {
      font-size: 1.2rem;
      font-weight:600;
      color:rgba(30,26,51,1);
      line-height:45px;
      margin: 0.2rem 0 0 0;
    }
    `}</style>
  </section>
)

const BiddingStart = ({ t, boughtAmount }) => (
  <section className="container">
    <div className="card bidding-start">

      {getBiddingStage() === STAGE_NOT_START &&
        <div className="comming-soon">
          <h3>{t("coming-soon")}</h3>
          <h4>{t("start-time")}</h4>
        </div>
      }

      {getBiddingStage() !== STAGE_NOT_START &&
        <>
          <Progress boughtAmount={boughtAmount} />
          <Countdown />
        </>
      }

      {getBiddingStage() === STAGE_START &&
        <>
          <Buy />
        </>
      }



      <div className="nax-intro">
        <label>NAX {t("intro")}</label>
        <p>{t("intro-p")}</p>
        <div className="pure-g">
          <a href={t("whitepaper_url")} target="__blank" className="pure-u-1-2" ><img src="/static/images/bidding/book.png" />{t("whitepaper")}</a>
          <a href={t("nextdao_url")} target="__blank" className="pure-u-1-2" ><img src="/static/images/bidding/web.png" />{t("official-website")}</a>
        </div>
      </div>
    </div>
    <style jsx>{`

        .card {
          padding: 2rem;
        }

        .bidding-start label {
          display: block;
          font-size: 1rem;
          color: #A8A6B3;
          font-weight:400;
          margin: 0;
        }

        .bidding-start p {
          font-size: 1rem;
          font-weight:500;
          color: #1E1A33;
          margin: 0;
        }

        .comming-soon {
            padding: 1.5rem 3rem;
            background-color:#6649F2;
            border-radius:0.5rem;
            color: #fff;
            text-align: center;
        }

        .comming-soon h3 {
            font-size: 1.2rem;
            font-weight: 500;
        }

        .comming-soon h4 {
            font-size: 1rem;
            font-weight: 500;
        }

        .nax-intro {
          padding: 1rem 0;
        }

        .nax-intro label {
          margin-bottom: 1rem;
        }

        .nax-intro p {
            font-size: 0.8rem;
            margin-bottom: 1rem;
        }

        .nax-intro a {
          color: #1E1A33;
          text-decoration: none;
          display: flex;
          align-items: center;
          font-size: 0.8rem;
        }

        .nax-intro a>img {
          height: 1.2rem;
          width: auto;
          margin-right: 10px;
        }
    `}
    </style>
  </section>
)

const BiddingRule = ({ t }) => (
  <section className="container">
    <h4>{t("bidding-rule")}</h4>
    <p>{t("bidding-rule-p1")}</p>
    <p>{t("bidding-rule-p2")}</p>
    <p>{t("bidding-rule-p3")}</p>
    <p>{t("bidding-rule-p4")}</p>
    <p>{t("bidding-rule-p5")}</p>
    <p>{t("bidding-rule-p6")}</p>
    <p>{t("bidding-rule-p7")}</p>

    <h4>{t("bidding-time")}</h4>
    <p>{t("bidding-time-start")}</p>
    <p>{t("bidding-time-end")}</p>
    <p>{t("bidding-time-distribution")}</p>

    <h4>{t("calc-formula")}</h4>
    <p>{t("calc-formula-p1")}</p>
    <p>{t("calc-formula-p2")}</p>
    <p>{t("calc-formula-p3")}</p>
    <p>{t("calc-formula-p4")}</p>

    <h4>{t("risk-warning")}</h4>
    <p>{t("risk-warning-p1")}</p>
    <p>{t("risk-warning-p2")}</p>

    <style jsx>{`
      .container {
        padding: 0 2.5rem 2.5rem;
      }

      h4 {
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 1rem;
        font-weight:500;
        color:#1E1A33;
        line-height:2rem;
      }

      p {
        font-size: 0.8rem;
        font-weight:400;
        color:#706C80;
        line-height:1.5rem;
        margin: 0;
      }


    `}</style>
  </section>
)

const Footer = () => (
  <footer>
    <span>Powered By <img src="/static/images/logo_black.png" alt="nextDAO" /></span>
    <style jsx>
      {`
            footer {
                border-top: 1px solid #DFDEE6;
                margin: 1rem 2rem;
                text-align: center;
                display: flex;
                justify-content: center;
            }

            span {
                padding: 1rem;
            }

            img {
                height: 1rem;
                margin-left: 0.5rem;
            }
        `}
    </style>
  </footer>
)

class Bidding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boughtAmount: 0
    };
  }


  componentDidMount = async () => {

    let total = 0;
    try {
      // get already bought amount from smart contract
      total = await getTotalBidding();
    } catch (err) {
      console.log(err)
    } finally {
      this.setState({
        boughtAmount: Neb.toNas(total)
      });
    }

  }


  render() {
    const { t } = this.props;
    const { boughtAmount } = this.state;


    return (
      <>
        <Head>
          <title>{t("title")}</title>
          <link rel="shortcut icon" href="/static/nax.ico" type="image/x-icon" />
          <link rel="icon" href="/static/nax.ico" type="image/x-icon"></link>
        </Head>
        <div className="bidding">

          <Banner {...this.props} />
          <BiddingAmountDetail boughtAmount={boughtAmount} {...this.props} />
          <BiddingStart boughtAmount={boughtAmount} {...this.props} />
          <BiddingRule {...this.props} />
          <Footer />

        </div>
      </>
    );

  }
}
Bidding.getInitialProps = async () => ({
  namespacesRequired: ['bidding'],
})

export default withTranslation('bidding')(Bidding);