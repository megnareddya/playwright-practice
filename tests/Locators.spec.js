const{test,expect}=require('@playwright/test')

test('locators',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.getByRole('textbox',{name:"user-name"}).fill('standard_user')
    await page.getByRole('textbox',{name:"Password"}).fill('secret_sauce')
    await page.getByRole('button',{name:"Login"}).click()
});

test('Test1',async({page})=>{
await page.goto('https://demo.playwright.dev/todomvc/#/')
await page.getByRole('textbox',{name:'What needs to be done?'}).fill('testing')
});

test('test2',async({page})=>{
    await page.goto('https://practicesoftwaretesting.com/')
await expect(page.getByText('Practice Black Box Testing & Bug Hunting')).toBeVisible()
})

test('test3',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/login')
await page.getByLabel('Username').fill('test')
})

test('test4',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByRole('textbox',{name:"Password"}).fill('secret_sauce')
    await page.getByRole('button',{name:"Login"}).click()
});

test('test5',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByRole('textbox',{name:"Password"}).fill('secret_sauce')
    await page.getByRole('button',{name:"Login"}).click()

    await page.getByAltText('Sauce Labs Backpack').click()
});

test('test6',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user');
    await page.getByRole('textbox',{name:"Password"}).fill('secret_sauce')
    await page.getByRole('button',{name:"Login"}).click()

    await page.getByAltText('Sauce Labs Backpack').click()
});