
import{test,expect} from "@playwright/test"
import HomePage from "../Pages/HomePage";
test("Verify HOME page is visible ", async ({ page }) => {
    await page.goto("/")
    const homepage = new HomePage(page)
    await expect(homepage.heroImage).toBeVisible();

   await expect(homepage.hompageHeader).toHaveText("Discover the Power of Our Services"
    )
   await expect(homepage.signUpButton).toBeVisible()
    await expect(homepage.learnMoreButton).toBeVisible()


  })