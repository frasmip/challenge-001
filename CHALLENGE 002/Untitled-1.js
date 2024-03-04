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