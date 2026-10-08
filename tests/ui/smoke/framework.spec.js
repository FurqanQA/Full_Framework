import { test, expect } from '@playwright/test';

test('AutomationExercise is accessible', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(
        /Automation Exercise/
    );
});