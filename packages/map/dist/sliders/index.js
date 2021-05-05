"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slider = require("./slider");

Object.keys(_slider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _slider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _slider[key];
    }
  });
});
//# sourceMappingURL=index.js.map