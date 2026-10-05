const{test,expect}=require('@playwright/test');

test('First test',async({page})=>{
    await page.goto('https://playwright.dev/docs/locators');
    console.log("reached webpage");
});