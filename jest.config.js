const nextJest = require("next/jest");

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: "./src",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleNameMapper: {
        // Handle module aliases (this will be automatically configured for you soon)
        "^components/(.*)$": "<rootDir>/src/components/$1",
        "^public/(.*)$": "<rootDir>/public/$1",
        "^pages/(.*)$": "<rootDir>/src/pages/$1",
        "^services/(.*)$": "<rootDir>/src/services/$1",
        "^styles/(.*)$": "<rootDir>/src/styles/$1",
        "^interfaces/(.*)$": "<rootDir>/src/interfaces/$1",
        "^hooks/(.*)$": "<rootDir>/src/hooks/$1",
        "^utils/(.*)$": "<rootDir>/src/utils/$1",
        "^constants/(.*)$": "<rootDir>/src/constants/$1",
    },
    testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
