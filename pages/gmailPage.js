import gmailLogin from './sections/gmailLogin.js';
import gmailMain from './sections/gmailMain.js';
import gmailMainFooter from './sections/gmailMainFooter.js';

export default {
    sections: {
        gmailLogin: gmailLogin(),
        gmailMain: gmailMain(),
        gmailMainFooter: gmailMainFooter()
    }
}