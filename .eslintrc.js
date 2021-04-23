module.exports = {
	extends: ["jonhaddow", "jonhaddow/react", "jonhaddow/typescript"],
	parserOptions: {
		sourceType: "module",

		// The include property on this file is used to determine
		// the files to lint.
		project: "./tsconfig.json",
	},
};
