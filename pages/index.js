import React from 'react'
import Nav from '../components/nav'
import { withTranslation } from '../i18n';
import '../styles/theme.scss';
import Mailchimp from 'react-mailchimp-form'

const Landing = ({ t }) => (
  <section className="landing">
    <img className="logo" src="/static/images/logo_lg.png" alt="NextDAO" />
    <h2 className="title">Smart Asset - {t('redefining-the-token-economy')} </h2>

    <div className="staking-method-list">
      <a href="https://nano.nebulas.io/" target="__blank" className="btn btn-primary">{t("wallet-staking")}</a>
      <a href="#" target="__blank" className="btn btn-outline">{t("web-staking")}</a>
    </div>
    <style jsx>{`
      .landing {
        position: relative;
        text-align: center;
        height: 100vh;
        color: #fff;
        background-image: url("/static/images/banner.png"),
        linear-gradient(360deg,rgba(45,47,64,1) 0%,rgba(14,11,18,1) 100%);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        justify-content: center;
        display: flex;
        align-items: center;
        flex-direction: column;

      }

      .landing>.logo {
        height: 59px;
        width: 304px;
      }

      .landing .title {
        font-size:28px;
        letter-spacing:8px;
      }

      .landing .staking-method-list {
        margin-top: 180px;
      }

      .landing .staking-method-list .btn {
        margin: 0 30px;
      }
    `}</style>
  </section>
)

const NextDAOIntro = ({ t }) => (
  <section className="nextdao-intro">
    <section className="container">
      <div className="pure-g">
        <div className="pure-u-1 pure-u-lg-1-2">
          <h3>{t("what-is-nextdao")}</h3>
          <p>{t("what-is-nextdao-p")}</p>

          <section className="sub-container">
            <h4 className="sub-title">
              - {t("nextdao-eco-feature")}
            </h4>
            <p>{t("nextdao-eco-feature-p")}</p>
          </section>

          <section className="sub-container">
            <h4 className="sub-title">
              - nextDAO生态特点
            </h4>
            <p>关注链上互动和协作，通过提供去中心化金融工具和产品，重新定义通证经济，从而通过智能资产撬动社区，发现新的业务场景，推动生态应用落地。</p>
          </section>
        </div>
        <div className="pure-u-1 pure-u-lg-1-2 eco-container">
          <img className="eco pure-img" src="/static/images/eco.png" alt="NextDAO ECO" />
        </div>
      </div>
    </section>
    <style jsx>{`
      .nextdao-intro {
        padding-top: 180px;
        padding-bottom: 180px;
        color: #fff;
        background:linear-gradient(96deg,rgba(45,47,64,1) 0%,rgba(14,11,18,1) 100%);
      }

      .nextdao-intro .eco-container {
        text-align: center;
      }

      .nextdao-intro .eco {
        width: 394px;
        height: 381px;
        margin: 10px auto;
      }

    `}</style>
  </section>
)

const DStaking = ({ t }) => (
  <section className="dstaking">
    <section className="container">
      <h3>第一个产品：去中心化质押（dStaking）</h3>
      <p>区别于需要向合约转账的传统质押，去中心化质押的合约记录着用户的质押契约，用户资产仍然存放在用户个人地址之上。</p>

      <section className="sub-container staking-compare">
        <h4>Centralized pledge vs decentralized pledge</h4>
        <div className="pure-g">
          <div className="pure-u-1 pure-u-lg-1-2">
            <img className="pure-img" src="/static/images/dstaking_01.png" alt="Centeralized Staking" />
            <label>Centeralized Staking</label>
          </div>

          <div className="pure-u-1 pure-u-lg-1-2">
            <img className="pure-img" src="/static/images/dstaking_02.png" alt="dStaking" />
            <label>dStaking</label>
          </div>
        </div>
      </section>

      <section className="sub-container">
        <h4>dStaking三大特点</h4>
        <ul className="feature">
          <li>用户对个人资产享有绝对所有权；</li>
          <li>规避产生集体性损失的风险；</li>
          <li>参与质押更轻松，活跃度有望大幅提高。</li>
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
                <p>通过去中心化质押产生的nextToken。</p>
                <p>nextDAO上的首个Token。</p>
              </div>
            </div>
            <a className="btn btn-black btn-whitepaper" target="__blank" href="#">NAX whitepaper</a>

            <h5>NAX usage scenarios in the nebula ecosystem</h5>
            <img className="img-nax-usecase pure-img" src="/static/images/nax_usecase.png" alt="NAX usecase" />
          </div>

          <div className="pure-u-1 pure-u-lg-1-2 nax-distribution">
            <img className="img-nax-distribution pure-img" src="/static/images/nax_distribution.png" alt="NAX distribution" />
            <label>Dynamic distribution strategy diagram</label>
          </div>
        </div>


        <a className="link" target="__blank" href="#">Explorer ></a>

        <a href="https://nano.nebulas.io/" target="__blank" className="btn btn-primary">去钱包质押</a>
        <a href="#" target="__blank" className="btn btn-outline black">去网页质押</a>
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
        font-size:11px;
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
        background:rgba(242,243,255,1);
        border-radius:10px;
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
        font-size:15px;
      }

      .nax .btn {
        margin-right: 60px;
      }

    `}</style>

  </section>
)

const Nebulas = ({ t }) => (
  <section className="nebulas">
    <section className="container">
      <h3>Nebulas</h3>
      <p>
        In order to respect the fairness, legitimacy and power of assets, we have made the design of the distribution model concise, clear and effective. Combined with the ecologi- cal characteristics of Nebulas, more incentives and economic game scenarios are handed over to application scenarios. With this principle, incentive and consumption scenarios within the application scenario can be more varied and diverse.
    </p>
      <a className="link" href="#" target="__blank">Nebulas ></a>
    </section>
    <style jsx>{`
      .nebulas {
        padding-top: 90px;
        padding-bottom: 60px;
        color: #fff;
        background-image: url("/static/images/nebulas_bg.png"),
        linear-gradient(360deg,rgba(45,47,64,1) 0%,rgba(14,11,18,1) 100%);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        background:
      }

      .nebulas h3 {
        font-size:28px;
      }

      .nebulas p {
        font-size:15px;
        line-height:28px;
        margin: 30px auto;
      }
    `}</style>
  </section>
)

const Partners = ({ t }) => (
  <section className="partners">
    <section className="container">
      <h3>Investors & Partners</h3>
    </section>
    <style jsx>{`
      .partners {
        padding-top: 90px;
        padding-bottom: 60px;
      }

      .partners h3 {
        font-size:28px;
      }

    `}</style>
  </section>
)


const subscribe_url = 'https://nextdao.us3.list-manage.com/subscribe/post?u=3424d435733c6b1cde12374f7&amp;id=22501fd5f4';

const Subscribe = ({ t }) => (
  <section className="subscribe">
    <section className="container">

      <Mailchimp
        action={subscribe_url}
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
        styles={{
          sendingMsg: {
            color: "#FFF"
          },
          successMsg: {
            color: "#712FC5"
          },
          duplicateMsg: {
            color: "#ED4C67"
          },
          errorMsg: {
            color: "#ED4C67"
          }
        }}
        messages={
          {
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Subscribe!"
          }
        }
        className='subscribe-email'
      />

      <footer>Copyright @ nextDAO.io 2019 </footer>
    </section>
    <style jsx>{`
        .subscribe .container {
          display: flex;
          flex-direction: column;
        }

        .subscribe {
          color: #fff;
          padding-top: 90px;
          padding-bottom: 60px;
          background:linear-gradient(96deg,rgba(45,47,64,1) 0%,rgba(14,11,18,1) 100%);
        }

        .subscribe footer {
          text-align: center;
          font-size:13px;
        }
    `}</style>
  </section>
)
const Index = (props) => (
  <div>
    <Nav />
    <Landing {...props} />
    <NextDAOIntro  {...props} />
    <DStaking  {...props} />
    <Nebulas  {...props} />
    <Partners {...props} />
    <Subscribe {...props} />
  </div>
)

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(Index);
