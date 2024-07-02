import { Locator, Page } from '@playwright/test';

class AboutPage {
  readonly page: Page;
  readonly aboutPageHeader: Locator;
 

  constructor(page: Page) {
    this.page = page;
    this.aboutPageHeader=page.getByRole('heading', { name: 'About Us Page' })
    
  }


}

export default AboutPage;


