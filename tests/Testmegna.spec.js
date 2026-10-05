const { test, expect } =require ('@playwright/test') 

test('Test Megna',async({page})=>{
await page.goto('https://www.youtube.com/watch?v=vH0Lck0wLPs');
console.log('reached webpage')
console.log('success')
}) 