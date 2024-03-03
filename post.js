const axios = require('axios');
const querystring = require('querystring');

const url = 'https://lambda.fivem.net/api/ticket/create';

const requestData = {
    gameName: '',
    guid: '',
    machineHash: '',
    machineHashIndex: '',
    server: '',
    serverKeyToken: ':',
    token: ''
};

const requestDataEncoded = querystring.stringify(requestData);

const config = {
    headers: {
        'User-Agent': 'CitizenFX/1',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

axios.post(url, requestDataEncoded, config)
    .then(response => {
        console.log('request sent, uri ticket was creating check ananisikiyim.js');
        console.log('API response:', response.data);
    })
    .catch(error => {
        console.error('error occured gardas', error);
    });
