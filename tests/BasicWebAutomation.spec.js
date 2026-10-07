const {test,expect} = require('@playwright/test')

test('Basic webautomation',async({page})=>{
await page.goto('https://rahulshettyacademy.com/client/#/auth/register');//go to webpage
await page.locator('#firstName').fill('meghana'); //firstname
await page.locator('#lastName').fill('reddy'); //lastname
await page.locator('#userEmail').fill('meghana@gmail.com'); //email
await page.locator('#userMobile').fill('1234567890'); //phonenumber
const dropdown= page.locator('select[formcontrolname="occupation"]');//dropdown
await dropdown.selectOption('1: Doctor');
await page.locator('input[value="Female"]').check();//radiobutton
await page.getByPlaceholder('Passsword',{ exact: true }).fill('meghana123'); //password
await page.getByPlaceholder('Confirm Passsword').fill('meghana123'); //Confirm Passsword
await page.locator('input[type="checkbox"]').check();//checkbox
await page.locator('#login').click(); //register button








});