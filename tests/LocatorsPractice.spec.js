const {test,expect} = require ('@playwright/test')

test('Practice-1',async({page})=>{
  await page.goto('https://www.saucedemo.com/');
  const un=page.getByRole('textbox',{name:'Username'});
  const pw=page.getByRole('textbox',{name:'Password'});
  const lbtn=page.getByRole('button',{name:'Login'});
  await un.fill('standard_user');
  await pw.fill('secret_sauce');
  await lbtn.click();
console.log(await page.title());
await expect(page).toHaveTitle(/Swag Labs/);
await expect(page).toHaveURL(/nventory/);
await expect(page.getByText('Products')).toBeVisible();
await expect(page.getByText('Products')).toHaveText('Products');
});

test('Practice2',async({page})=>{

    /*why this below didnt worked?
    bcz,label & input are not linked...
    <label class="form-label">Email</label>
    <input type="email" id="userEmail" placeholder="name@example.com">
    */ 
/*await page.goto('https://demoqa.com/automation-practice-form');await page.getByRole('textbox',{name:'First Name'}).fill('Megna');
await page.getByRole('textbox',{name:'Last Name'}).fill('Reddy');
await page.getByLabel('Email').fill('megna@123.com');*/



/*why the below worked?
bcz,label & input are linked...
<label for="username">Username</label>
<input type="text" id="username"> */
await page.goto('https://the-internet.herokuapp.com/login');
await page.getByLabel('Username').fill('megna');

});


test('Practice3',async({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.getByPlaceholder('What needs to be done?').fill('nothing');
})

test('Practice4',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/dynamic_loading');
await expect(page.getByText(/Loaded Page Elements/)).toBeVisible();
});

test('Practice5',async({page})=>{
await page.goto('https://www.saucedemo.com/');
const un=page.getByRole('textbox',{name:'Username'});
  const pw=page.getByRole('textbox',{name:'Password'});
  const lbtn=page.getByRole('button',{name:'Login'});
  await un.fill('standard_user');
  await pw.fill('secret_sauce');
  await lbtn.click();
console.log(await page.title());

await expect(page.getByAltText('Sauce Labs Backpack')).toBeVisible();
});


test('Practice6',async({page})=>{
await page.goto('https://demoqa.com/automation-practice-form');
console.log('testlog:',await page.title());
//await expect(page.getByTitle(/demo/)).toBeVisible();
});

test('Practice7',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
const un=page.getByRole('textbox',{name:'Username'});
  const pw=page.getByRole('textbox',{name:'Password'});
  const lbtn=page.getByTestId('login-button');
  await un.fill('standard_user');
  await pw.fill('secret_sauce');
  await lbtn.click();}
);

test('CSSLocators',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/login'),
await page.locator('#username').fill('tomsmith');
await page.locator('input[type="password"]').fill('SuperSecretPassword!');
await page.locator('.radius').click();
});