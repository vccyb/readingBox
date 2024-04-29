"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.to = void 0;
/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
function to(promise, errorExt) {
    return promise
        .then((data) => [null, data])
        .catch((err) => {
        if (errorExt) {
            const parseError = Object.assign({}, err, errorExt);
            return [parseError, undefined];
        }
        return [err, undefined];
    });
}
exports.to = to;
exports.default = to;
