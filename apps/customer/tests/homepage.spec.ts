import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test('user can log in successfully', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();

  await expect(page).toHaveURL('/');
});
