import { defineConfig } from '@gravity-ui/app-builder';
import process from 'process';

export default defineConfig({
    client: {
        bundler: 'rspack',
        transformCssWithLightningCss: process.env.LIGHTNING_CSS === '1',
    },
    server: {},
});
