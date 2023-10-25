import {test} from '@playwright/test'

test('mensajeContacto1', async ({ page }) => {
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

  test('mensajeContacto2', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Contact' }).click();
    await page.locator('#recipient-email').fill('contacto2@mail.com');
    await page.getByLabel('Contact Email:').fill('Miguel contacto');
    await page.getByLabel('Message:').fill('Mensaje de contacto paralelo');
    
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });

    await page.getByRole('button', { name: 'Send message' }).click();
  });

  test('mensajeContacto3', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Contact' }).click();
    await page.locator('#recipient-email').fill('contacto3@mail.com');
    await page.getByLabel('Contact Email:').fill('George Contact');
    await page.getByLabel('Message:').fill('Mensaje de contacto en paralelo');
    
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });

    await page.getByRole('button', { name: 'Send message' }).click();
  });

  test('mensajeContacto4', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Contact' }).click();
    await page.locator('#recipient-email').fill('contacto4@mail.com');
    await page.getByLabel('Contact Email:').fill('Pedro contractil');
    await page.getByLabel('Message:').fill('Mensaje de contacto paralelo');
    
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });

    await page.getByRole('button', { name: 'Send message' }).click();
  });