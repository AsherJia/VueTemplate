module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "global-require": 0,
        "no-param-reassign": 0
    }
};
