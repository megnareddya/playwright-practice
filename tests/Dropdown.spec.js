 const{test,expect} = require('@playwright/test');

 test('HandlingDropdowns',async({page})=>{
// Open the page and locate the Country dropdown.
await page.goto('https://testautomationpractice.blogspot.com/',{waitUntil:'domcontentloaded'});
const countrydd = page.locator('#country');

// Select “India” by label, then assert it with toHaveValue().
await countrydd.selectOption({label : 'India'});
await expect(countrydd).toHaveValue('india');

// Select an option by value, then by index.
await countrydd.selectOption({value : 'brazil'});
await expect(countrydd).toHaveValue('brazil');
await countrydd.selectOption({index : 1});
await expect(countrydd).toHaveValue('canada');
// Print the total number of options.
const options=countrydd.locator('option');
console.log('count:',await options.count());
// Print all option names using allTextContents().
const names=await options.allTextContents();
console.log("optionname:",names);
// Assert that “Japan” exists in the list.
expect(names).toContain('Japan');
// Print the currently selected text.
const selectedText = await countrydd.locator('option:checked').textContent();
console.log('Selected text:', selectedText);
// Check whether the list is sorted.
// Loop through every option and select each one.
 });