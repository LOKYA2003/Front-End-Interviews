// We can access parents variable in local scope within a function

// debugger;

// Lexical Scope

// debugger;

function parent() {
  const mom = "Asmita";
  const father = "Rupchand";

  // Inner Function
  function children() {
    const lokesh = "Lokesh";
    const shubhangi = "Daughter";
    function lokeshChildren() {
      const bablu = "Son";

      console.log("Lokesh Father name", father);
      console.log("Rupchands Sons name is ", lokesh);
    }

    lokeshChildren();
  }

  children();
}

// New topic introduced which is called as "Closures 🙅"

parent();
// This scoping is called as lexical scope

// Up to global scope 👆
// parent 👆
// child 👆
// grand child 👆

// Bahar walo k pass inner ka access nahi hota hai

// Aur inner walo k pass bahar walo ka access hota hai

// Blocked Scope 🙅

// 1. let and const are blocked scope
// 2. Var is function scoped which cannot be accessed outside function
// 3. But we can use global keywordf

// if (true) {
//   var count = 1;
//
//   count = count + 1;
// }

// console.log(count);

// num2 = 23498 -> Can be accessed anywhere goes in the window [Global Scope]

// Module Scope - but not doing that much
