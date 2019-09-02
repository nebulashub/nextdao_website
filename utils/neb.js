import nebulas from 'nebulas';
import { NEBNET } from '../config/neb';


class Neb {
    constructor() {
        this.neb = new nebulas.Neb();
        this.neb.setRequest(new nebulas.HttpRequest(NEBNET));
    }

    // call contract common function
    callContract(to_contract, func, args = []) {
        return new Promise((resolve, reject) => {
            this.neb.api.call({
                from: "n1UiVK8ZPsJ44QNTtHTP4z2MLWbN3DqahRF",
                to: to_contract,
                value: 0,
                nonce: 0,
                gasPrice: 1000000,
                gasLimit: 200000,
                contract: {
                    "source": "",
                    "sourceType": "js",
                    "function": func,
                    "args": JSON.stringify(args),
                    "binary": "",
                    "type": "call"
                }
            }).then(r => {
                if (r.execute_err) {
                    reject(r.execute_err)
                } else {
                    resolve(JSON.parse(r.result))
                }
            }).catch(e => {
                reject(e);
            });
        })
    }


    // static methods
    static toNas(wei) {
        return Number(nebulas.Utils.toBigNumber(wei).mul(nebulas.Utils.toBigNumber(10).pow(-18)));
    }

    static isValidAddress(address) {
        return nebulas.Account.isValidAddress(address);
    }

    static generatePayQRcode = (to, payAmount) => {
        // default transfer 0 nas, staking all remain nas
        const qrcodeData = {
            pageParams: {
                pay: {
                    currency: "NAS",
                    value: nebulas.Unit.nasToBasic(payAmount).toString(10),
                    to: to
                },
                innerPay: false
            },
            des: "confirmTransfer",
            category: "jump"
        };

        const qrcodeText = JSON.stringify(qrcodeData);
        // console.log(qrcodeText);
        return qrcodeText;
    }

}




export { Neb }