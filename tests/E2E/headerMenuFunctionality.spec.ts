import { test, expect } from "@playwright/test";
import Header from "../Pages/Header";
import AboutPage from "../Pages/AboutPage";
import ServicePage from "../Pages/Services";
import ContactUsPage from "../Pages/ContactUsPage";
import HomePage from "../Pages/HomePage";
test.describe('Header menu functionality', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/")
    })
    test("Verify Header links Visible", async ({ page }) => {
        // creating instance of header component 
        const header = new Header(page);


        //Assert /Verify the links on the header nav bar 
        await expect(header.logoLink).toBeVisible();
        await expect(header.aboutUsPageLiink).toBeVisible();
        await expect(header.contactUsPageLink).toBeVisible();
        await expect(header.servicePageLink).toBeVisible();
    })
    test("Verify Header links should navigate the page ", async ({ page }) => {

        // creating instances of different page components for a website or web application
        const header = new Header(page);
        const aboutPage = new AboutPage(page);
        const servicePage = new ServicePage(page);
        const contactUsPage = new ContactUsPage(page);
        const homePage = new HomePage(page)


        //Verify about link navigate to about page 
        await header.aboutUsPageLiink.click();
        await expect(page).toHaveURL('/AboutPage');
        await expect(aboutPage.aboutPageHeader).toHaveText("About Us Page")
        //Verify service page  link navigate to Service page 
        await header.servicePageLink.click();
        await expect(page).toHaveURL('/ServicesPage');
        await expect(servicePage.servicePageHeader).toHaveText("Services Page")
        //Verify contact link navigate to Contact page 
        await header.contactUsPageLink.click();
        await expect(page).toHaveURL('/ContactPage');
        await expect(contactUsPage.contactUsPageHeader).toHaveText("Contact Page")
        //Verify logo link navigate to home page 
        await header.logoLink.click();
        await expect(page).toHaveURL('http://localhost:3000/')
        await expect(homePage.hompageHeader).toHaveText("Discover the Power of Our Services"
        )

    })

})
