import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:9000/',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        }
    },
    component: {
        devServer: {
            framework: 'svelte',
            bundler: 'webpack'
            // optionally pass in webpack config
        }
    }
});
