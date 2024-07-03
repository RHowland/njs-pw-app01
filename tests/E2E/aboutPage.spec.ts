import {test,expect} from "@playwright/test";
import AboutPage from "../Pages/AboutPage";
import Header from "../Pages/Header";
test('Verify About page ', async ({ page }) => {
  await page.goto('/');
    const aboutPage = new AboutPage(page)
    const header=new Header(page)
    await header.aboutUsPageLiink.click();

    //Navigate to about page
    
    // Verify about page header
    await expect(aboutPage.aboutPageHeader).toBeVisible();
    await expect(aboutPage.aboutPageHeader).toHaveText("About Us Page")
    

  });
