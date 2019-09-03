import React, { useState } from 'react'
import { withTranslation } from '../../i18n';
import QRcode from 'qrcode.react';
import { genQRcode, isInteger } from '../../utils/bidding';
import { BIDDING_MIN_AMOUNT, BIDDING_CONTRACT, BIDDING_NASNANO_PREFIX } from '../../config/bidding';
import copy from 'copy-to-clipboard';

function Buy({ t }) {

    const [payAmount, setPayAmount] = useState();
    const [payAmountError, setPayAmountError] = useState(false);
    const [payAmountClick, setPayAmountClick] = useState(0);
    const [qrcodeText, setQrcodeText] = useState(null);
    const [copyToClipboard, setCopyToClipboard] = useState(false);

    const onInputChange = (e) => {

        let value = e.target.value;
        // setPayAmount(value)

        if (isInteger(value) || value === "") {
            // remove input error
            setPayAmountError(false);
            setPayAmount(value);
        } else {
            return false;
        }

    }

    const onPayClick = () => {

        if (parseInt(payAmount) >= BIDDING_MIN_AMOUNT) {
            setPayAmountClick(parseInt(payAmount))
            setQrcodeText(genQRcode(payAmount));
            // open nas nano
            const nasnano_url = `${BIDDING_NASNANO_PREFIX}://virtual?params=${encodeURIComponent(genQRcode(payAmount))}`;
            window.location = nasnano_url;

        } else {
            // hide qrcode
            setQrcodeText(null);
            // show input error
            setPayAmountError(true);
        }
    }

    const onCopyContractClick = () => {
        copy(BIDDING_CONTRACT);
        setCopyToClipboard(true);
    }

    return (
        <>
            <div className="bidding-now">
                <input type="text" className={payAmountError ? "error" : ""} placeholder={t("pay-placeholder")} onChange={onInputChange} value={payAmount} />
                {payAmountError && <span className="error">{t("pay-amount-error")}</span>}
                <button disabled={false} onClick={onPayClick} >{t("pay")}</button>
                {qrcodeText &&
                    <div className="qrcode-wrapper">
                        <QRcode size={250} value={qrcodeText} />
                        <p><input type="text" value={BIDDING_CONTRACT} onClick={onCopyContractClick} onChange={() => false} /></p>
                        {copyToClipboard && <p><span className="tips">{t('copy-to-clipboard')}</span></p>}
                        <p><label>{t("pay-amount")}</label> <span>{payAmountClick} NAS</span></p>
                        <p><label>{t("use-nas-nano-scan-qrcode")}</label></p>
                    </div>
                }

            </div>
            <style jsx>
                {`
                .bidding-now {
                    display:flex;
                    flex-direction: column;
                }

                input {
                    padding: 1rem;
                    font-size: 1.2rem;
                    background:rgba(255,255,255,1);
                    border-radius: 8px;
                    border: 1px solid rgba(234,233,242,1);
                    color: #FF9D25;
                }

                input:focus {
                    outline: none;
                    box-shadow: none;
                    border: 1px solid #6748F8;
                }

                input.error {
                    border: 1px solid #FF2645;
                }

                span.error {
                    margin-top: 0.5rem;
                    color: #FF2645;
                    font-size: 0.8rem;
                }

                button {
                    margin: 1rem 0;
                    font-size:1.2rem;
                    padding: 1rem;
                    background: #6649F2;
                    border-radius: 8px;
                    outline: none;
                    box-shadow: none;
                    border: none;
                    color: #fff;
                }

                button:disabled {
                    background: #D0CED9;
                }

                .qrcode-wrapper {
                    margin: 1rem auto;
                    padding: 1rem;
                    text-align: center;
                    background:rgba(255,255,255,1);
                    box-shadow:0rem 1.67rem 5rem 0rem rgba(134,141,167,0.2);
                    border:0.1rem solid rgba(230,231,235,1);
                    border-radius: 5px;
                    display: flex;
                    flex-direction: column;
                }

                .qrcode-wrapper p {
                    margin: 0.4rem 0;
                    font-size: 1rem;
                }

                .qrcode-wrapper input {
                    padding: 0.2rem;
                    font-size: 0.8rem;
                    width: 100%;
                }

                .qrcode-wrapper label {
                    font-weight: 500;
                }

                .qrcode-wrapper p span {
                    color: #FF9D25;
                    font-size: 0.8rem;
                }

                .qrcode-wrapper p span.tips {
                    color: #A8A6B3;
                }

            `}
            </style>
        </>
    )
}

Buy.getInitialProps = async () => ({
    namespacesRequired: ['bidding'],
});

export default withTranslation('bidding')(Buy);