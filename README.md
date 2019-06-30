<div align="center">
<h1>practical-tslint-config</h1>

<img height="80" width="80" alt="focus" src="https://image.flaticon.com/icons/svg/1055/1055683.svg" />

<strong>A TSLint ruleset based on the
[Airbnb JavaScript style guide](https://github.com/airbnb/javascript),
[Prettier](https://prettier.io/), and
[TypeScript best practices](https://www.typescriptlang.org/docs/home.html).</strong>

</div>

## Goal

To build a ruleset that promotes consistency, efficiency, optimized code, and most of all to **not
get in the developer's way**.

## Installation

```sh
npm install practical-tslint-config --save-dev
```

## Usage

The only thing that your `tslint.json` should consist of:

```javascript
{
  "extends": "practical-tslint-config"
}
```

Some of the rules in the set require type info. Therefore when you run the linter via CLI,
specifying the `--project` flag is recommended.

```sh
tslint --project tsconfig.json --config tslint.json
```

## Prettier

This ruleset is specifically designed to not lint for any rules that you can set (and automatically
fix) through Prettier. Therefore it is **highly** recommended that you
[configure Prettier](https://prettier.io/docs/en/configuration.html) for your project with
[this custom configuration](https://www.npmjs.com/package/prettier-airbnb-config?activeTab=readme).

```
npm install prettier prettier-airbnb-config --save-dev
```

## Custom Rules

The Airbnb JavaScript style guide does an excellent job of being _a mostly reasonable guide to
JavaScript_. However, linting rules don't exist for every recommendation in the style guide nor do
they capture all of TypeScript's nuances. Furthermore, a fair number of rules can be fixed using
Prettier. Therefore the other rules that this configuration lints for that aren't outlined in the
Airbnb guide are mentioned here.

### Imports

<a name="imports--ordered"></a><a name="c1.1"></a>

- [c1.1](#imports--ordered) Requires that import statements be alphabetized and grouped.

  ```typescript
  // bad
  import {bar, foo} from '../zxy';
  import Abc from '../Xyz';

  // good
  import Abc from '../Xyz';
  import {bar, foo} from '../zxy';
  ```

### Variables

<a name="initialization--undefined"></a><a name="c2.1"></a>

- [c2.1](#initialization--undefined) Variables initialized with `let` or destructuring initializer
  should not be assigned to `undefined`.

> Values in JavaScript default to undefined. There’s no need to do so manually.

```typescript
// bad
let a = undefined;

// good
let a;
```

<a name="variables--shadow"></a><a name="c2.2"></a>

- [c2.2](#variables--shadow) Disallows shadowing variable declarations.

  > When a variable in a local scope and a variable in the containing scope have the same name,
  > shadowing occurs. Shadowing makes it impossible to access the variable in the containing scope
  > and obscures to what value an identifier actually refers.

  ```typescript
  // bad
  const a = 'no shadow';
  function print() {
    const a = 'shadow'; // TSLint will complain here.
    console.log(a);
  }
  print(); // logs 'shadow'.

  // good
  const a = 'no shadow';
  function print() {
    console.log(a);
  }
  print(); // logs 'no shadow'.
  ```

### Classes

<a name="classes--member-access"></a><a name="c3.1"></a>

- [c3.1](#classes--member-access) Requires explicit visibility declarations for class members.

  > Members lacking a visibility declaration may be an indication of an accidental leak of class
  > internals.

  ```typescript
  // bad
  class Foo {
    bar: string;
  }

  // good
  class Foo {
    private bar: string;
  }
  ```

<a name="classes--member-ordering"></a><a name="c3.2"></a>

- [c3.2](#classes--member-ordering) Enforces member ordering.

  > A consistent ordering for class members can make classes easier to read, navigate, and edit.

  ```typescript
  // bad
  class Foo {
    public bar() {
      ...
    }
    private abc: string;
    public static xyz: boolean;
  }

  // good
  class Foo {
    public static xyz: boolean;
    private abc: string;

    public bar() {
      ...
    }
  }
  ```

<a name="classes--no-duplicate-super"></a><a name="c3.3"></a>

- [c3.3](#classes--no-duplicate-super) Warns if `super()` appears twice in a constructor.

  > The second call to `super()` will fail at runtime.

  ```typescript
  // bad
  class Foo extends Bar {
    public constructor() {
      super();
      super();
    }
  }

  // good
  class Foo extends Bar {
    public constructor() {
      super();
    }
  }
  ```

### Interfaces

<a name="interfaces--empty-interface"></a><a name="c4.1"></a>

- [c4.1](#interfaces--empty-interface) Forbids empty interfaces.

  ```typescript
  // bad
  interface Foo {}

  // good
  interface Foo {
    foo: string;
  }
  ```

  <a name="interfaces--name"></a><a name="c4.2"></a>

- [c4.2](#interfaces--name) Requires interface names to not have an “I” prefix

  ```typescript
  // bad
  interface IFoo {}

  // good
  interface Foo {
    foo: string;
  }
  ```

### Functions

<a name="functions--empty"></a><a name="c5.1"></a>

- [c5.1](#functions--empty) Disallows empty blocks.

  > Empty blocks are often indicators of missing code.

  ```typescript
  // bad
  function foo() {}

  // good
  function foo() {
    if (conditional) {
      ...
    }
  }
  ```

### Maintainability

<a name="maintainability--null"></a><a name="c6.1"></a>

- [c6.1](#maintainability--null) Disallows use of the `null` keyword literal.

  > To remove confusion over the two similar values, it’s better to stick with just `undefined`.

  ```typescript
  // bad
  let a: string | null;

  // good
  let a: string | undefined;
  ```

<a name="maintainability--non-null-assertion"></a><a name="c6.2"></a>

- [c6.2](#maintainability--non-null-assertion) Disallows non-null assertions using the `!` postfix
  operator.

  > Using non-null assertion cancels the benefits of the strict null checking mode.

  ```typescript
  // bad
  function foo(instance: MyClass | undefined) {
    instance!.doWork();
  }

  // good
  function foo(instance: MyClass | undefined) {
    if (instance !== undefined) {
      instance.doWork();
    }
  }
  ```
