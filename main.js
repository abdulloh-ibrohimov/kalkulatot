import { multiply, } from './plus.js';
import { minus, } from './minus.js';
import { delenie , } from './delenie.js';
import { umnojenie , } from './umnojenie.js';
let add = document.querySelector('#add');
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let otvet = document.querySelector('#otvet');
add.addEventListener('click', () => {
    let newNum = num1.value
    let newNum2 = num2.value


    let result = multiply(Number(newNum), Number(newNum2))
    otvet.textContent = result

})



let minuss = document.querySelector('#munus');


minuss.addEventListener('click', () => {
    let newNum = num1.value
    let newNum2 = num2.value


    let result1 = minus(Number(newNum), Number(newNum2))
    otvet.textContent = result1

})


let delenie1 = document.querySelector('#delenie');


delenie1.addEventListener('click', () => {
    let newNum = num1.value
    let newNum2 = num2.value


    let result2 = delenie(Number(newNum), Number(newNum2))
    otvet.textContent = result2

})


let umnojenie1 = document.querySelector('#umnojenie');


umnojenie1.addEventListener('click', () => {
    let newNum = num1.value
    let newNum2 = num2.value


    let result3 = umnojenie(Number(newNum), Number(newNum2))
    otvet.textContent = result3



})




