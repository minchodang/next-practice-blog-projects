/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                MONGO_KEY: process.env.MONGO_KEY,
                MONGO_ID: process.env.MONGO_ID,
                MONGO_CLUSTER_NAME: process.env.MONGO_CLUSTER_NAME,
                MONGO_DATABASE: process.env.MONGO_DATABASE_DEV,
            },
        };
    }

    return {
        env: {
            MONGO_KEY: process.env.MONGO_KEY,
            MONGO_ID: process.env.MONGO_ID,
            MONGO_CLUSTER_NAME: process.env.MONGO_CLUSTER_NAME,
            MONGO_DATABASE: process.env.MONGO_DATABASE,
        },
    };
};
