import {test,expect} from "@playwright/test";
import AboutPage from "../Pages/AboutPage";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
test('Verify About page ', async ({ page }) => {
  await page.goto('/');
    const aboutPage = new AboutPage(page)
    const header=new Header(page)
    const footer= new Footer(page)
    await header.aboutUsPageLiink.click();
  //Verify Header menu 
  expect(header.headerMenu).toBeVisible();
  // verify the footer menu 
  expect(footer.footerMenu).toBeVisible();

    
    // Verify about page header element 
    await expect(aboutPage.aboutPageHeader).toBeVisible();
    await expect(aboutPage.aboutPageHeader).toHaveText("About Us Page")
  
    

  });
