import gmailLogin from './sections/gmailLogin.js';
import gmailMain from './sections/gmailMain.js';
import gmailMainFooter from './sections/gmailMainFooter.js';

export default {
    url: 'https://gmail.com',
    sections: {
        gmailLogin: gmailLogin(),
        gmailMain: gmailMain(),
        gmailMainFooter: gmailMainFooter()
    }
}

/*
var gmailLogin = require('./sections/gmailLogin.js');
var gmailMain = require('./sections/gmailMain.js');
var gmailMainFooter = require('./sections/gmailMainFooter.js');

module.expotrs = {
    url: 'https://gmail.com',
    sections: {
        gmailLogin: gmailLogin(),
        gmailMain: gmailMain(),
        gmailMainFooter: gmailMainFooter()
    }
};
*/