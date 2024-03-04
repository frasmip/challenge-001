/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function isAnagram(palabra1, palabra2) {
    if (palabra1.toLowerCase() === palabra2.toLowerCase()) {
    return false
    }
} return palabra1.toLowerCase().split("").sort().join("") === palabra2.toLowerCase().split("").sort().join("");

console.log(isAnagram("amor", "roma"));
