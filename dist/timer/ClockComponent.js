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
import React, { memo } from "react";
import Clock from "react-clock";
var ClockComponent = memo(function (_a) {
    var displayTime = _a.displayTime, clockProps = _a.clockProps;
    return (React.createElement(Clock, __assign({ value: displayTime, size: 80, renderNumbers: true }, clockProps)));
});
export default ClockComponent;
