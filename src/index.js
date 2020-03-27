"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var mergeConfig_1 = require("./lib/mergeConfig");
var Parallax = /** @class */ (function () {
    function Parallax(userSetConfig) {
        var setConfig = mergeConfig_1.mergeConfig(config_1.config, userSetConfig);
    }
    return Parallax;
}());
module.exports = Parallax;
//# sourceMappingURL=index.js.map