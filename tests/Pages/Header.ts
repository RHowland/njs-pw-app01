

import { Locator, Page } from '@playwright/test';

class Header {
    readonly page: Page;
    readonly headerMenu:Locator;
    readonly logoLink:Locator;
    readonly contactUsPageLink: Locator;
    readonly aboutUsPageLiink:Locator;
    readonly servicePageLink:Locator;



    constructor(page: Page) {
        this.page = page;
        this.headerMenu=this.page.getByRole('navigation');
        this.logoLink= this.page.getByRole('navigation').getByRole('link', { name: 'logo' });
        this.aboutUsPageLiink=this.page.getByRole('navigation').getByRole('link', { name: 'About Us' });
        this.servicePageLink=this.page.getByRole('navigation').getByRole('link', { name: 'Services' });
        this.contactUsPageLink=this.page.getByRole('navigation').getByRole('link', { name: 'Contact' });


    }

    
}

export default Header;






