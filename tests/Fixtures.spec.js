const {test,expect}=require('@playwright/test')

test('Browser fixture',async({browser})=>{
   const context=   await browser.newContext();
   const page= await context.newPage();
   await page.goto('https://rahulshettyacademy.com/course-library');


});

test('page fixture',async({page})=>{
  
   await page.goto('https://rahulshettyacademy.com/course-library');
   const title=await page.title();
   console.log('title name:',title);

await expect(page).toHaveTitle(title);
});

