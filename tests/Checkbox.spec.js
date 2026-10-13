
const{test,expect}=require('@playwright/test');

test('test1',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/checkboxes',{waitUntil:'domcontentloaded'});
    const cbs=page.locator('#checkboxes input[type="checkbox"]');
    await expect(cbs).toHaveCount(2);
    const cb1=cbs.nth(0);
    const cb2=cbs.nth(1);
    await cb1.check();
    await cb2.uncheck();
    await expect(cb1).toBeChecked();
    await expect(cb2).not.toBeChecked();
});


