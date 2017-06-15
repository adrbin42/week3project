
let btnList = document.querySelectorAll('.squares');
let operators = ['+', '-', 'x', '÷'];
let decimalAdded = false;

// Add onclick event to all the btnList and perform operations
for(let i = 0; i < btnList.length; i++) {
	btnList[i].onclick = function(event) {
		// Get the input and button values
		let input = document.querySelector('.text-content');
		let inputVal = input.innerHTML;
		let btnVal = this.innerHTML;
    let equation;
    let lastChar;

		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}
    else if(btnVal == '=') {
			equation = inputVal;
			lastChar = equation[equation.length - 1];
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
  			if(operators.indexOf(lastChar) > -1 || lastChar == '.'){
  				equation = equation.replace(/.$/, '');
          }
  			if(equation){
  				input.innerHTML = eval(equation);
          }
			decimalAdded = false;
		}
		else if(operators.indexOf(btnVal) > -1) {
			lastChar = inputVal[inputVal.length - 1];
			if(inputVal != '' && operators.indexOf(lastChar) == -1){
				input.innerHTML += btnVal;
      }else if(inputVal == '' && btnVal == '-'){
				input.innerHTML += btnVal;
      }
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			decimalAdded =false;
		}
    else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		else {
			input.innerHTML += btnVal;
		}
	}
}
