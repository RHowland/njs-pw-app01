
import{test,expect} from "@playwright/test"
import HomePage from "../Pages/HomePage";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
test("Verify HOME page is visible ", async ({ page }) => {
    await page.goto("/")
    const homepage = new HomePage(page)
    const header=new Header(page)
    const footer= new Footer(page)
    await header.logoLink.click();
  //Verify Header menu 
  expect(header.headerMenu).toBeVisible();
  // verify the footer menu 
  expect(footer.footerMenu).toBeVisible();
    await expect(homepage.heroImage).toBeVisible();

   await expect(homepage.hompageHeader).toHaveText("Discover the Power of Our Services"
    )
   await expect(homepage.signUpButton).toBeVisible()
    await expect(homepage.learnMoreButton).toBeVisible()


  })
  