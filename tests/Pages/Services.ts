import { Locator, Page } from '@playwright/test';

class ServicePage {
    readonly page: Page;
    readonly servicePageHeader: Locator;


    constructor(page: Page) {
        this.page = page;
        this.servicePageHeader = page.getByRole('heading', { name: 'Services Page' })

    }


}

export default ServicePage;









