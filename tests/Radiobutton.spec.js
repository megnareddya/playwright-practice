const {test,expect} = require('@playwright/test');

test('test1',async({page})=>{
await page.goto('https://demoqa.com/radio-button',{waitUntil:'domcontentloaded'});
const yes=page.locator('#yesRadio');
const impressive=page.locator('#impressiveRadio');
const no=page.locator('#noRadio');
const selectedbuttonmessage=page.locator('.text-success');
// initial state
await expect(yes).not.toBeChecked();
await expect(impressive).not.toBeChecked();
await expect(no).not.toBeChecked();
// select yes
await yes.check();
await expect(yes).toBeChecked();
await expect(impressive).not.toBeChecked();
await expect(no).not.toBeChecked();
// switch to Impressive: Yes must be deselected
await impressive.check();
await expect(yes).not.toBeChecked();
await expect(impressive).toBeChecked();
await expect(no).not.toBeChecked();
// the disabled one
await expect(no).toBeDisabled();
const fullmessage=page.locator('p.mt-3');
console.log('fullmessage:',await fullmessage.textContent()); //this prints you have selected impressive
const justselected=page.locator('p.mt-3 .text-success');
console.log('justselectedmessage:',await justselected.textContent());//this prints impressive
});
