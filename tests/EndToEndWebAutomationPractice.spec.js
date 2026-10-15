const { test,expect } = require("@playwright/test");

test('Test1:Register',async({browser})=>{
const context=await browser.newContext();
const page=await context.newPage();
await page.goto('https://rahulshettyacademy.com/client/#/auth/login',{waitUntil:'domcontentloaded'});
//register
const registerbutton=page.getByRole('link',{name:'Register'});
await registerbutton.click();
await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/auth/register');
const firstname=page.getByPlaceholder('First Name');
const lastname=page.getByPlaceholder('Last Name');
const email=page.getByPlaceholder('email@example.com');
const phonenum=page.getByPlaceholder('enter your number');
const dropdown=page.locator('select.custom-select');
const radiobutton=page.locator('input[formcontrolname="gender"]');
const password=page.getByPlaceholder('Passsword',{exact:true});
const confirmpassword=page.getByPlaceholder('Confirm Passsword');
const checkbox=page.locator('input[type="checkbox"]');
const finalbutton=page.locator('input[value="Register"]');
await firstname.fill('sony');
await lastname.fill('reddy');
await email.fill('sonyreddy@gmail.com');
await phonenum.fill('1029384756');
await dropdown.selectOption({label:'Student'});
await radiobutton.nth(1).check();
await password.fill('SonyReddy@123');
await confirmpassword.fill('SonyReddy@123');
await checkbox.check();
await finalbutton.click();
await expect(page.locator('h1.headcolor')).toHaveText('Account Created Successfully');
});

test("Test2->Login",async({browser})=>{
const context=await browser.newContext();
const page=await context.newPage();
await page.goto('https://rahulshettyacademy.com/client/#/auth/login',{waitUntil:'domcontentloaded'});
//login
const loginemail=page.locator('#userEmail');
const loginpassword=page.locator('#userPassword');
const loginbutton=page.locator('#login');
await loginemail.fill('sonyreddy@gmail.com');
await loginpassword.fill('SonyReddy@123');
await loginbutton.click();
await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');
//display all card titles
const cards=page.locator('.card-body');
await cards.first().waitFor();
console.log("all cards:",await cards.allTextContents());
const cardscount=await cards.count()
console.log('cards count:',cardscount);
const cardtitles=page.locator('.card-body b');
await cardtitles.first().waitFor();   // waits until the first card is visible
console.log('all card titles:',await cardtitles.allTextContents());
console.log('cardtitles count:',await cardtitles.count());
//select a product & add it to the cart
const productname='iphone 13 pro';
for(let i=0;i<cardscount;++i)
{
    if(await cards.nth(i).locator('b').textContent() === productname){
        //add to cart
        await cards.nth(i).locator("text=Add To Cart").click();
        break;
    }
}


// const addtocartbutton=page.locator('i.fa-shopping-cart');
// await addtocartbutton.nth(3).click();

// //make sure what is added should be visible on cart page
const cartbutton=page.locator('button[routerlink="/dashboard/cart"]');
await cartbutton.click();
await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/cart');
await expect(page.locator("h3:has-text('iphone 13 pro')")).toBeVisible();
console.log("is Visible:",await page.locator("h3:has-text('iphone 13 pro')").isVisible());
//checkout
const checkoutbutton=page.locator('button[type="button"]').nth(1);
await  checkoutbutton.click();


//make sure what is added should be visible on chcekoutpage
//enter creditcard details
await page.locator('input.text-validated').nth(0).fill('23412341234');
//email should be displayed by default & assert the same email which you have used to login
//handling auto suggestive dropdown options
const autosuggestivedropdown=page.getByPlaceholder('Select Country');
await autosuggestivedropdown.pressSequentially('ind',{delay:100});
const options=page.locator('.ta-results');
await options.waitFor();
const optionscount=await options.locator('button').count();
for(let i=0; i<optionscount; ++i)
{
const text=await options.locator('button').nth(i).textContent();
if(text===' India')
{
await options.locator('button').nth(i).click();
break;

}
}

//enter other details
await page.locator('input[type="text"]').nth(1).fill('123');
await page.locator('input[type="text"]').nth(2).fill('meghanareddy');
const dd1=page.locator('select.ddl').nth(0);
const dd2=page.locator('select.ddl').nth(1);
await dd1.selectOption({label:'03'});
await dd2.selectOption({label:'06'});
//apply coupon-rahulshettyacademy
await page.locator('input[type="text"]').nth(3).fill('rahulshettyacademy');
await page.locator('button[type="submit"]').click();
//assert coupon applied text
await expect(page.locator('p.mt-1')).toHaveText('* Coupon Applied');
//place order
});





//assert thankyou for order text
//capture orderid into a variable
//go to orders history page
//search your order id in the whole table
//once found,click on view & check the details are same or not
//