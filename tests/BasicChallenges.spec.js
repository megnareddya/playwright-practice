const{test,expect} = require('@playwright/test');
test('Login',async({page})=>{
    //Log in with valid credentials and assert the success message and URL. 
    // Then try invalid credentials and assert the error message.
await page.goto('https://the-internet.herokuapp.com/login',{waitUntil:'domcontentloaded'});
const un=page.getByRole('textbox',{name:'Username'});
const pw=page.getByRole('textbox',{name:'Password'});
const loginbtn=page.locator('button[type="submit"]');
await un.fill('tomsmith');
await pw.fill('SuperSecretPassword!');
await loginbtn.click();
await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
await page.locator('.icon-signout').click();
await un.fill('tomsmith');
await pw.fill('SuperSecretPasswor!');
await loginbtn.click();
await expect(page.locator('#flash')).toContainText('Your password is invalid!');
});

test('checkboxes',async({page})=>{
//Check the first, uncheck the second, and assert both states.
await page.goto('https://the-internet.herokuapp.com/checkboxes',{waitUntil:'domcontentloaded'});
const cb=page.locator('#checkboxes input[type="checkbox"]');
await cb.nth(0).check();
await cb.nth(1).uncheck();
console.log('cb1:',await cb.nth(0).isChecked());
console.log('cb2:',await cb.nth(1).isChecked());
})

            
            

test('dropdown',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/dropdown',{waitUntil:'domcontentloaded'});
//Select Option 2 by label, then by value, and assert the selection.
const dd=page.locator('#dropdown');
await dd.selectOption({label : 'Option 2'});
await dd.selectOption({value : '2'});
await expect(dd).toHaveValue('2');
await expect(dd.locator('option:checked')).toHaveText('Option 2');
});

test('addremove',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/add_remove_elements/',{waitUntil:'domcontentloaded'});
//Click Add 5 times, assert 5 delete buttons, remove 2, and assert 3 remain.
const addbutton=page.locator('button[onclick="addElement()"]');
const deletebutton=page.locator('button[onclick="deleteElement()"]');
for(let i=0;i<5;i++)
{
    await addbutton.click();
}
await expect(deletebutton).toHaveCount(5);
await deletebutton.first().click();
await deletebutton.first().click();
await expect(deletebutton).toHaveCount(3);
});

test('dynamic loading',async({page})=>{
    //Click Start and assert “Hello World!” appears.
await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1',{waitUntil:'domcontentloaded'});
const startbutton=page.getByRole('button',{name:'Start'});
await startbutton.click();
const text=page.getByRole('heading',{name:'Hello World!'});
await expect(text).toHaveText('Hello World!');


});

test('dynamic controls',async({page})=>{
    //Remove the checkbox and assert it’s gone. 
    // Then enable the input, type into it, and assert the message.
await page.goto('https://the-internet.herokuapp.com/dynamic_controls',{waitUntil:'domcontentloaded'});
const removebutton=page.getByRole('button',{name:'Remove'});
await removebutton.click();
await expect(page.locator('#checkbox')).toHaveCount(0);
const rmessage=page.locator('p[id="message"]');
await expect(rmessage).toBeVisible();

const enablebutton=page.locator('button[onclick="swapInput()"]');
await enablebutton.click();
const emessage=page.locator('p[id="message"]');
await expect(emessage).toBeVisible();

const textbox=page.locator('input[type="text"]');
await textbox.fill('meghana');
await expect(textbox).toHaveValue('meghana');



});

