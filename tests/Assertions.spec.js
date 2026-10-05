const {test,expect}=require('@playwright/test')

test('Assertions',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')//go to website

});