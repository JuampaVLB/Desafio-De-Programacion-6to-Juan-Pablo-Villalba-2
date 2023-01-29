'use strict';

// DOM.

const text = document.querySelector('#text');

const submit = document.querySelector('#submit');

const list = document.querySelector('#result-list');

// Variables.

var count = 0

var response = '';

// Arrays para optimizar el codigo.

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '];

const combination = ['2', '22', '222', '3', '33', '333', '4', '44', '444', '5', '55', '555', '6', '66', '666', '7', '77', '777', '7777', '8', '88', '888', '9', '99', '999', '9999', '0'];

// Evento Click Submit.

submit.addEventListener('click', (e) => {
	
	if(text.value.length <= 0) {
		
		return;

	}

	e.preventDefault();

	// Reiniciar Resultado

	response = '';

	// Enviar el valor del input a la funcion que evalua.

	Transform(text.value);

})

function Transform(str) {

	var numberArr = new Array();


	let txt = str;

	// Convertir la String en un array para manejarla mejor.

	let txtArr = Array.from(txt.toLowerCase());

	txtArr.forEach((word, index) => {
	
		// Bucle para comprobar que letras coinciden y agregarlas a la variable de resultado final.

		for (let i = 0; i < alphabet.length; i++) {

			// Compara letra por letra de la string si es == a una de las letras del array alphabet donde esta
			// todo el abecedario, en caso de coincidir agregarle al resultado su respectiva combinacion de numeros.
			// EJEMPLO: if('v' == 'v') response = response + 888;

			if(word == alphabet[i].toLowerCase()) {

				// Comprobar si la ultima combinacion es == a la nueva combinacion, en caso de ser TRUE agregar un espacio.
				// Ejemplo: TUYO, El codigo escribirá la T (8), y si despues de eso agregamos una U, va a comprobar si esta 
				// U su combinacion es igual a la de la T, como ambas letras en su combinacion comienzan con 8 esto 
				// se cumplira y se agregara un espacio.

				numberArr.push(combination[i]);

				let preNumber = numberArr[index];

				let currentNumber = numberArr[index-1];

				if(currentNumber) {

				let currentNumberArr = Array.from(currentNumber);

				let preNumberArr = Array.from(preNumber);

				if(currentNumber) {
					
					if(preNumberArr[0] == currentNumberArr[0]) {

						response = response + ' ';
						
					}
				}

			}
							
			response = response + combination[i];

				}
		
		}
			
	})

	count++;

	// Agregar el resultado final a una lista previamente creada en HTML.

	if(response) {

	let li = document.createElement('li');

	let textNode = document.createTextNode('#' + count + ' | ' + response + ' - '+ str.toUpperCase());

	li.appendChild(textNode);

	list.appendChild(li);

	text.value = '';

	} else {

		alert('ERROR');
	
	}
}