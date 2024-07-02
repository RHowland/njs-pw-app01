import { Locator, Page } from '@playwright/test';

class ContactUsPage {
    readonly page: Page;
    readonly contactUsPageHeader: Locator;


    constructor(page: Page) {
        this.page = page;
        this.contactUsPageHeader = page.getByRole('heading', { name: 'Contact Page' })

    }

 
}

export default ContactUsPage;







