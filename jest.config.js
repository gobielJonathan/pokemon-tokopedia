module.exports = {
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
    moduleNameMapper: {
        "^.+\\.css$": "identity-obj-proxy",
        "^@/component/(.*)$": "<rootDir>/component/$1",
        "^@/layout/(.*)$": "<rootDir>/layout/$1",
        "^@/styles/(.*)$": "<rootDir>/styles/$1",
        "^@/api/(.*)$": "<rootDir>/api/$1",
        "^@/provider/(.*)$": "<rootDir>/provider/$1",
        "^@/page/(.*)$": "<rootDir>/pages/$1",
        "^@/gql/(.*)$": "<rootDir>/gql/$1"
    },
    transformIgnorePatterns : ['/node_modules/'],
    testEnvironment: "jsdom",
    verbose : true
};