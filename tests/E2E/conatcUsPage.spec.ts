import { test, expect } from '@playwright/test';
import ContactUsPage from '../Pages/ContactUsPage';
test("Verify contact-us Page",async ({page})=>{
    await page.goto('/ContactPage')
    const contactUsPage= new ContactUsPage(page);
    await expect(contactUsPage.contactUsPageHeader).toHaveText("Contact Page")
  }
  )