const keys = document.querySelectorAll(".key");
const displayInput = document.querySelector(".display-input");
const displayOutput = document.querySelector(".display-output");

let input = "";

for (let key of keys) {
  let keyValue = key.dataset.key;

  key.addEventListener("click", () => {
    if (keyValue == "AC") {
      input = "";
      displayInput.innerHTML = "";
      displayOutput.innerHTML = "";
    } else if (keyValue == "brackets") {
      if (
        input.indexOf("(") == -1 ||
        (input.indexOf("(") != -1 &&
          input.indexOf(")") != -1 &&
          input.lastIndexOf("(") < input.lastIndexOf(")"))
      ) {
        input += "(";
        displayInput.innerHTML = validateInput(input);
      } else if (
        (input.indexOf("(") != -1 && input.indexOf(")") == -1) ||
        (input.indexOf("(") != -1 &&
          input.indexOf(")") != -1 &&
          input.lastIndexOf(")") < input.lastIndexOf("("))
      ) {
        input += ")";
        displayInput.innerHTML = validateInput(input);
      }
    } else if (keyValue == "backspace") {
      input = input.slice(0, -1);
      displayInput.innerHTML = validateInput(input);
    } else if (keyValue == "=") {
      input = checkPercent(input);
      let output = eval(input);

      displayOutput.innerHTML = validateOutput(output);
    } else {
      input += keyValue;
      displayInput.innerHTML = validateInput(input);
    }
  });
}

function validateInput(input) {
  let input_arr = input.split("");
  let input_length = input_arr.length;

  for (let i = 0; i < input_length; i++) {
    if (input_arr[i] == "*") {
      input_arr[i] = '<span class="cal-key">x</span>';
    }

    if (input_arr[i] == "/") {
      input_arr[i] = '<span class="cal-key">:</span>';
    }

    if (input_arr[i] == "+") {
      input_arr[i] = '<span class="cal-key">+</span>';
    }

    if (input_arr[i] == "-") {
      input_arr[i] = '<span class="cal-key">-</span>';
    }
  }

  input = input_arr.join("");

  return input;
}

function checkPercent(input) {
  let input_arr = input.split("");
  let input_length = input_arr.length;

  for (let i = 0; i < input_length; i++) {
    if (input_arr[i] == "%") {
      input_arr[i] = "*0.01";
    }
  }

  input = input_arr.join("");
  return input;
}

function validateOutput(output) {
  let num_test = output.toString().split(".");

  let integer = num_test[0].split("");
  let decimal = num_test[1];

  let integerLength = integer.length;

  if (integerLength > 3) {
    for (let i = integerLength - 3; i > 0; i -= 3) {
      integer.splice(i, 0, ",");
    }
  }

  if (decimal) {
    if (decimal.length > 4) {
      decimal = decimal.split("");
      decimal = decimal.splice(0, 4);
      decimal = decimal.join("");
    }
    decimal = ".".concat(decimal);
    integer.push(decimal);
  }

  return integer.join("");
}

class Calculator {
    constructor(element) {
        this.el = element
    }
    handleEvent() {
        this.el.addEventListener('click', e => {
            
        })
    }
    render() {
        this.el.innerHTML = `
        
        `
    }
}

const calc = document.querySelector('#app1')

new Calculator(calc)