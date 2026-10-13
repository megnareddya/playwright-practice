 const {test,expect} = require('@playwright/test');

 test('HandlingCheckboxesInATable',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/',{waitUntil:'domcontentloaded'});
const table=page.locator('#productTable'); //table
const rows=table.locator('tbody tr'); //rows
const columns=table.locator('thead th'); //columns
console.log('Rows:', await rows.count()); //row count
console.log('Columns:', await columns.count()); //column count


const prow=rows.filter({hasText:'Smartphone'});//particular row
const cb=prow.locator('input[type="checkbox"]');//checkbox of that particular row
await cb.check();
await expect(cb).toBeChecked();

//check multiple products

const products=['Smartphone' , 'Laptop' , 'Tablet' , 'Smartwatch' , 'Wireless Earbuds'];
for(const name of products)
{
 await rows.filter({hasText:name}).locator('input[type="checkbox"]').check();
}
 });