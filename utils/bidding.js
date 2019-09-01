import { BIDDING_START_TIME, BIDDING_END_TIME } from '../config/bidding';
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

export {
    STAGE_NOT_START,
    STAGE_START,
    STAGE_END,
    getBiddingStage
};