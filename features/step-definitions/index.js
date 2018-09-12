var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('.botonCerrar')) {
      browser.element('.botonCerrar').click();
    }
  });

  When('I open the login screen', () => {
    if(browser.isVisible('.modal-body')) {
      browser.waitForVisible('.botonIngresar', 5000);
    }
    browser.waitForVisible('.botonIngresar', 5000);
    browser.element('.botonIngresar').click();
  });

  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)
  });


  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });

  Then('I expect to see {string}', error => {
    if(error == 'SUCESS_FLAG') {
      browser.waitForVisible('button[id="cuenta"]', 5000);
      expect(browser.isVisible('button[id="cuenta"]')).to.be.equals(true);
    }
    else {
      browser.waitForVisible('.aviso.alert.alert-danger', 5000);
      var alertText = browser.element('.aviso.alert.alert-danger').getText();
      expect(alertText).to.include(error);
    }
  });
});
