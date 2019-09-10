import React from 'react';
import { withTranslation } from '../i18n';
import Mailchimp from 'react-mailchimp-form'

const subscribe_url = 'https://nextdao.us3.list-manage.com/subscribe/post?u=3424d435733c6b1cde12374f7&amp;id=22501fd5f4';

const Subscribe = ({ t }) => {
    const subscribe_messages = {
        sending: t("sending"),
        success: t("success"),
        error: t("error"),
        empty: t("empty"),
        duplicate: t("duplicate"),
        button: t("button")
    };

    return (
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
                    messages={subscribe_messages}
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
}


Subscribe.getInitialProps = async () => ({
    namespacesRequired: ['subscribe'],
});

export default withTranslation('subscribe')(Subscribe);
