const {test,expect} = require('@playwright/test')

test('Basic webautomation',async({page})=>{
await page.goto('https://rahulshettyacademy.com/client/#/auth/register');//go to webpage
const firstname=page.getByPlaceholder('First Name');
const lastname=page.getByPlaceholder('Last Name');
const email=page.getByPlaceholder('email@example.com');
const phnum=page.getByPlaceholder('enter your number');
const dropdown=page.locator('.custom-select ');
const radiobutton=page.locator('input[type="radio"]');
const password=page.getByPlaceholder('Passsword',{exact:true});
const confirmpwd=page.getByPlaceholder('Confirm Passsword');
const checkbox=page.locator('input[type="checkbox"]');
const register=page.getByRole('button',{name:'Register'});
await firstname.fill('meghana');
await lastname.fill('reddy');
await email.fill('megha@gmail.com');
await phnum.fill('3456789012');
console.log('dropdown options:',await dropdown.locator('option').allTextContents());
await dropdown.selectOption({label:'Doctor'});
await expect(dropdown.locator('option:checked')).toHaveText('Doctor');
console.log('selected dropwdown option value:',JSON.stringify(await dropdown.inputValue()));
console.log('selected dropdwon option text:',JSON.stringify(await dropdown.locator('option:checked').textContent()));
await radiobutton.nth(1).check();
await expect(radiobutton.nth(1)).toBeChecked();
console.log("isChecked:",await radiobutton.nth(1).isChecked());
await password.fill('meghanareddy');
await confirmpwd.fill('meghanareddy');
await checkbox.check();
await register.click();


});