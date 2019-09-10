import { BIDDING_START_TIME, BIDDING_END_TIME, BIDDING_CONTRACT } from '../config/bidding';
import { Neb } from './neb';

const STAGE_NOT_START = "not-start";
const STAGE_START = "start";
const STAGE_END = "end";

const getBiddingStage = () => {
    let now = Date.now();
    if (now < BIDDING_START_TIME) {
        // bidding not start
        return STAGE_NOT_START;
    } else if (now >= BIDDING_START_TIME && now < BIDDING_END_TIME) {
        // bidding already start
        return STAGE_START;
    } else {
        // bidding end
        return STAGE_END;
    }
}

function getTotalBidding() {
    const neb = new Neb();
    return neb.callContract(BIDDING_CONTRACT, "getTotal");
}

function genQRcode(payAmount) {
    return Neb.generatePayQRcode(BIDDING_CONTRACT, payAmount);
}

function isInteger(value) {
    return value == parseInt(value, 10);
}

export {
    STAGE_NOT_START,
    STAGE_START,
    STAGE_END,
    getBiddingStage,
    getTotalBidding,
    genQRcode,
    isInteger
};