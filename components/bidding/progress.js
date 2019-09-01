import React from 'react';
import { withTranslation } from '../../i18n';
import { BIDDING_SOFT_TOP_AMOUNT } from '../../config/bidding';

function Progress({ t }) {

    // get already bought amount from smart contract
    let boughtAmount = 5015;

    // caculate bidding progress, already bought amount/ soft top
    let progress_num = ((boughtAmount / BIDDING_SOFT_TOP_AMOUNT) * 100).toFixed(1);

    const progressBarStyle = () => progress_num < 100 ? 'not-finish' : 'finish';

    return (
        <>
            <div className="bidding-progress">
                <div className="bidding-progress-text flex space-between">
                    <label>{t("current-progress")}</label>
                    <p>{progress_num}%</p>
                </div>
                <div className="bidding-progress-bar bar">
                    <span style={{ width: `${progress_num}%` }} className={`${progressBarStyle()} bar`}></span>
                </div>
            </div>
            <style jsx>
                {`
                    label {
                        display: block;
                        font-size: 1rem;
                        color: #A8A6B3;
                        font-weight:400;
                        margin: 0;
                    }

                    .bidding-progress {
                        padding: 1rem 0;
                    }

                    .bar {
                        height:1.17rem;
                        border-radius:0.58rem;
                        display: block;
                    }

                    .bidding-progress-bar {
                        background:rgba(234,233,242,1);
                    }

                    .bidding-progress-bar .not-finish {
                        background-color: #6649F2;
                        z-index: 1;
                    }

                    .bidding-progress-bar .finish {
                        background-color: #2BD99F;
                        z-index: 1;
                    }

                `}
            </style>
        </>
    );
}

Progress.getInitialProps = async () => ({
    namespacesRequired: ['bidding'],
});

export default withTranslation('bidding')(Progress);