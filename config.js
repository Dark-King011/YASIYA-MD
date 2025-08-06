const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~MJo2VJaB#YEv8WdE7oWKZFoSnFdoRWmiHtnh5SkNbDp6TB89i44w'
};
