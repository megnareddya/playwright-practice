const {test,expect} = require('@playwright/test')

/*test('CSSLocators',async({browser})=>{
    const context = await browser.newContext();
    const page= await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'); //head to web page
    await  page.locator('#username').fill('abc');//find username text box & fill it
    await  page.locator('#password').fill('abc');//find password textbox & fill it 
    await  page.locator('[value="Sign In"]').click();//find sign in  buttton  & fill it 

}); */


test('Locators',async({browser})=>{
    const context = await browser.newContext();
    const page= await context.newPage();
    const un=page.getByRole('textbox',{name:'Username:'});
    const pw=page.getByRole('textbox',{name:'Password'});
    const btn=page.getByRole('button',{name:'Sign In'});
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'); //head to web page
    await  un.fill('abc');//find username text box & fill it
    await  pw.fill('abc');//find password textbox & fill it 
    await btn.click();//find sign in  buttton  & fill it 
   const errorMessage=await page.locator('[style="display: none;"]').textContent(); //extract the incorrect creddentials text from webpage & print it
console.log('Error Message is :',errorMessage);//printinng the error message onto console
await expect(page.locator('[style="display: none;"]')).toContainText('Incorrect');//ASSERTION FOR THAT ERROR MESSAGE
const title=await page.title();//getting the title 
console.log('the title is :',title);//print the title
await expect(page).toHaveTitle(title);//assertion for title

await  un.fill('');//find username text box & fill it
    await  pw.fill('');//find password textbox & fill it 
    await  un.fill('rahulshettyacademy');//find username text box & fill it
    await  pw.fill('Learning@830$3mK2');//find password textbox & fill it 
       await page.getByRole('checkbox', { name: /terms and conditions/ }).check();

    await btn.click();//find sign in  buttton  & fill it 

    await expect(page).toHaveURL(/shop/);

    const product=await page.locator('.card-body a').nth(3).textContent();
    console.log(product);
    console.log(await page.locator('.card-body a').allTextContents())//PRINTING ALL THE TITLES 

});

 