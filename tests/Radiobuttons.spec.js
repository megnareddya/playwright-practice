const {test,expect} = require('@playwright/test');

test('Test1',async({page})=>{
await page.goto('https://demoqa.com/radio-button');
const yes=page.getByRole('radio',{name:'Yes'});

const impressive=page.getByRole('radio',{name:'Impressive'});
await yes.check();

await impressive.check();

console.log(await page.locator('p.mt-3').textContent());
console.log(await page.locator('.text-success').textContent());
await expect(impressive).toBeChecked();
  await expect(yes).not.toBeChecked();
  await expect(yes).toBeEnabled()
  await expect(page.getByRole('radio')).toHaveCount(3);

});



test('practice2',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const radiobtn1=page.locator('input[value="radio1"]');
    const radiobtn2=page.locator('input[value="radio2"]');
    const radiobtn3=page.locator('input[value="radio3"]');
    await radiobtn1.check();
    await expect(radiobtn1).toBeChecked();
    await expect(radiobtn2).not.toBeChecked();
console.log(await radiobtn1.textContent());
console.log('value:', await radiobtn1.inputValue());
});


test("practice3",async({page})=>{

    await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
    const cradio=page.locator('#my-radio-1');
    const dradio=page.locator('#my-radio-2');
    await expect(cradio).toBeChecked();
    await dradio.check();
    await expect(dradio).toBeChecked();
    await expect(page.locator('input[name="my-radio"]:checked')).toHaveCount(1);
});

test('RB1',async({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
const radiobtn1=page.locator('input[value="radio1"]');
const radiobtn2=page.locator('input[value="radio2"]');
const radiobtn3=page.locator('input[value="radio3"]');
//Assert that none of the three radios is selected at the start.
await expect(radiobtn1).not.toBeChecked();
await expect(radiobtn2).not.toBeChecked();
await expect(radiobtn3).not.toBeChecked();

//Select Radio2 and assert it is checked.
await radiobtn2.check();
await expect(radiobtn2).toBeChecked();

//Assert that Radio1 and Radio3 are not checked.
await expect(radiobtn1).not.toBeChecked();
await expect(radiobtn3).not.toBeChecked();
//Select Radio3 and assert that Radio2 is now unchecked
await radiobtn3.check();
await expect(radiobtn2).not.toBeChecked();


});

test('RB2',async({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
const radiobtn1=page.locator('input[value="radio1"]');
const radiobtn2=page.locator('input[value="radio2"]');
const radiobtn3=page.locator('input[value="radio3"]');

//Select Radio1, and use a single CSS locator that finds whichever radio is selected, without naming Radio1 in it.
await radiobtn1.check();

//Print its value and assert it equals radio1.
console.log('selected:',page.locator('input[name="radioButton"]:checked').inputValue()) ;
await expect(page.locator('input[name="radioButton"]:checked')).toHaveValue('radio1')

//Repeat for Radio3 using the same locator.
//Assert that exactly one radio in the group is checked (toHaveCount(1)).

await expect(page.locator('input[name="radioButton"]:checked')).toHaveCount(1);

});

test('RB3',async({page})=>{
await page.goto('https://demoqa.com/radio-button');
const ybutton=page.getByText('Yes');
const ibutton=page.getByText('Impressive');
//Before clicking anything, assert the text "You have selected" does not exist (toHaveCount(0)).
await expect(page.getByText('You have selected')).toHaveCount(0);
//Select "Yes" and assert the message appears with the full text You have selected Yes.
await ybutton.check();
const message=await page.locator('p.mt-3');
console.log('message:',await message.textContent());

//Select "Impressive" and assert the message changed.
await ibutton.check();
console.log('message2:',await message.textContent());

//Print three values: the full message, just the choice, and just the prefix. (You solved this one earlier, so do it from memory.)
console.log('message2:',await message.textContent());
console.log(await page.locator('.text-success').textContent());
//Assert that the "No" radio is disabled.
await expect(page.getByText('No')).toBeDisabled();

});

test('RB4',async({page})=>{
await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
const cradio=page.getByRole('radio',{name:'Checked radio'});
const dradio=page.getByRole('radio',{name:'Default radio'});
//Assert the starting state: "Checked radio" is selected and "Default radio" is not.
await expect(cradio).toBeChecked();
await expect(dradio).not.toBeChecked();
//Switch to "Default radio" and assert the states flipped.
await dradio.check();
await expect(cradio).not.toBeChecked();
await expect(dradio).toBeChecked();
//Print the result of isChecked() for both radios.
console.log('checked radio:',await cradio.isChecked());
console.log('default radio:',await dradio.isChecked());

});




test('RB6',async({page})=>{
await page.goto('https://demoqa.com/automation-practice-form');
// fill First Name, Last Name, Email, and Mobile (10 digits). Use a different locator type for at least two of these.
// Select Female under Gender and assert it. Assert that Male and Other are unchecked.
// Switch to Other and assert that Female is now unchecked.
// Assert input[name="gender"]:checked has count 1.
// Write a reusable function selectGender(page, label) that selects a gender and asserts it. Call it for all three options in a loop.
// Click Submit, and assert the confirmation dialog shows the gender you chose. (Find the dialog with getByRole('dialog'), or Inspect its text. Use toContainText.)
});