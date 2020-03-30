// @ts-nocheck

//Declaring Namespaces in GAS

// The namespace statement workaround
// This workaround takes advantage of TypeScript "namespaces" (formerly known as "internal module") and achieves proper code isolation.

// Namespace definition can be nested, spread over multiple files and do not need any import/require statement to be used.

// module.ts
namespace Module {
    export function foo() { }
    function bar() { }  // this function can only be addressed from within the `Module` namespace
}

// anyFiles.ts
Module.foo();  // address a namespace's exported content directly

const nameIWantForMyImports = Module.foo;  // to simulate `import` with renaming
nameIWantForMyImports();