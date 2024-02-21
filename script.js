let outputfirst = document.getElementById(`money1`)
let output2 = document.getElementById(`money2`);
let output1 = "";
let input10 = document.getElementById(`clear`);
let inputs = document.querySelectorAll(`.lds`)
let no1 = document.getElementById("slt1");
let no2 = document.getElementById("slt2");

  Array.from(inputs).forEach((buttons) => {
    buttons.addEventListener(`click`, function () {
      output1 += buttons.textContent;
      outputfirst.textContent = output1;

      if (buttons == input10) {
        output1 = "";
        outputfirst.textContent = 0;
        output2.textContent = 0;
      } else if (output1 === ".") {
        output2.textContent = 0;
      }

      if (no1.value === "USD" && no2.value === "INR") {
        output2.textContent = output1 * 82.9;
      } else if (no1.value === "EURO" && no2.value === "INR") {
        output2.textContent = output1 * 89.65;
      } else if (no1.value === "INR" && no2.value === "INR") {
        output2.textContent = outputfirst.textContent;
      } else if (no1.value === "INR" && no2.value === "USD") {
        output2.textContent = output1 / 82.9;
      } else if (no1.value === "INR" && no2.value === "EURO") {
        output2.textContent = output1 / 89.65;
      } else if (no1.value === "USD" && no2.value === "EURO") {
        output2.textContent = output1 * 0.93;
      } else if (no1.value === "EURO" && no2.value === "USD") {
        output2.textContent = output1 * 1.08;
      } else if (no1.value === "USD" && no2.value === "USD") {
        output2.textContent = outputfirst.textContent;
      } else if (no1.value === "EURO" && no2.value === "EURO") {
        output2.textContent = outputfirst.textContent;
      }
    });
  });











// input1.addEventListener(`click`,function(){
//       output1 = '1'
//       outputfirst.textContent = output1

// })
// input2.addEventListener(`click`, function (){
//   output1 = output1 + "2";
//   outputfirst.textContent = output1;
// });
// input3.addEventListener(`click`, function () {
//   output1 = output1 + "3";
//   outputfirst.textContent = output1;
// });
// input4.addEventListener(`click`, function () {
//   output1 = output1 + "4";
//   outputfirst.textContent = output1;
// });
// input5.addEventListener(`click`, function () {
//   output1 = output1 + "5";
//   outputfirst.textContent = output1;
// });
// input6.addEventListener(`click`, function () {
//   output1 = output1 + "6";
//   outputfirst.textContent = output1;
// });
// input7.addEventListener(`click`, function () {
//   output1 = output1 + "7";
//   outputfirst.textContent = output1;
// });
// input8.addEventListener(`click`, function () {
//   output1 = output1 + "8";
//   outputfirst.textContent = output1;
// });
// input9.addEventListener(`click`, function () {
//   output1 = output1 + "9";
//   outputfirst.textContent = output1;
// });
// input10.addEventListener(`click`, function () {
//   output1 = "";
//   outputfirst.textContent = '0'
// });
// input11.addEventListener(`click`, function () {
//   output1 = output1 + "0";
//   outputfirst.textContent = output1;
// });
// input12.addEventListener(`click`, function () {
//   output1 = output1 + ".";
//   outputfirst.textContent = output1;
// });
// console.log(output1)
// // output1 = Number.parseInt(output1)
// // output2.textContent = output1 * 83