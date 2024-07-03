

import { Locator, Page } from '@playwright/test';

class Footer {
    readonly page: Page;
    readonly footerMenu:Locator;
    readonly logoLink:Locator;
    readonly contactUsPageLink: Locator;
    readonly aboutUsPageLiink:Locator;
    readonly servicePageLink:Locator;
    readonly facebookIcon:Locator;
    readonly instagramIcon:Locator;
    readonly youtubeIcon:Locator;
    readonly linkedinIcon:Locator;
    




    constructor(page: Page) {
        this.page = page;
        this.footerMenu=this.page.getByRole('contentinfo').locator('div').first();
        this.logoLink= this.page.getByRole('navigation').getByRole('link', { name: 'logo' });
        this.aboutUsPageLiink=this.page.getByRole('navigation').getByRole('link', { name: 'About Us' });
        this.servicePageLink=this.page.getByRole('navigation').getByRole('link', { name: 'Services' });
        this.contactUsPageLink=this.page.getByRole('navigation').getByRole('link', { name: 'Contact' });
        this.facebookIcon=this.page.locator('.flex > a').first();
        this.instagramIcon=this.page.locator('.flex > a:nth-child(2)');
        this.linkedinIcon=this.page.locator('.flex > a:nth-child(3)');
        this.youtubeIcon=this.page.locator('a:nth-child(4)');


    }

    
}

export default Footer;






