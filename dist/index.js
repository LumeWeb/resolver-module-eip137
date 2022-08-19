import { Resolver } from "@lumeweb/resolver-module-eip137-common";
import { ethers } from "ethers";
export default class Eip137 extends Resolver {
    getSupportedTlds() {
        return ["eth"];
    }
    async resolve(domain, options, bypassCache) {
        const hip5Data = domain.split(".");
        if (2 <= hip5Data.length &&
            options.options &&
            "domain" in options.options) {
            if (ethers.utils.isAddress(hip5Data[0])) {
                options.options.chain = hip5Data[1].replace("_", "");
                options.options.bypassTldCheck = true;
                domain = options.options.domain;
                delete options.options;
            }
        }
        return await super.resolve(domain, options, bypassCache);
    }
    getChain(options) {
        if (options?.options?.chain) {
            return options?.options?.chain;
        }
        return "eth";
    }
}
