module.exports = {
    apps: [
        {
            name: "api-wpp-ima",
            script: "npx tsm ./src/app.ts",
            watch: false,
            max_memory_restart: '1000M',
            exce_mode: "cluster",
            instance: 1,
            env: {
                NODE_ENV: "development",
            },
            env_production: {
                NODE_ENV: "production"
            }
        }
    ]
}