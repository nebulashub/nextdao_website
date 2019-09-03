import React, { useState, useEffect } from 'react';
import CountdownNow from 'react-countdown-now';
import { withTranslation } from '../../i18n';
import { BIDDING_START_TIME, BIDDING_END_TIME } from '../../config/bidding';
import { STAGE_NOT_START, STAGE_START, STAGE_END, getBiddingStage } from "../../utils/bidding";

function Countdown({ t, nowOffset }) {


    // Random component
    const Completionist = () => <span>{t("already-end-p")}</span>;

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span>{days * 24 + hours} {t('h')} {minutes} {t('m')} {seconds} {t('s')}</span>;
        }
    };

    const [timeOffset, setTimeOffset] = useState(0);

    useEffect(() => {
        if (nowOffset) {
            setTimeOffset(nowOffset);
        }
    });

    const nowTime = () => {
        // console.log('timeOffset', timeOffset);
        return Date.now() - timeOffset;
    }

    let time_label, countdown_time, abs_time;
    const bidding_stage = getBiddingStage();

    switch (bidding_stage) {
        case STAGE_NOT_START:
            // bidding not start
            time_label = t("to-start");
            countdown_time = BIDDING_START_TIME;
            abs_time = "";
            break;
        case STAGE_START:
            // bidding already start
            time_label = t("to-end");
            countdown_time = BIDDING_END_TIME;
            abs_time = t("end-time");
            break;
        case STAGE_END:
            // bidding end
            time_label = t("already-end");
            countdown_time = BIDDING_END_TIME;
            break;
        default:
            break;
    }


    return (
        <div className="bidding-time flex space-between">
            <label>{time_label}</label>
            <p>
                <CountdownNow
                    now={nowTime}
                    date={countdown_time}
                    renderer={renderer}
                />
                <span className="datetime">{abs_time}</span>
            </p>
            <style jsx>{`
                label {
                    display: block;
                    font-size: 1rem;
                    color: #A8A6B3;
                    font-weight:400;
                    margin: 0;
                }

                .bidding-time {
                    padding: 1rem 0;
                    align-items: center;
                  }
          
                .bidding-time p {
                    text-align: right;
                }
        
                .bidding-time p>span {
                display: block;
                font-size: 0.8rem;
                font-weight:400;
                color:#A8A6B3;
                }
        `}</style>
        </div>)
}

Countdown.getInitialProps = async ({ req }) => {



    return {
        namespacesRequired: ['bidding']
    };

};

export default withTranslation('bidding')(Countdown);