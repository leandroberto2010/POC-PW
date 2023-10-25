import { test, expect } from '@playwright/test';

test('buscarLinkInexistente', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  await page.getByRole('link', { name:'Samsung galaxy s7'}).click();
});

test('errorSintaxis', async({ page })=>{
    await page.goto('https://www.demoblaze.com/index.html');
   // await expect(page.getByRole('link', { name: 'Samsung galaxy s6'})).toHaveAttribute('href', "prod.html?idp_=1").click()
})

test('Formulario', async({ page }) =>{
    await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Sign up' }).click();
    await page.getByLabel('Username:').click();
    await page.getByLabel('Username:').fill('testing');
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').fill('testing');
    
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole('button', { name: 'Sign up' }).click();
    await page.getByLabel('Sign up').getByLabel('Close').click();
  });


  test('mensajeContacto', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Contact' }).click();
    await page.locator('#recipient-email').fill('contacto@mail.com');
    await page.getByLabel('Contact Email:').fill('Jorge contacto');
    await page.getByLabel('Message:').fill('Mensaje de contacto');
    
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });

    await page.getByRole('button', { name: 'Send message' }).click();
  });
