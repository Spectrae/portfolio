// tests/e2e/navigation.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to project and contact sections', async ({ page }) => {
    // Desktop navigation
    await page.getByRole('link', { name: 'Projects' }).click();
    await expect(page.locator('#projects')).toBeVisible();

    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('should toggle mobile menu', async ({ page }) => {
    // Resize to mobile
    await page.setViewportSize({ width: 375, height: 667 });

    await page.getByRole('button', { name: 'Open navigation menu' }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();

    await page.getByRole('button', { name: 'Close menu' }).click();
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('should toggle theme', async ({ page }) => {
    const html = page.locator('html');
    await expect(html).not.toHaveClass('dark');

    await page.getByRole('button', { name: 'Activate dark mode' }).click();
    await expect(html).toHaveClass('dark');

    await page.getByRole('button', { name: 'Activate light mode' }).click();
    await expect(html).not.toHaveClass('dark');
  });
});