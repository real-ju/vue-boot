module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:vue/essential',
        'standard'
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'vue'
    ],
    rules: {
        "no-multiple-empty-lines": ["off"],
        "space-before-function-paren": ["error", "never"],
        "indent": ["error", 4, {
            "MemberExpression": "off"
        }],
        "prefer-const": ["off"],
        "keyword-spacing": ["error", {
            "overrides": {
                "if": { "after": false },
                "for": { "after": false },
                "while": { "after": false }
            }
        }],
        "semi": ["off"],
        "brace-style": ["error", "stroustrup"],
        "no-trailing-spaces": ["off"],
        "eol-last": ["off"],
    }
}
