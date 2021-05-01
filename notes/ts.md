# TS in course

## Course Notes

- Type => Data Type. An easy way to refer to the different properties + functions that a value has.

- Typescript = Javascript + A type system

- Types in TS
  - Primitive types: number, boolean, void, undefined, string, symbol, null
  - Object types: functions, arrays, classes, objects
- why do we care about types at all
  - types are used by the typescript compiler to analyze our code for errors
  - types allow other engineers to understand what values are flowing around our codebase
- When to use types? Everywhere
- Type annotation and interfaces
  - type annotation: code we add to tell typescript what type of value a variable will refer to(We tell typescript the type)
  - type reference: typescript tries to figure out what type of a value a variable refers to(Typescript guesses the type)
- Interfaces around functions

  > 1.  the input type
  > 2.  the out put type
  > 3.  Annoation for anynomous functions

- [Tuples](https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple)
  Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number

- void and never
  - voide
  ```ts
  <!-- not return anything -->
  const func = (): void => {
    console.log("hello");
  };
  ```
  ```ts
  const func = (): never => {
    throw new Error("never reach the end of the func");
  };
  ```
  - [never vs void](https://stackoverflow.com/questions/37910669/what-is-the-difference-between-never-and-void-in-typescript)(either throwing an exception or failing to terminate.)
- Annotation with variables

  - why we write the type annotation manually?
    - the function that returns _any_ type
  - The **any** type
    - A type, just as _string_ or _boolean_ are
    - Means TS has no idea what this is - can't check for correct property reference
    - **Avoid variables with any at all costs** as typescript can't do type checking with any type variable.
  - Delayed initialization

- **type definition file** <br>
  typescript use types of checking our code. If typescript doesn't have this information. when using Javascript code, there is no type provided, so typescript can't figure out what kind of different types of values are flooding around javascript code.
  - type definition files: a kind of adapter between typescript and javascript.
    - sometimes, type definition files are stored automatically in library code; sometimes it may not contain the type definition file
    - not export default ints is a convention. The reason to do so is to avoid worrying about including {} or not.
- _private_ modifier

- a | b

```ts
const Company = { name: string, location: Location };
const People = { name: string, age: number, location: Location };
type mappable = Company | People; //the operatable properties are the intesection ones
```

## Appendix

- [Namespacing in ts](https://www.typescriptlang.org/docs/handbook/namespaces.html)

  - Global namespace by default
  - **Here, we’ll split our Validation namespace across many files. Even though the files are separate, they can contribute to the same namespace and be consumed as if they were all defined in one place.** By adding a reference tag to tell the compiler about the relationships between files.

- [type vs interface in ts](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)
  - most cases they are exchangeable
  - extendable
- Interface
  Typescript checks if an object is an instance of an interface implicitly

  ```ts
  interface Mappable {
    location: {
      lat: number;
      lng: number;
    };
    markerConent(): string;
  }

  class CustomMap {
    private map;

    counstructor(mappable:Mappable) {
      <!-- some other code -->
    }

    markerContent(mappable:Mappable) {
      <!-- something with the content -->
    }
  }
  ```
