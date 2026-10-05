const {test,expect} = require('@playwright/test')

test('CSSLocators',async({browser})=>{
    const context = await browser.newContext();
    const page= await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'); //head to web page
    await  page.locator('#username').fill('abc');//find username text box & fill it
    await  page.locator('#password').fill('abc');//find password textbox & fill it 
    await  page.locator('[value="Sign In"]').click();//find sign in  buttton  & fill it 

});


test('Locators',async({browser})=>{
    const context = await browser.newContext();
    const page= await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'); //head to web page
    await  page.getByRole('textbox',{name:'Username:'}).fill('abc');//find username text box & fill it
    await  page.getByRole('textbox',{name:'Password'}).fill('abc');//find password textbox & fill it 
    await  page.getByRole('button',{name:'Sign In'}).click();//find sign in  buttton  & fill it 

});

 