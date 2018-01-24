import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() { return browser.get('/'); }

 // getParagraphText2() { return element(by.css('app-testing ng-tns-c2-0')).getText(); }
  getParagraphText() { return element(by.id('sma')).getText(); }


}
