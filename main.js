require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const fs = require('fs');


(async function () {
    "use strict";

    let role = "user";
    let users = 2700;
    let tokens = {};

    fs.appendFileSync("./tokens/tokens.csv", `"user_id","token"\r\n`);
    for (let userid=1; userid<=users; userid++) {
        const payload = {
            id: userid,
            role: role
        };
        const jwtToken = jwt.sign(payload, jwtSecret, { expiresIn: '365d' });

        tokens[userid] = jwtToken;
        fs.appendFileSync("./tokens/tokens.csv", `"${userid}","${jwtToken}"\r\n`);
    }
    fs.writeFileSync(`./tokens/tokens.json`, JSON.stringify(tokens, null, 4));

})();
