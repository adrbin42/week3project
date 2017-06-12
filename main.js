const zeroBtn = document.querySelector("#zero");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const divideBtn = document.querySelector("#divide");
const multiplyBtn = document.querySelector("#multiply");
const subtractBtn = document.querySelector("#subtract");
const periodBtn = document.querySelector("#period");
const equalsBtn = document.querySelector("#equals");
const plusBtn = document.querySelector("#plus");
const clearBtn = document.querySelector("#clear");

let btnList = document.querySelectorAll(".squares");

for (let i = 0; i < btnList.length; i++){
  let btn = btnList[i];
  let contentDiv = document.getElementById('text-content');

  // console.log(btn);
  btn.addEventListener("click", function(event){
    console.log("You clicked the button labeled: " + btn.innerHTML);
    contentDiv.innerHTML += btn.innerHTML
  });

}
