const environment = {
    development: {
        apiUrl: ''
    },
    production: {
        apiUrl: ''
    }
};

let AuthToken;

module.exports = Object.assign(
    {
        AuthToken
    },
    environment
);