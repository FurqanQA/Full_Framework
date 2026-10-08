import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    testDir: './tests',

    timeout: 30 * 1000,

    expect: {
        timeout: 5 * 1000,
    },

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined,

    reporter: [
        ['list'],
        ['html', { open: 'never' }],
    ],

    use: {
        baseURL: process.env.BASE_URL,

        headless: true,

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        trace: 'on-first-retry',

        actionTimeout: 10 * 1000,
    },

    projects: [
        {
            name: 'chromium',

            use: {
                ...devices['Desktop Chrome'],
            },
        },
    ],
});