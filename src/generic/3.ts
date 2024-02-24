/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}


// Приклад використання виправленної функції merge
// const obj1 = { name: 'Obj1', age: 30 };
// const obj2 = { position: 1, color: 'red' };

// const mergedObj = merge(obj1, obj2);
// console.log(mergedObj);

export {}