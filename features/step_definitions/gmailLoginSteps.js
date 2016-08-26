module.exports = function() {

    this.Given(/^I enter to Google log-in page$/, function() {
        const gmailPage = this.page.gmailPage();
        const loginPage = gmailPage.section.gmailLogin;
        loginPage.navigateToLogin();
    });

    this.When(/^I input proper login and password$/, function() {
        const gmailPage = this.page.gmailPage();
        const loginPage = gmailPage.section.gmailLogin;
        loginPage.loginPass();
    });

    this.Then(/^I enter to Gmail email managing page$/, function() {
        const gmailPage = this.page.gmailPage();
        const loginPage = gmailPage.section.gmailLogin;
        loginPage.assertEnter();
    });
}