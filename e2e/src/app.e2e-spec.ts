import { AppPage } from './app.po';
import {browser, by, element, logging} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    page = new AppPage();
  });

  it('should display calculator title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Calculator');
  });

  it('should do a basic sum', () => {
    page.navigateTo();
    const calcScreen = element(by.css('#calc-screen-text'));

    element(by.css('#calc-keyboard-1')).click();
    expect(calcScreen.getText()).toEqual('1');

    element(by.css('#calc-keyboard-sum')).click();
    expect(calcScreen.getText()).toEqual('1');

    element(by.css('#calc-keyboard-2')).click();
    expect(calcScreen.getText()).toEqual('2');

    element(by.css('#calc-keyboard-equals')).click();
    expect(calcScreen.getText()).toEqual('3');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
