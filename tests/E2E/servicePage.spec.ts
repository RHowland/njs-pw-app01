import {test,expect} from "@playwright/test"
import ServicePage from "../Pages/Services"
test("Verify Service page is visible ", async ({ page }) => {
    await page.goto('/ServicesPage')
    expect(page).toHaveURL('/ServicesPage')
    const servicePage = new ServicePage(page)
   await  expect(servicePage.servicePageHeader).toBeVisible();

    await expect(servicePage.servicePageHeader).toHaveText("Services Page")


  })