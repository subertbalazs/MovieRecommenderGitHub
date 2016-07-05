"use strict";
/**
 * Created by herczkumihalybalazs on 2016.06.22..
 */
var User = (function () {
    function User(username, password, stayLoggedIn) {
        this.username = username;
        this.password = password;
        this.stayLoggedIn = stayLoggedIn;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map