// import {test,expect} from "@playwright/test"
// import Footer from "../Pages/Footer";



// test("Verify Footer links Visible", async ({ page }) => {
//     await page.goto('/')
//     const footer = new Footer(page);
//    await expect(footer.logoLink).toBeVisible();
//    await expect(footer.aboutUsPageLiink).toBeVisible();
//    await expect(footer.contactUsPageLink).toBeVisible();
//    await  expect(footer.servicePageLink).toBeVisible();
//    await  expect(footer.facebookIcon).toBeVisible();
//    await  expect(footer.linkedinIcon).toBeVisible();
//    await  expect(footer.instagramIcon).toBeVisible();
//    await  expect(footer.youtubeIcon).toBeVisible();

//   })
//   test('confirm that the correct web pages are displayed',()=>{


//   })


import { test, expect } from "@playwright/test";
import Footer from "../Pages/Footer";
import Header from "../Pages/Header";
import AboutPage from "../Pages/AboutPage";
import ServicePage from "../Pages/Services";
import ContactUsPage from "../Pages/ContactUsPage";
import HomePage from "../Pages/HomePage";
test.describe('Footer menu functionality', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/")
    })
    test("Verify Footer links Visible", async ({ page }) => {
    await page.goto('/')
    const footer = new Footer(page);
   await expect(footer.logoLink).toBeVisible();
   await expect(footer.aboutUsPageLiink).toBeVisible();
   await expect(footer.contactUsPageLink).toBeVisible();
   await  expect(footer.servicePageLink).toBeVisible();
   await  expect(footer.facebookIcon).toBeVisible();
   await  expect(footer.linkedinIcon).toBeVisible();
   await  expect(footer.instagramIcon).toBeVisible();
   await  expect(footer.youtubeIcon).toBeVisible();

  })
    test("Verify Header links Visible", async ({ page }) => {
        // creating instance of footer component 
        const footer = new Footer(page);


        //Assert /Verify the links on the header nav bar 
        await expect(footer.logoLink).toBeVisible();
        await expect(footer.aboutUsPageLiink).toBeVisible();
        await expect(footer.contactUsPageLink).toBeVisible();
        await expect(footer.servicePageLink).toBeVisible();
    })
    test("Verify Footer links should navigate the page ", async ({ page }) => {

        // creating instances of different page components for a website or web application
        const footer = new Header(page);
        const aboutPage = new AboutPage(page);
        const servicePage = new ServicePage(page);
        const contactUsPage = new ContactUsPage(page);
        const homePage = new HomePage(page)


        //Verify about link navigate to about page 
        await footer.aboutUsPageLiink.click();
        await expect(page).toHaveURL('/AboutPage');
        await expect(aboutPage.aboutPageHeader).toHaveText("About Us Page")
        //Verify service page  link navigate to Service page 
        await footer.servicePageLink.click();
        await expect(page).toHaveURL('/ServicesPage');
        await expect(servicePage.servicePageHeader).toHaveText("Services Page")
        //Verify contact link navigate to Contact page 
        await footer.contactUsPageLink.click();
        await expect(page).toHaveURL('/ContactPage');
        await expect(contactUsPage.contactUsPageHeader).toHaveText("Contact Page")
        //Verify logo link navigate to home page 
        await footer.logoLink.click();
        await expect(page).toHaveURL('http://localhost:3000/')
        await expect(homePage.hompageHeader).toHaveText("Discover the Power of Our Services"
        )

    })

})
