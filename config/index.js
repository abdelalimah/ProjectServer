const env = process.env.NODE_ENV || "developement";

const baseConfig = {
    env,
    isDev : env === "developement",
    port: 3000,
}

module.exports = baseConfig;