import { Locator, Page } from '@playwright/test';

class HomePage{
    readonly page: Page;
    readonly heroImage:Locator;
    readonly hompageHeader: Locator;
    readonly signUpButton:Locator;
    readonly learnMoreButton:Locator; 
    constructor(page:Page){
        this.page=page;
        this.heroImage=this.page.getByRole('img', { name: 'hero' })
        this.hompageHeader=this.page.getByRole('heading', { name: 'Discover the Power of Our' })
        this.signUpButton=this.page.getByRole('button', { name: 'Signup' })
        this.learnMoreButton=this.page.getByRole('button', { name: 'Learn more' })

    }
}


export default HomePage