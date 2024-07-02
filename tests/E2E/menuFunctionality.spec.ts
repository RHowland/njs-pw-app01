import { test, expect } from "@playwright/test";
import Header from "../Pages/Header";

test.describe('Verify menu functionaty', () => {
    test.beforeEach(async ({page})=>{
        await page.goto("/")
    })
    test("Verify Header links Visible", async ({ page }) => {
        await page.goto("/")
        const header = new Header(page);

        await expect(header.logoLink).toBeVisible();
        await expect(header.aboutUsPageLiink).toBeVisible();
        await expect(header.contactUsPageLink).toBeVisible();
        await expect(header.servicePageLink).toBeVisible();
    })
    test("Verify Header links should navigate the page ", async ({ page }) => {

       
        const header = new Header(page);
        await header.aboutUsPageLiink.click();
        await expect(page).toHaveURL('/AboutPage');
        await header.servicePageLink.click();
        await expect(page).toHaveURL('/ServicesPage');
        await header.contactUsPageLink.click();
        await expect(page).toHaveURL('/ContactPage');
     
    })

})
