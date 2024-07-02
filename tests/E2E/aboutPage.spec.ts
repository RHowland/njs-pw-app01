import {test,expect} from "@playwright/test";
import AboutPage from "../Pages/AboutPage";
test('Verify About page ', async ({ page }) => {
  await page.goto('/AboutPage');
    const aboutPage = new AboutPage(page)
    //Navigate to about page
    
    // Verify about page header
    await expect(aboutPage.aboutPageHeader).toBeVisible();
    await expect(aboutPage.aboutPageHeader).toHaveText("About Us Page")

  });
