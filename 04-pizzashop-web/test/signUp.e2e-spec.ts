import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page
    .getByRole('textbox', { name: 'Nome do estabelecimento' })
    .fill('Pizza Shop')
  await page.getByRole('textbox', { name: 'Seu nome' }).fill('Jane Doe')
  await page
    .getByRole('textbox', { name: 'Seu e-mail' })
    .fill('janedoe@example.com')
  await page.getByRole('textbox', { name: 'Seu celular' }).fill('11999999999')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso')

  expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page
    .getByRole('textbox', { name: 'Nome do estabelecimento' })
    .fill('Pizza Test')
  await page.getByRole('textbox', { name: 'Seu nome' }).fill('Jane Doe')
  await page
    .getByRole('textbox', { name: 'Seu e-mail' })
    .fill('janedoe@example.com')
  await page.getByRole('textbox', { name: 'Seu celular' }).fill('11999999999')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante')

  expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')

  //await page.waitForTimeout(2000)
})
