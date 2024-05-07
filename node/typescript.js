"use strict";

const tseslint = require('@typescript-eslint/eslint-plugin');
const tsstylistic = require('@stylistic/eslint-plugin-ts');
const stylistic = require('@stylistic/eslint-plugin');
const eslintParser = require('@typescript-eslint/parser');

module.exports = {
    files: ['**/*.ts'],
    languageOptions: {
        parser: eslintParser
    },
    ignores: [
        '*.js'
    ],
    plugins: {
        '@typescript-eslint': tseslint,
        '@stylistic/ts': tsstylistic,
        '@stylistic': stylistic,
    },
    rules: {
        curly: ['error', 'all'],
        eqeqeq: ['error', 'always', { 'null': 'ignore' }],
        'no-console': 'error',
        'no-var': 'error',
        'no-param-reassign': ['error', { props: false }],
        'no-multi-assign': 'error',
        'no-duplicate-imports': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': ['error', {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
        }],
        '@typescript-eslint/no-loop-func': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        '@stylistic/ts/indent': ['error', 2],
        '@stylistic/ts/quotes': ['error', 'single'],
        '@stylistic/ts/semi': ['error', 'always'],
        '@stylistic/ts/space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
        }],
        '@stylistic/ts/comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'never',
            exports: 'never',
            functions: 'never',
            enums: 'always',
        }],
        '@stylistic/ts/comma-spacing': ['error', { before: false, after: true }],
        '@stylistic/ts/space-before-blocks': 'error',
        '@stylistic/ts/space-infix-ops': 'error',
        '@stylistic/array-element-newline': ['error', 'consistent'],
        '@stylistic/array-bracket-spacing': ['error', 'never'],
        '@stylistic/ts/block-spacing': 'error',
        '@stylistic/ts/brace-style': ['error', '1tbs'],
        '@stylistic/ts/arrow-parens': 'off',
        '@stylistic/operator-linebreak': ['error', 'before'],
        '@stylistic/max-len': ['error', {
            code: 110,
            ignoreUrls: true,
            ignoreTemplateLiterals: true,
        }],
        '@stylistic/computed-property-spacing': ['error', 'never'],
        '@stylistic/generator-star-spacing': ['error', 'before'],
        '@stylistic/ts/keyword-spacing': ['error', {
            before: true,
            after: true,
        }],
        'max-params': 'off',
        '@typescript-eslint/max-params': ['error', { 'max': 4 }],
        '@stylistic/object-curly-newline': ['error', {
            ObjectExpression: { multiline: true, minProperties: 3 },
            ObjectPattern: { multiline: true },
            ImportDeclaration: 'never',
            ExportDeclaration: { multiline: true },
        }],
        '@stylistic/ts/object-curly-spacing': ['error', 'always'],
        '@stylistic/object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
    },
};