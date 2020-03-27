"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeConfig = function (presetConfig, userConfig) {
    var safeGuardedUserConfig = __assign({}, userConfig);
    return __assign(__assign({}, presetConfig), safeGuardedUserConfig);
};
//# sourceMappingURL=mergeConfig.js.map