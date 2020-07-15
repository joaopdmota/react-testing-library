module.exports = {
    'verbose': true,
    'collectCoverage': true,
    'transform': {
        '^.+\\.(js|jsx)?$': 'babel-jest',
    },
    setupFilesAfterEnv: ['./config/setupTests.js'],
    collectCoverageFrom: [
        '<rootDir>/src/components/**/*.{js,jsx}',
        '!**/node_modules/**',
    ],
};