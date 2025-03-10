import { WIN_PATTERNS } from '../constants/win-patterns';

export const isDraw = (field) => field.every((cell) => cell);

export const isWin = (field, currentPlayer) =>
	WIN_PATTERNS.some((pattern) => pattern.every((idxCell) => field[idxCell] === currentPlayer));

//------------------------------------------------------
// метод every() позволяет проверить (в порядке возрастания индекса), все ли элементы в массиве соответствуют условию заданному в передаваемой функции.
// Возвращаемое значение метода будет логическое значение true, если функция обратного вызова возвращает значение true для всех элементов массива, в противном случае вернет логическое значение false, при том значение false возвращается сразу при нахождении хотя бы одного элемента не соответствующему заданному условию.
// Метод every() всегда возвращает true, когда вызывается на пустом массиве.
// NB! Метод every() не изменяет массив для которого он был вызван.

//-----------------------------------------------------
// JavaScript метод some()
// метод some() позволяет проверить соответствует ли по крайней мере один элемент в массиве условию, заданному в передаваемой функции.
//Возвращаемое значение метода будет логическое значение true, если функция обратного вызова возвращает значение true (найден элемент который соответствует заданному условию), в противном случае вернет логическое значение false (все элементы массива не соответствуют переданному условию).
//NB! метод some() не изменяет массив для которого он был вызван.

//const arr = [10, 20, 30, 40]

// arr.some( currentValue => currentValue > 100 ) //возвращаемое значение false
// arr.some( currentValue => currentValue < 100 ) //возвращаемое значение true

// function checkNumber( elem ) {
//   return elem == 30 //проверяем соответствует ли текущий элемент значению 30
// }
//проверяем соответствует ли по крайней мере один элемент в массиве условию, заданному в передаваемой функции:
// arr.some( checkNumber ) //возвращаемое значение true
