# TS in course

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
  - type anotation: code we add to tell typescript what type of value a variable will refer to(We tell typescript the type)
  - type reference: typescript tries to figure out what type of a value a variable refers to(Typescript guesses the type)
- Annotation with variables

  - why we write the type annotation manually?
    - the function that returns _any_ type
  - The **any** type
    - A type, just as _string_ or _boolean_ are
    - Means TS has no idea what this is - can't check for correct property reference
    - **Avoid variables with any at all costs** as typescript can't do type checking with any type variable.
  - Delayed initialzation

- **type defination file** <br>
  typescript use types to check our code. If typescript doesn't have this information. when using Javascript code, there is no type provided, so typescript can't figure out what kind of different types of values are flooding around javascript code.
  - type defination files: a kind of adapater between typescript and javascript.
    - sometimes, type defination files are stored automatically in library code, sometimes it may not contain the type defination file
    - not export default in ts is a convention. The reason to do so is to avoid worrying to include {} or not.
