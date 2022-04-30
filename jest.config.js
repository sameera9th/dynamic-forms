module.exports = {
    "preset": "ts-jest",
    "testEnvironment": "jsdom",
    "transformIgnorePatterns": [
        "node_modules/(?!variables/.*)"
    ],
    "transform": {
        '^.+\\.tsx?$': 'ts-jest',
    },
    "testRegex": '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    "moduleFileExtensions": ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
