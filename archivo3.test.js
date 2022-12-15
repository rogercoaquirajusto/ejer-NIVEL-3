const {
saludo,
colors,
fizzBuzz,
operadoresLogicos,
esPrimo,
esVerdadero,
tablaDelSeis,
tieneTresDigitos,
doWhile,

} = require("./index3.js");

describe('saludo(idioma)', function() {
  it('deberia devolver saludo en aleman, ingles, mandarin', function() {
    expect(saludo('aleman')).toString('Guten Tag!');
    expect(saludo('ingles')).toString('Hello!');
    expect(saludo('mandarin')).toString('Ni Hao!');
    expect(saludo()).toString('Hola!');
  });
    it('deberia devolver \'Hola!\ ', function() {
        expect(saludo()).toBe('Hola!');
      });
    });


  
describe('colors(color)', function() {
    it('deberia devolver este es color blue, red, green, orange', function() {
      expect(colors("blue")).toBe('This is blue');
      expect(colors("red")).toBe('This is red');
      expect(colors("green")).toBe('This is green');
      expect(colors("orange")).toBe('This is orange');
    });
    it('deberia devolver \'Color not found\'', function() {
      expect(colors()).toBe('Color not found');
      
    });
  });
  describe('fizzBuzz(num)', function() {
    it('debería devolver fizz si es divisible por 3', function() {
      expect(fizzBuzz(9)).toBe('fizz');
    });
    it('debería devolver un buzz si es divisible por 5', function() {
      expect(fizzBuzz(10)).toBe('buzz');
    });
    it('deberia devolver fizzbuzz si es divisible por 3 y 5', function() {
      expect(fizzBuzz(15)).toBe('fizzbuzz');
    });
    it('deberia devolver num si no es  divisible por 3 o 5', function() {
      expect(fizzBuzz(4)).toBe(4);
    });
  });
  describe('operadoresLogicos(num1, num2, num3)', function() {
    it('deberia devolver \'Número 1 es mayor y positivo\'', function() {
      expect(operadoresLogicos(50, 2, 15)).toBe('Número 1 es mayor y positivo');
    });
    it('deberia devolver \'Hay negativos\'', function() {
      expect(operadoresLogicos(80, -1, 2)).toBe('Hay negativos');
    });
    it('deberia devolver num3 + 1 nuevo valor', function() {
      expect(operadoresLogicos(1, 3, 10)).toBe(11);
    });
    it('deberia devolver \'Error\'', function() {
      expect(operadoresLogicos(1, 0, 10)).toBe('Error');
    });
    it('deberia devolver false si no se cumplen las condiciones', function() {
      expect(operadoresLogicos(10, 30, 6)).toBe(false);
    });
  });

  describe('esPrimo(num)', function() {
    it('deberia devolver true si num es primo', function() {
      expect(esPrimo(7)).toBe(true);
      expect(esPrimo(11)).toBe(true);
    });
    it('debe devolver false si num no es primo', function() {
      expect(esPrimo(0)).toBe(false);
      expect(esPrimo(1)).toBe(false);
    });
  });
  describe ('esVerdadero(valor)', function() {
    it('debería devolver Soy verdadero si el valor es verdadero', function() {
      expect(esVerdadero(true)).toBe("Soy verdadero");
    });
    it('debería devolver Soy falso si el valor es falso', function() {
      expect(esVerdadero(false)).toBe("Soy falso");
    });
  });
  describe ('tablaDelSeis()', function() {
    it('debe devolver la tabla de multiplicar de 6', function() {
      expect(tablaDelSeis()).toEqual([0 , 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]);
    });
  });
  describe ('tieneTresDigitos(numero)', function() {
    it('Debería devolver verdadero si el número tiene 3 dígitos.', function() {
      expect(tieneTresDigitos(500)).toBe(false);
    });
      it('Debería devolver falso si el número tiene 2 dígitos.', function() {
      expect(tieneTresDigitos(10)).toBe(false);
    });
  });
  describe('doWhile(numero)', function() {
    it('deberia agregar 5 al número hasta llegar a un límite de 8 veces y devolver el valor de la suma', function() {
      expect(doWhile(5)).toBe(45);
      expect(doWhile(100)).toBe(140);
      expect(doWhile(-1)).toBe(39);
    });
  });
  
