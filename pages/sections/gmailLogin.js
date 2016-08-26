import userData from '../../features/step_definitions/userData'
export default function gmailLogin() {
    return {
        elements: {
            emailField: { selector: '#Email' },
            nextButton: { selector: '#next' },
            signInButton: { selector: '#signIn' },
            passwdField: { selector: 'input[type=password]' },
            accountName: { selector: '.gb_8a' }
        },
        commands: [{
            navigateToLogin() {
                this
                    .windowMaximize()
                    .url('https://gmail.com')
                    .waitForElementVisible('body', 2000)
            },
            loginPass() {
                const loginName = "aleks.brestertester"

                this
                    .waitForElementVisible('@emailField')
                    .setValue('@emailField', loginName)
                    .waitForElementVisible('@nextButton')
                    .click('@nextButton')
                    .waitForElementVisible('@passwdField')
                    .setValue('@passwdField', userData[loginName])
            },
            assertEnter() {
                this
                    .waitForElementVisible('@accountName')
                    .assert.attributeEquals('@accountName', "title", "Google Account: aleks brestertester  \n(aleks.brestertester@gmail.com)")
            }
        }]
    };
}