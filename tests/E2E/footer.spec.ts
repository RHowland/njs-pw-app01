import {test,expect} from "@playwright/test"
import Footer from "../Pages/Footer";

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