import moment from 'moment';

const BIDDING_START_TIME = moment("2019-09-03 13:00:00+08").valueOf();
const BIDDING_END_TIME = moment("2019-09-03 15:00:00+08").valueOf();
const BIDDING_MIN_AMOUNT = 5;
const BIDDING_SOFT_TOP_AMOUNT = 20000;
const BIDDING_NAX_DISTRIBUTION_AMOUNT = 3000000;
const BIDDING_CONTRACT = 'n1jv9xxNGejMFTxy6WCayhPgLC5uweroWnw';
const BIDDING_NASNANO_PREFIX = 'openapp.nasnano';

// MAINTNET:
// n1jv9xxNGejMFTxy6WCayhPgLC5uweroWnw
// openapp.nasnano


// TESTNET: 
// n1xafTYZcxxv2MQw2XSAsgiD4s1wbqcGEB3
// openapp.NASnano.testnet

export {
    BIDDING_START_TIME,
    BIDDING_END_TIME,
    BIDDING_MIN_AMOUNT,
    BIDDING_SOFT_TOP_AMOUNT,
    BIDDING_NAX_DISTRIBUTION_AMOUNT,
    BIDDING_CONTRACT,
    BIDDING_NASNANO_PREFIX
}