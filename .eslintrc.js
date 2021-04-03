module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'prettier'
    ],
    rules: {
        "prettier/prettier": ["error"],
        // "no-multiple-empty-lines": ["off"],
        // "space-before-function-paren": ["error", "never"],
        // "indent": ["error", 4, {
        //     "MemberExpression": "off"
        // }],
        // "prefer-const": ["off"],
        // "keyword-spacing": ["error", {
        //     "overrides": {
        //         "if": { "after": false },
        //         "for": { "after": false },
        //         "while": { "after": false }
        //     }
        // }],
        // "semi": ["off"],
        // "brace-style": ["error", "stroustrup"],
        // "no-trailing-spaces": ["off"],
        // "eol-last": ["off"],
    }
}
