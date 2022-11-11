// to generate anything random we use Math.random() method;
//to generate combination of numbers and letter, first we have to convert variable to string
//also the parameter of toString() has to be 16 because we need hexadecimal numeral system, which is 0-9 and then goes a-f.
//hex color number contains only six figures, hence we need to use substring method and define indexes as 2 and 8.

const count = document.querySelector(".count"); 
const input = document.querySelector("input");


input.addEventListener("keyup", () => {
  count.innerHTML = input.value.length;
});