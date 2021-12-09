function creaSumador (x) { // Este parámetro de llama argumento único
    return function(y) {
        return x + y ;
    };
};

var suma5 = creaSumador(5);
var suma10 = creaSumador(10);

//!SUMA 5 Y SUMA 10. Son los closures.!!!!

console.log(suma5(2)); // Esto me devuelve 7 ¿por qué?, porqué basicamente con el argumento único inicialicé la variable de x adentro de la función con el valor anterior de 5.
console.log(suma10(20)); 