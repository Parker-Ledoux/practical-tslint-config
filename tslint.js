const path = require('path');

/**
 * Note: Rules prefixed with "c" are from the custom rules defined in the README.
 * Rules that are not prefixed with "c" are from the Airbnb style guide.
 */
const variables = {
  'prefer-const': true, // 2.1, 13.1
  'no-var-keyword': true, // 2.2
  'one-variable-per-declaration': [true, 'ignore-for-loop'], // 13.2
  'no-unnecessary-initializer': true, // c2.1
  'no-shadowed-variable': true, //c2.2
};

const strings = {
  'prefer-template': true, // 6.3
  'no-eval': true, // 6.4
};

const numbers = {
  radix: true, // 22.3
  'use-isnan': true, // 29.1
};

const objects = {
  'no-construct': true, // 3.1, 22.2, 22.3, 22.6
  'object-literal-shorthand': true, // 3.3, 3.4
  'object-shorthand-properties-first': true, // 3.5
  'object-literal-key-quotes': [true, 'consistent-as-needed'], // 3.6
  'prefer-object-spread': true, // 3.8
};

const arrays = {
  'prefer-array-literal': true, // 4.1
  'no-for-in-array': true, // 11.1
};

const loops = {
  'prefer-for-of': true, // 11.1
};

const functions = {
  'function-constructor': true, // 7.10
  'no-parameter-reassignment': true, // 7.12
  'ter-prefer-arrow-callback': [true], // 8.1
  'arrow-return-shorthand': true, // 8.2
  'no-empty': true, // c5.1
};

const classes = {
  'unnecessary-constructor': true, // 9.5
  'member-access': [true, 'check-accessor', 'check-constructor'], // c3.1
  'member-ordering': [
    true,
    {
      order: [
        'public-static-field',
        'public-static-method',
        'protected-static-field',
        'protected-static-method',
        'private-static-field',
        'private-static-method',
        'public-instance-field',
        'protected-instance-field',
        'private-instance-field',
        'public-constructor',
        'protected-constructor',
        'private-constructor',
        'public-instance-method',
        'protected-instance-method',
        'private-instance-method',
      ],
    },
  ], // c3.2
  'no-duplicate-super': true, // c3.3
};

const interfaces = {
  'no-empty-interface': true, // c4.1
  'interface-name': [true, 'never-prefix'], // c4.2
};

const conditionals = {
  'prefer-conditional-expression': [true, 'check-else-if'],
  'no-conditional-assignment': true,
  'ter-no-self-compare': true,
  'unnecessary-else': true, // 16.3
};

const comparisons = {
  'triple-equals': [true, 'allow-null-check'], // 15.1
  'no-boolean-literal-compare': true, // 15.3
};

const imports = {
  'no-var-requires': true, // 10.1
  'no-reference': true, // 10.1
  'no-duplicate-imports': true, // 10.4
  'ordered-imports': [
    true,
    {
      'import-sources-order': 'lowercase-last',
      'named-imports-order': 'lowercase-last',
    },
  ], // c1.1
};

const maintainability = {
  'increment-decrement': true, // 13.6
  'no-this-assignment': [true, 'allow-destructuring'], // 23.5
  'no-null-keyword': true, // c6.1
  'no-non-null-assertion': true, // c6.2
  'valid-typeof': true,
};

const comments = {
  'jsdoc-format': true, // 18.1, 18.2
  'comment-format': [true, 'check-space', 'check-uppercase', 'allow-trailing-lowercase'], // 18.3
};

const naming = {
  'function-name': [
    true,
    {
      'function-regex': /^[a-z$][\w\d]+$/,
      'method-regex': /^[a-z$][\w\d]+$/,
      'private-method-regex': /^[a-z$][\w\d]+$/,
      'protected-method-regex': /^[a-z$][\w\d]+$/,
      'static-method-regex': /^[a-z$][\w\d]+$/,
    }, // 23.1
  ],
  'variable-name': [true, 'check-format'], // 23.2
  'class-name': true, // 23.3
  'import-name': true, // 23.6
};

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-consistent-codestyle')), './'),
    path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
    path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
  ],
  extends: ['tslint-config-prettier'],
  rules: {
    ...variables,
    ...objects,
    ...arrays,
    ...loops,
    ...strings,
    ...functions,
    ...imports,
    ...maintainability,
    ...conditionals,
    ...comparisons,
    ...comments,
    ...numbers,
    ...naming,
    ...classes,
    ...interfaces,
  },
};
