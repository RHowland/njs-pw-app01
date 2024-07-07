import {test,expect} from "@playwright/test"
import ServicePage from "../Pages/Services"
import Header from "../Pages/Header"
import Footer from "../Pages/Footer"
test("Verify Service page is visible ", async ({ page }) => {
  await page.goto("/")
    const servicePage = new ServicePage(page)
    const header=new Header(page)
    const footer= new Footer(page)
    await header.servicePageLink.click();
  //Verify Header menu 
  expect(header.headerMenu).toBeVisible();
  // verify the footer menu 
  expect(footer.footerMenu).toBeVisible();
   await  expect(servicePage.servicePageHeader).toBeVisible();

    await expect(servicePage.servicePageHeader).toHaveText("Services Page")


  })