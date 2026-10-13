const {test,expect} = require('@playwright/test');

test('test1',async({page})=>{

await page.goto('https://the-internet.herokuapp.com/checkboxes',{ waitUntil: 'domcontentloaded' });
const cb1=page.getByRole('checkbox').nth(0);
const cb2=page.getByRole('checkbox').nth(1);
console.log(await cb1.isChecked());
console.log(await cb2.isChecked());

await expect(cb1).not.toBeChecked();
await expect(cb2).toBeChecked();

await cb2.check(); //still checked
console.log(await cb2.isChecked());

await cb2.click(); //now its  unchecked
console.log(await cb2.isChecked());

//check them all
const checkboxes= page.getByRole('checkbox');
for( const checkbox of await checkboxes.all())
{
    await checkbox.check();
}

console.log(await cb2.isChecked());
console.log(await cb1.isChecked());

});

test('challenge2',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html',{ waitUntil: 'domcontentloaded' });
//     Select Male and assert Male is checked and FeMale is not.
await page.getByRole('radio',{name:'Male',exact: true}).check();
await expect(page.getByRole('radio',{name:'Male',exact: true})).toBeChecked();
await expect(page.getByRole('radio',{name:'FeMale',exact: true})).not.toBeChecked();

// Select FeMale and assert Male is now not checked.
await page.getByRole('radio',{name:'FeMale',exact:true}).check();
await expect(page.getByRole('radio',{name:'Male',exact: true})).not.toBeChecked();
// Add a second test that calls uncheck() on a selected radio. Run it and read the error message. Write in a comment what Playwright says.
});

test('radio uncheck error', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html', { waitUntil: 'domcontentloaded' });

  const male = page.getByRole('radio', { name: 'Male', exact: true });
  await male.check();
  await male.uncheck();   // this should FAIL
  // Playwright says: ...
});


test('challenge3',async({page})=>{
await page.goto('https://demo.automationtesting.in/Register.html',  { waitUntil: 'domcontentloaded' });
// Select Female.
await page.locator('input[value="FeMale"]').check();
// Check Cricket and Hockey only.
await page.locator('input[value="Cricket"]').check();
await page.locator('input[value="Hockey"]').check();
// Assert exactly 2 checkboxes are checked
await expect(page.locator('input[type="checkbox"]:checked')).toHaveCount(2);
// Uncheck Cricket, assert the count is now 1.
await page.locator('input[value="Cricket"]').uncheck();
await expect(page.locator('input[type="checkbox"]:checked')).toHaveCount(1);
// Assert Movies was never checked.
await expect(page.locator('input[value="Movies"]')).not.toBeChecked();
});


test('challenge4',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/',{waitUntil : 'domcontentloaded'});
// Check Saturday and Sunday only, assert the count of checked days is 2.
await page.locator('#saturday').check();
await page.locator('#sunday').check();
const dayscbs= page.locator('input[type="checkbox"][class="form-check-input"]');
const checkeddays= page.locator('input[type="checkbox"][class="form-check-input"]:checked');
await expect(checkeddays).toHaveCount(2);

// Check all 7 days, assert the count is 7.

for(const day of await dayscbs.all())
{
await day.check();
}
await expect(checkeddays).toHaveCount(7);
// Check all, then uncheck only the last 3, assert the count is 4.
// Check only the first 3 using a for loop with an index.
// Check only days whose name starts with "S" (Sunday, Saturday). Use getByLabel or text to read each label.
});

test("challenge5",async({page})=>{
await page.goto('https://practice.expandtesting.com/radio-buttons',{waitUntil:'domcontentloaded'});
// Select one color and one sport.
await page.locator('#yellow').check();
await page.locator('input[name="sport"][value="football"]').check();
// Assert both stay selected (the groups are independent).
await expect(page.locator('#yellow')).toBeChecked();
await expect(page.locator('input[name="sport"][value="football"]')).toBeChecked();
// Change only the color, assert the sport is still selected.
await page.locator('input[name="color"][value="black"]').check();
await expect(page.locator('input[name="sport"][value="football"]')).toBeChecked();
// Find any disabled radio on the page and assert toBeDisabled().
const disabled=page.locator('input[type="radio"]:disabled');
console.log("count:",await disabled.count());
await expect(disabled).toBeDisabled();
});

test('challenge6',async({page})=>{
await page.goto('https://practice.expandtesting.com/dynamic-table',{waitUntil:'domcontentloaded'});
//filter 9.3cell
 const table=page.locator('.table-striped');
 //first filter that row...
const row= table.getByRole('row').filter({hasText:'2.7 Mbps'});
await expect(row).toHaveCount(1);

await expect(row).toContainText('2.7 Mbps');
await expect(row).toContainText('9.3%');
//NOW LETS FILTER the actual 9.3cell
const cell= row.getByRole('cell').filter({hasText:'9.3%'});
await expect(cell).toBeVisible();
await expect(cell).toHaveCount(1);
await expect(cell).toHaveText('9.3%');          // exact match of the whole cell text
await expect(cell).toContainText('9.3');        // substring match


});

test('challenge7',async({page})=>{
await page.goto('https://demoqa.com/radio-button',{waitUntil : 'domcontentloaded'});
// Click Yes, assert the success message says "Yes".
await page.locator('input[id="yesRadio"]').check();
const message=page.locator('p.mt-3');
console.log('message:',await message.textContent());
await expect(message).toContainText('Yes');
// Click Impressive, assert the message changes.
await page.locator('input[id="impressiveRadio"]').check();
const messagee=page.locator('p.mt-3');
console.log('messagee:',await messagee.textContent());
await expect(messagee).toContainText('Impressive');
// Assert No is disabled.
await expect(page.locator('input[id="noRadio"]')).toBeDisabled();
// Try check() on the hidden input first and read the error. Then fix it by clicking the label.
});

test('challenge8',async({page})=>{
await page.goto('https://demoqa.com/checkbox',{waitUntil:'domcontentloaded'});
// Click Expand all.
await page.locator('.rc-tree-switcher').click();
// Tick Desktop and assert the result text mentions "desktop", "notes" and "commands".
await page.getByRole('checkbox',{name:'Select Desktop'}).check();

// Untick it and assert the result disappears.
await page.getByRole('checkbox',{name:'Select Desktop'}).uncheck();
// Tick only Notes and check what the result shows.

});

test('challenge9',async({page})=>{
await page.goto('https://demo.automationtesting.in/Register.html',{waitUntil:'domcontentloaded'});
// Selects Female.
await page.locator('input[value="FeMale"]').check();
// Checks all hobby checkboxes using a loop.
const hobbies=page.locator('input[type="checkbox"]');
for(const hobby of await hobbies.all())
{
    await hobby.check();
}
// Asserts all are checked.
await expect(page.locator('input[type="checkbox"]:checked')).toHaveCount(3);
// Unchecks all, asserts none are checked.
for(const hobby of await hobbies.all())
{
    await hobby.uncheck();
}
await expect(hobbies).not.toBeChecked();
// Checks only the last one.
await hobbies.last().check();
await expect(hobbies.last()).toBeChecked();
await expect(checked).toHaveCount(1);
// Asserts the radio is still Female, then switches to Male and asserts Female is deselected.
const female=page.locator('input[value="FeMale"]');
await expect(female).toBeChecked();
const male=page.locator('input[value="Male"]');
await expect(female).not.toBeChecked();
await expect(male).toBeChecked();
// Uses at least one console.log that prints the :checked count.
const checked=page.locator('input[type="checkbox"]:checked');
console.log('count:',await checked.count());
});