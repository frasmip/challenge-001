/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

const calcularPoligono = (poligono) => {
    let area;
        
        area =  (poligono === "Triangulo")  ? console.log(3 * 3 / 2):
                (poligono === "Cuadrado")   ? console.log(10 * 3):
                (poligono === "Rectangulo") ? console.log(4 * 7):
                

     console.log(`El area de un ${poligono.toLowerCase()} es ${area}`);
}

calcularPoligono("Triangulo");
calcularPoligono("Cuadrado");
calcularPoligono("Rectangulo");
//El área de un triángulo es igual a base por altura partido por 2. La altura es la recta perpendicular trazada desde un vértice al lado opuesto (o su prolongación).
//Por tanto, para calcular su área, tendríamos que multiplicar los dos lados consecutivos es decir lado x lado
//Fórmula del área de un rectángulo. Para calcular el área de un rectángulo multiplicamos el largo por el ancho