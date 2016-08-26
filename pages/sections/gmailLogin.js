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
            loginPass() {
                const loginName = "aleks.brestertester"
                import userData from '../../features/step_definitions/userData'
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


