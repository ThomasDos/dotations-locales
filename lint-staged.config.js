module.exports = {
    // this will check Typescript files & tests
    "src/**/*.(ts|tsx)": () => ["yarn tsc --noEmit", "yarn jest"],

    // This will lint and format TypeScript
    "src/**/*.(ts|tsx|js)": filenames => [
        `yarn eslint --fix ${filenames.join(" ")}`,
        `yarn prettier --write ${filenames.join(" ")}`,
    ],

    // this will Format MarkDown and JSON
    "src/**/*.(md|json)": filenames =>
        `yarn prettier --write ${filenames.join(" ")}`,
};
