//export default function() {
module.exports = function() {

    this.Given(/^I enter to Google log-in page$/, function() {
        const gmail = this.page.gmailPage();
        gmailPage.navigate();
    });

    this.When(/^I input proper login and password$/, function() {
        const loginPage = gmailPage.sections.gmailLogin;
        loginPage.loginPass();
    });

    this.Then(/^I enter to Gmail email managing page$/, function() {
        loginPage.assertEnter();
    });
}