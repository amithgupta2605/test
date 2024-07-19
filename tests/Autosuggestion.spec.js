import { test, expect } from '@playwright/test';
//import { equal } from "assert";

test('Autosuggestiondropdown', async ({ page }) => {
//console.log("hello");
await page.goto("https://www.redbus.in/");
await page.waitForTimeout(2000);
await page.locator("//input[@id='src']").fill('delhi');
/*const Options = await page.$$("//ul[@class='sc-dnqmqq dZhbJF']//div//text[1]");

//console.log(Options);
await page.waitForTimeout(2000);
//console.log(Options);
for (let option of Options) {
  const text = await option.textContent();
   console.log('text get', text);
}
   */
const Options = await page.$$(".sc-dnqmqq .dZhbJF");

// Loop through each option and log its text content
for (let option of Options) {
  const text = await option.textContent();
  console.log('text get', text.trim()); // trim() to remove any leading or trailing whitespace
}
await page.waitForTimeout(1000);
//await page.pause();
})