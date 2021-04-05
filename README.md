### TypeScript

Node executes JS
TS Library executes TS

Browser cannot executes TS <- Ts needs to be changed to JS

npm i typescript
npm i -g typescript OR npx tsc FILENAME -w

tsc -w = watch mode to automatically update js code

Go to type definition to see lib.dom.d.ts file

Options
[https://www.typescriptlang.org/docs/handbook/compiler-options.html]

allowJS - to upgrade gradually
declaration - Generate .d.ts files
esModuleInterop - Although common, could be dangerous
jsx
lib
outDir
target
types, typeRoots
strict
noImplicit
module
w

type in lower case
number, string
let arr:[boolean, number, string] = [true, 2, '3'] // Tuple
let str = 'Hi!' as const;
?: to indicates uncertainty

When type is inferenced, no need to specify every single type
