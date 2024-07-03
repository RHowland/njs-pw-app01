import { test, expect } from '@playwright/test';
import ContactUsPage from '../Pages/ContactUsPage';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';
test("Verify contact-us Page",async ({page})=>{
    await page.goto('/')
    const contactUsPage= new ContactUsPage(page);
    const header=new Header(page)
    const footer= new Footer(page)
    await header.contactUsPageLink.click();
  //Verify Header menu 
  expect(header.headerMenu).toBeVisible();
  // verify the footer menu 
  expect(footer.footerMenu).toBeVisible();
    await expect(contactUsPage.contactUsPageHeader).toHaveText("Contact Page")
  }
  )