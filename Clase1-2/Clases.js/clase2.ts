// // let mensaje: string = "Hola, mundo!";

// // let edad: number = 25; edad = 26;

// // const pi: number = 3.14;

// // function sum(a: number, b: number): number {
// //     return a + b;
// //     }

// // const multiply = (a: number, b: number): number => a * b;

// // ---------------------------------------

// Ejercicios typescript

// 1. Define una función que tome dos parámetros de tipo number y devuelva la suma de ambos.

function sum(a: number, b: number): number { return a + b; }

// 2. Define una función que tome un parámetro de tipo string y devuelva el número de 
// caracteres que contiene.

function countCharacters(str: string): number { return str.length; }

// 3. Define una función que tome un parámetro de tipo string y devuelva el mismo string 
// pero con todas las letras en mayúscula.

function toUpperCase(str: string): string { return str.toUpperCase(); }

// 4. Define una función que tome un arreglo de números y devuelva la suma de todos 
// los elementos.

function sumArray(arr: number[]): number { return arr.reduce((acc, curr) => acc + curr, 0); }



// 5. Define una función que tome un arreglo de objetos de tipo Person y devuelva un nuevo
// 
type NewType = "person";
function getNames({ people }: { people: NewType[]; }): string[] { return people.map((person) => person); }

// 6. Define una función que tome dos parámetros: un arreglo de números y un número de 
// referencia. La función debe devolver un nuevo arreglo que contenga solo los números del 
// arreglo original que sean mayores que el número de referencia.

function filterNumbersGreaterThan(arr: number[], reference: number): number[] 
{ return arr.filter((num) => num > reference); }



