const request = require('request');
const constant = require('./constant');

exports.apiRequest = async (endUrl, method, params) => {
    var req = {
        uri: `${constant.BASE_URL}${endUrl}${params}`,
        method,
        encoding: constant.FORMAT.BINARY,
    };
    return new Promise((resolve, reject) => {
        request(req, (error, response, body) => {            
            (error) ? reject(error) : resolve(body);
        })
    })
}
