"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: external "jwt-decode"
const external_jwt_decode_namespaceObject = require("jwt-decode");
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js




/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    session: {
        strategy: "jwt",
        maxAge: 5500
    },
    providers: [
        credentials_default()({
            name: "Custom Provider",
            async authorize (credentials) {
                let { email , password  } = credentials;
                console.log(credentials);
                let data = {
                    email: email,
                    password: password
                };
                console.log(data, "form email and password");
                let response = await external_axios_default().post("https://api.orthomatri.com/api/v1/auth/adminlogin", data);
                let user = response.data;
                let token = response.data.data;
                var decoded = external_jwt_decode_default()(token);
                // console.log(jwt_decode(token),"to see token is decoded or not")
                let iat = decoded.id;
                console.log(iat, "to get the id of the user");
                if (!token) {
                    throw new Error("Invalid token");
                }
                if (!(response.status == 200)) {
                    throw new Error("Invalid Credentials" + email);
                }
                if (response.status == 200) {
                    return user = {
                        name: token,
                        email: iat
                    };
                }
            }
        }), 
    ]
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(554));
module.exports = __webpack_exports__;

})();