import { browser, element, by } from 'protractor';

export class LazyLoadingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lazy-root h1')).getText();
  }
}
