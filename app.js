//TODO: Paso Número 1

let respuesta = prompt ("¿Eres bellísimo/a");

if(respuesta.toLowerCase() === "sí" || respuesta.toLowerCase() === "si") {
    alert ("Ciertamente");
} else if(respuesta.toLowerCase() === "no") {
    alert ("No te creo");
    } else {
        alert ("Respuesta no valida");
    }

//TODO: Paso Número 2

// Solicitar al usuario que ingrese un número
let numero = prompt("Por favor, ingresa un número");

// Convertir la entrada del usuario a un número "parseInt(numero)"
numero = parseInt(numero);

// Verificar si el número es divisible entre dos
if(numero % 2 === 0) {
    alert(numero + " es divisible entre 2");
} else {
    alert(numero + " no es divisible entre 2");
}

//TODO: Paso Número 3

if (isNaN(numero)) {
    alert("Por favor, ingresa un valor numérico válido.");
} else {
    // Determinar si el número es par
    if (numero % 2 === 0) {
        alert(numero + " es un número par.");
    } else {
        alert(numero + " no es un número par.");
    }
}

//TODO: Paso Número 4

// Solicitar al usuario que ingrese un número de cliente
let numeroCliente = prompt("Por favor, ingresa tu número de cliente");

// Convertir la entrada del usuario a un número
numeroCliente = parseInt(numeroCliente);

// Verificar si la entrada es el número 1000
if (numeroCliente === 1000) {   
    alert("Ganaste un premio");
} else {
    alert("Lo sentimos, sigue participando");
}

//TODO: Paso Número 5

// Solicitar al usuario que ingrese el primer número
let numero1 = prompt("Por favor, ingresa el primer número");

// Solicitar al usuario que ingrese el segundo número
let numero2 = prompt("Por favor, ingresa el segundo número");

// Convertir las entradas del usuario a números
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

// Comparar los dos números y mostrar cuál es menor
if (numero1 < numero2) {
    alert("El número menor es: " + numero1);
} else if (numero2 < numero1) {
    alert("El número menor es: " + numero2);
} else {
    // En caso de que ambos números sean iguales, no considerar este caso según las instrucciones
    alert("Los números son iguales, no se considera este caso.");
}

//TODO: Paso Número 6

// Solicitar al usuario que ingrese tres números
let num1 = prompt("Por favor, ingresa el primer número");
let num2 = prompt("Por favor, ingresa el segundo número");
let num3 = prompt("Por favor, ingresa el tercer número");

// Convertir las entradas del usuario a números
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

// Determinar y mostrar cuál de los tres números es el mayor
if (num1 >= num2 && num1 >= num3) {
    alert("El número mayor es: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    alert("El número mayor es: " + num2);
} else {
    alert("El número mayor es: " + num3);
}

//TODO: Paso Número 7

// Solicitar al usuario que ingrese un día de la semana
let dia = prompt("Por favor, ingresa un día de la semana");

// Convertir la entrada a minúsculas para hacer la comparación no sensible a mayúsculas
dia = dia.toLowerCase();

// Utilizar switch para responder con mensajes diferentes según el día ingresado
switch(dia) {
    case 'lunes':
        alert("¡Ánimo! Comienza la semana.");
        break;
    case 'viernes':
        alert("¡Ya casi es fin de semana!");
        break;
    case 'sábado':
        alert("Es fin de semana, ¡a disfrutar!");
        break;
    case 'domingo':
        alert("Es fin de semana, ¡a disfrutar!");
        break;
    default:
        alert("Es un día entre semana.");
        break;
}

//TODO: Paso Número 8

// Solicitar al usuario que ingrese una calificación
let calificacion = prompt("Por favor, ingresa una calificación entre 1 y 10");

// Convertir la entrada del usuario a un número
calificacion = parseInt(calificacion);

// Comprobar que el número esté en el rango de 1 a 10
if (isNaN(calificacion) || calificacion < 1 || calificacion > 10) {
    alert("Error: La calificación debe ser un número entre 1 y 10.");
} else {
    // Calificación dentro del rango, imprimir mensaje correspondiente
    if (calificacion < 6) {
        alert("Reprobado");
    } else if (calificacion >= 6 && calificacion <= 8) {
        alert("Regular");
    } else if (calificacion === 9) {
        alert("Bien");
    } else if (calificacion === 10) {
        alert("Excelente");
    }
}

//TODO: Paso Número 9

// Precios base y de toppings
let precioBaseHelado = 50;
let preciosToppings = {
    'oreo': 10,
    'kitkat': 15,
    'brownie': 20
};

// Solicitar al usuario que elija un topping
let topping = prompt("Elige un topping para tu helado: oreo, kitkat, brownie");

// Calcular el costo total del helado
let costoTotalHelado;

// Usar switch para establecer el precio basado en el topping elegido
switch (topping.toLowerCase()) {
    case 'oreo':
        costoTotalHelado = precioBaseHelado + preciosToppings.oreo;
        alert("El costo total de tu helado con topping de oreo es " + costoTotalHelado + " MXN");
        break;
    case 'kitkat':
        costoTotalHelado = precioBaseHelado + preciosToppings.kitkat;
        alert("El costo total de tu helado con topping de KitKat es " + costoTotalHelado + " MXN");
        break;
    case 'brownie':
        costoTotalHelado = precioBaseHelado + preciosToppings.brownie;
        alert("El costo total de tu helado con topping de brownie es " + costoTotalHelado + " MXN");
        break;
    default:
        alert("No tenemos este topping, lo sentimos. El precio del helado sin ningún topping es " + precioBaseHelado + " MXN");
        break;
}

//TODO: Paso Número 10

// Precios base por programa
let precios = {
    'curso': 4999,
    'carrera': 3999,
    'master': 2999
};

// Duración de cada programa
let duraciones = {
    'curso': 2,
    'carrera': 6,
    'master': 12
};

// Descuentos disponibles
let descuentos = {
    'facebook': 0.20,
    'google': 0.15,
    'jesua': 0.50
};

// Solicitar al usuario que elija un programa
let programa = prompt("Elige el programa educativo que deseas cursar: Curso, Carrera, Master").toLowerCase();

// Solicitar al usuario si tiene alguna beca
let beca = prompt("¿Cuentas con alguna beca? Ingresa 'Facebook', 'Google' o 'Jesua' si tienes alguna. Si no tienes, escribe 'no'.").toLowerCase();

// Verificar si el programa elegido es válido y calcular el precio
if (precios[programa]) {
    let precioBase = precios[programa];
    let duracion = duraciones[programa];
    let descuentoAplicado = descuentos[beca] || 0;
    let precioFinal = precioBase - (precioBase * descuentoAplicado);
    let costoTotal = precioFinal * duracion;

    alert("El precio mensual para el programa " + programa + " es de: $" + precioFinal.toFixed(2) + " MXN");
    alert("El costo total por el programa " + programa + " durante " + duracion + " meses es de: $" + costoTotal.toFixed(2) + " MXN");
} else {
    alert("El programa seleccionado no es válido. Por favor, elige entre: Curso, Carrera, Master.");
}

//TODO: Paso Número 11

// Precios por kilómetro según el tipo de vehículo
let preciosPorKilometro = {
    'coche': 0.20,
    'moto': 0.10,
    'autobús': 0.5
};

// Solicitar al usuario el tipo de vehículo y la distancia recorrida

let tipoVehiculo = prompt("Introduce el tipo de vehículo (coche, moto, autobús):").toLowerCase();
let distanciaRecorrida = parseFloat(prompt("Introduce la distancia recorrida en kilómetros:"));
let litrosConsumidos = parseFloat(prompt("Introduce los litros de combustible consumidos:"));
// Solicitar al usuario el tipo de vehículo y la distancia recorrida

// Calcular el precio por kilómetro
let precioKilometro = preciosPorKilometro[tipoVehiculo];

// Determinar el extra por litros consumidos
let extraPorLitros;
if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
    extraPorLitros = 5;
} else {
    extraPorLitros = 10;
}

// Calcular el total a pagar
let totalAPagar = (precioKilometro * distanciaRecorrida) + extraPorLitros;

// Mostrar el total a pagar
alert("El total a pagar es: $" + totalAPagar.toFixed(2) + " MXN");




