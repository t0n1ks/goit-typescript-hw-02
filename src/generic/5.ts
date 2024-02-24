/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// KeyValuePair з числ. кл. та рядк. знач.
const numericPair: KeyValuePair<number, string> = { key: 1, value: 'One' };

// KeyValuePair з рядк. кл. та бул. знач.
const stringPair: KeyValuePair<string, boolean> = { key: 'enabled', value: true };

//KeyValuePair зі зміш. типами ключ. та знач.
const mixedPair: KeyValuePair<number | string, string[]> = { key: 42, value: ['a', 'b', 'c'] };


export {};