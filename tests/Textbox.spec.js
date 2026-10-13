const {test,expect} = require('@playwright/test');
const { kMaxLength } = require('node:buffer');

test('test1',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/login',{waitUntil:"domcontentloaded"});
//fill both fields using getByLabel. 
// Assert each toHaveValue before clicking Login. 
// Then clear the username and assert toBeEmpty().
const un=page.getByLabel('Username'); 
const pw=page.getByLabel('Password');
await un.fill('tomsmith');
await pw.fill('SuperSecretPassword!');
await expect(un).toHaveValue('tomsmith');
await expect(pw).toHaveValue('SuperSecretPassword!');
await un.clear();
await pw.clear();
await expect(un).toBeEmpty();
await expect(pw).toBeEmpty();
await un.fill('tomsmith');
await pw.fill('SuperSecretPassword!');
const login=page.locator('button[type="submit"]');
await login.click();
await expect(page).toHaveURL(/\/secure/);
});



test('test2',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/inputs',{waitUntil:'domcontentloaded'});
//locate the box &  Fill 42 and assert. Press ArrowUp and assert 43.
//  Then try fill('abc') and see the error (wrap it in await expect(...).rejects.toThrow()
const box=page.getByRole('spinbutton');
await box.fill('42');
await expect(box).toHaveValue('42');
await box.press('ArrowUp');
await expect(box).toHaveValue('43');
await expect(box.fill('abc')).rejects.toThrow('Cannot type text into input[type=number]');
});

test('test3',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/dynamic_controls',{waitUntil:'domcontentloaded'});
//assert the textbox is disabled, 
// click Enable, assert it’s enabled, then fill it. (You did this one, so re-do it with toBeEditable().)
const tb=page.getByRole('textbox');
await expect(tb).toBeDisabled();
await page.getByRole('button',{name:'Enable'}).click();
await expect(tb).toBeEnabled();
await expect(tb).toBeEditable();
await tb.fill('meghana');
await expect(tb).toHaveValue('meghana');
});

test('test4',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/key_presses',{waitUntil:'domcontentloaded'});
//click the #target input, press A, Shift+B, Enter, and assert #result each time.
const box=page.locator('#target');
const result=page.locator('#result');
await box.click();
await box.press('A');
await expect(result).toHaveText('You entered: A');

await box.press('Shift+B');
await expect(result).toHaveText('You entered: B');

await box.press('Enter');
await expect(box).toBeEmpty();
});

test('iframes test1',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/nested_frames',{waitUntil:'domcontentloaded'});
    //topframe
    const topframe=page.frameLocator('frame[name="frame-top"]');
//left frame
const leftframe=topframe.frameLocator('frame[name="frame-left"]');
await expect(leftframe.locator('body')).toHaveText('LEFT');
    //bottomframe
    const bottomframe=page.frameLocator('frame[name="frame-bottom"]');
});

test('test6',async({page})=>{
    await page.goto('https://demoqa.com/text-box',{waitUntil:'domcontentloaded'});
    //Fill Full Name, Email, Current Address (textarea), and Permanent Address.
    //  Click Submit and assert the four output lines under #output.
    await page.getByPlaceholder('Full Name').fill('meghana reddy');
    await page.getByPlaceholder('name@example.com').fill('meghana@gmail.com');
    await page.getByPlaceholder('Current Address').fill('wanaparthy');
    await page.locator('#permanentAddress').fill('wanaparthy');
    await page.locator('#submit').click();
const output = page.locator('#output');
  await expect(output.locator('#name')).toContainText('meghana reddy');
  await expect(output.locator('#email')).toContainText('meghana@gmail.com');
  await expect(output.locator('#currentAddress')).toContainText('wanaparthy');
  await expect(output.locator('#permanentAddress')).toContainText('wanaparthy');

});

test('test7',async({page})=>{
    await page.goto('https://demoqa.com/text-box');
    //Enter an invalid email like abc and assert the box gets a red border (check the class with toHaveClass(/field-error/)).
   // await page.getByPlaceholder('Full Name').fill('meghana reddy');
    await page.getByPlaceholder('name@example.com').fill('meghana');
    await page.locator('#submit').click();
    await expect(page.getByPlaceholder('name@example.com')).toHaveClass(/field-error/);
   
});

test('test8',async({page})=>{
await page.goto('https://demoqa.com/text-box');
//Fill, then clear each field and assert all are empty.
await page.getByPlaceholder('Full Name').fill('meghana reddy');
    await page.getByPlaceholder('name@example.com').fill('meghana@gmail.com');
    await page.getByPlaceholder('Current Address').fill('wanaparthy');
    await page.locator('#permanentAddress').fill('wanaparthy');
    await page.getByPlaceholder('Full Name').clear();
    await page.getByPlaceholder('name@example.com').clear();
    await page.getByPlaceholder('Current Address').clear();
    await page.locator('#permanentAddress').clear();
await expect(page.getByPlaceholder('Full Name')).toBeEmpty();
await expect(page.getByPlaceholder('name@example.com')).toBeEmpty();
await expect(page.getByPlaceholder('Current Address')).toBeEmpty();
await expect(page.locator('#permanentAddress')).toBeEmpty();

});

test('test9',async({page})=>{
await page.goto('https://demoqa.com/text-box');
//Assert placeholders with toHaveAttribute('placeholder', ...).
await expect(page.locator('#userName')).toHaveAttribute('placeholder', 'Full Name');
  await expect(page.locator('#userEmail')).toHaveAttribute('placeholder', 'name@example.com');
  await expect(page.locator('#currentAddress')).toHaveAttribute('placeholder', 'Current Address');
  await expect(page.locator('#permanentAddress')).not.toHaveAttribute('placeholder', /.+/);
});

test('test10',async({page})=>{
await page.goto('https://www.saucedemo.com/');
// Login with getByPlaceholder. Then try an empty username and assert the error message.
// In checkout, fill First Name, Last Name, Zip. Leave one empty each time and assert the matching error.
const un=page.getByPlaceholder('Username');
const pw=page.getByPlaceholder('Password');
const loginbutton=page.getByRole('button',{name:'Login'});
await un.fill('standard_user');
await pw.fill('secret_sauce');
await loginbutton.click();
const openmenu=page.getByRole('button',{name:'Open Menu'});
await openmenu.click();
await page.getByText('Logout').click();
//await page.getByRole('link',{name:'Logout'}).click();
await un.fill('');
await loginbutton.click();
const error=page.locator('[data-test="error"]');
console.log("error message:",await error.textContent());
await expect(error).toContainText('Epic sadface: Username is required');
});

test('test11',async({page})=>{

//Type hello using pressSequentially with a delay, and watch it with --headed. Compare with fill.
await page.goto('https://the-internet.herokuapp.com/key_presses');
const box = page.locator('#target');
  const result = page.locator('#result');

  // 1. fill: sets the whole value at once
  await box.fill('hello');
  await expect(box).toHaveValue('hello');
  await expect(result).toBeEmpty(); // prediction: fill fires no key events

  // 2. pressSequentially: types one key at a time with a pause between keys
  await box.clear();
  await box.pressSequentially('hello', { delay: 200 });
  await expect(box).toHaveValue('hello');
  await expect(result).toHaveText('You entered: O'); // last key pressed
});

test('pressSequentially',async({page})=>{
await page.goto('https://demoqa.com/text-box');
const un=page.locator('#userName');
await un.pressSequentially('meghana reddy');
await un.press('ControlOrMeta+A');
await un.pressSequentially('replaced now');
await expect(un).toHaveValue('replaced now');
});

test('test12',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/key_presses');
const tb=page.locator('#target');
await tb.fill('meghana');
await tb.pressSequentially('meghana');
await expect(tb).toHaveValue('meghanameghana');
});

test('test13',async({page})=>{
    await page.goto('https://demoqa.com/text-box');
    const fullname=page.locator('#userName');
    //simulate the page filling the box after 1 second
    await page.evaluate(()=>{
        setTimeout(()=>{document.querySelector('#userName').value='meghana'},1000);
    });
    const iv=await fullname.inputValue();
    console.log('value from inputValue():',iv); //prints nothing
     console.log('value from inputValue():',JSON.stringify(iv));//prints ""

     await expect(fullname).toHaveValue('meghana');//waits for it,should pass
});

test('test14',async({page})=>{
await page.goto('https://demoqa.com/text-box',{waitUntil:'domcontentloaded'});
const fullname=page.locator('#userName');
  const address = page.locator('#currentAddress');
//add the boundaries ourselves
await page.evaluate(()=>{
  document.querySelector('#userName').setAttribute('maxlength','5');
document.querySelector('#currentAddress').setAttribute('readonly','');
});
await fullname.pressSequentially('meghanareddy');
//await expect(fullname).toHaveValue('meghanareddy'); //fails bcz we have set maxlength only 5
await expect(fullname).toHaveValue('megha');
//await address.fill('india');//fails bcz we made it not editable
//await expect(address).toBeDisabled(); //fails bcz we havent disabled it,we have just made it not editable
await expect(address).not.toBeEditable();
await expect(address).toBeEmpty();
});

test('test15',async({page})=>
{
    await page.goto('https://demoqa.com/text-box',{waitUntil:'domcontentloaded'});
    const address=page.locator('#currentAddress');
    await address.pressSequentially('meghana');
    await address.press('Enter');
    await address.pressSequentially('reddy');
    console.log(await address.inputValue());
await expect(address).toHaveValue('meghana\nreddy');//passes
await address.clear();
await address.fill('first\nsecond\nthird');
console.log(await address.inputValue());

});

test('test16',async({page})=>{
await page.goto('https://demoqa.com/text-box');
const fn=page.locator('#userName');
const email=page.locator('#userEmail');
await expect(fn).not.toBeFocused(); //true bcz it is not yet focused
await fn.focus();
await expect(fn).toBeFocused(); //true bcz it is focused
await fn.press('Tab'); //tab moves focus to next field
await expect(email).toBeFocused();
await email.blur();
await expect(email).not.toBeFocused();
});