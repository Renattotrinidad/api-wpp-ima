module.exports = {
    apps: [
        {
            name: "api-wpp-ega",
            script: "dist/app.js",
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