const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./src",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleNameMapper: {
        "^components/(.*)$": "<rootDir>/src/components/$1",
        "^public/(.*)$": "<rootDir>/public/$1",
        "^pages/(.*)$": "<rootDir>/src/pages/$1",
        "^services/(.*)$": "<rootDir>/src/services/$1",
        "^styles/(.*)$": "<rootDir>/src/styles/$1",
        "^interfaces/(.*)$": "<rootDir>/src/interfaces/$1",
        "^hooks/(.*)$": "<rootDir>/src/hooks/$1",
        "^utils/(.*)$": "<rootDir>/src/utils/$1",
        "^constants/(.*)$": "<rootDir>/src/constants/$1",
        "^__fixtures__/(.*)$": "<rootDir>/src/__fixtures__/$1",
    },
    testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
