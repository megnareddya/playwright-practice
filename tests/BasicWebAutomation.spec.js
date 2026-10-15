const {test,expect} = require('@playwright/test')

test('Basic webautomation-Register page',async({page})=>{
await page.goto('https://rahulshettyacademy.com/client/#/auth/register');//go to webpage
const firstname=page.getByPlaceholder('First Name');
const lastname=page.getByPlaceholder('Last Name');
const email=page.getByPlaceholder('email@example.com');
const phnum=page.getByPlaceholder('enter your number');
const dropdown=page.locator('.custom-select ');
const radiobutton=page.locator('input[type="radio"]');
const password=page.getByPlaceholder('Passsword',{exact:true});
const confirmpwd=page.getByPlaceholder('Confirm Passsword');
const checkbox=page.locator('input[type="checkbox"]');
const register=page.getByRole('button',{name:'Register'});
await firstname.fill('meghana');
await lastname.fill('reddy');
await email.fill('meghareddywer@gmail.com');
await phnum.fill('3456789012');
console.log('dropdown options:',await dropdown.locator('option').allTextContents());
await dropdown.selectOption({label:'Doctor'});
await expect(dropdown.locator('option:checked')).toHaveText('Doctor');
console.log('selected dropwdown option value:',JSON.stringify(await dropdown.inputValue()));
console.log('selected dropdwon option text:',JSON.stringify(await dropdown.locator('option:checked').textContent()));
await radiobutton.nth(1).check();
await expect(radiobutton.nth(1)).toBeChecked();
console.log("isChecked:",await radiobutton.nth(1).isChecked());
await password.fill('Meghanareddy@123');
await confirmpwd.fill('Meghanareddy@123');
await checkbox.check();
await register.click();
const loginbutton=page.getByRole('button',{name:'Login'});
await loginbutton.click();
await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/auth/login');

});


test('Basic Web Automation:Login page',async({page})=>{
await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
const loginemail=page.locator('#userEmail');
const loginpassword=page.locator('#userPassword');
const lloginbutton=page.locator('#login');
await page.waitForLoadState('networkidle');
await loginemail.fill('meghareddywer@gmail.com');
await loginpassword.fill('Meghanareddy@123');
await lloginbutton.click();
await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');
const cards=page.locator('.card');
console.log("all cards:",await cards.allTextContents());
console.log("cards:",await cards.nth(0).textContent());

const cardbody=page.locator('.card-body');
console.log("all cardbody:",await cardbody.allTextContents());
console.log("cardbody:",await cardbody.nth(0).textContent());

const title=page.locator('.card-body b');
console.log("all title:",await title.allTextContents());
console.log("title:",await title.nth(0).textContent());
});

test('handling ui elements',async({page})=>{
await page.goto('https://rahulshettyacademy.com/loginpagePractise/',{waitUntil:'domcontentloaded'});
const username=page.getByRole('textbox',{name:'Username:'});
const password=page.getByRole('textbox',{name:'Password:'});
const radiobutton=page.locator('.customradio');
const dropdown=page.locator('select[class="form-control"]');
const checkbox=page.locator('#terms');
const signinbutton=page.locator('#signInBtn');
await username.fill('rahulshettyacademy');
await password.fill('Learning@830$3mK2');
await radiobutton.nth(1).check();
await expect(radiobutton.nth(1)).toBeChecked();
await expect(radiobutton.nth(0)).not.toBeChecked();
await expect(radiobutton).toHaveCount(2);
await expect(radiobutton).toHaveText(['Admin','User']);
const checkedradio=page.getByRole('radio',{checked:true});
console.log('selected radiobutton:',await checkedradio.inputValue());
await expect(page.locator('#myModal')).toBeVisible();
await page.getByRole('button',{name:'Okay'}).click();
await expect(page.locator('#myModal')).toBeHidden();
//in dropdwon w ecan select either by value / index / label
await dropdown.selectOption('stud'); //by value
//await page.pause();
//await dropdown.selectOption({ label: 'Student' }); //by label
await dropdown.selectOption({ index: 0 });//by index
console.log('All dropdown options:',await dropdown.locator('option').allTextContents());
console.log('selected text:',await dropdown.locator('option:checked').textContent());
console.log('selected value:',await dropdown.inputValue());
await expect(dropdown).toHaveValue('stud');
await expect(dropdown.locator('option')).toHaveCount(3);
await checkbox.check();
await expect(checkbox).toBeChecked();
 expect(await(checkbox).isChecked()).toBeTruthy();
await checkbox.isChecked();
await signinbutton.click();
const blinkingtextone=page.locator("[href*='documents-request']");
await expect(blinkingtextone).toHaveAttribute('class','blinkingText');
await blinkingtextone.click();

const blinkingtexttwo=page.locator("[href*='qa-career']");
await expect(blinkingtexttwo).toHaveAttribute('class','blinkingText');
});

test('handling child windows',async({browser})=>{
const context=await browser.newContext();
const page= await context.newPage();
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const link1=(await page).locator("[href*='documents-request']");
const[page2]=await Promise.all([ context.waitForEvent('page'),link1.click() ]); //it waits for both a newpage & a click action to occur suimultaneously

const redfullline=page2.locator('p[class*=red]');
const fulltext=await redfullline.textContent();
console.log('full red text:',fulltext);
const arrayText= fulltext.split('@');
const righthalf=await arrayText[1];
const split2=await righthalf.split(" ")[0];
console.log('domain just email:',  split2);
const un=page.locator('#username');
await un.fill(split2);
await expect(un).toHaveValue(split2)
//textContent() vs inputValue()
console.log('username textcontent:',await un.textContent() ); //wont print anything
console.log('username textcontent:',await un.inputValue() );



});