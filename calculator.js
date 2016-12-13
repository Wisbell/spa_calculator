/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

function multiply(number1, number2){
  return number1 * number2
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

function add(number1, number2){
  return number1 + number2
}



/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

function subtract(number1, number2){
  return number1 - number2
}



/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function divide(number1, number2){
  return number1 / number2
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */


function performOperation(number1, number2, operation) {
  if (operation === "add") {
    return add(number1, number2)
  } else if (operation === "subtract") {
      return subtract(number1, number2)
  } else if (operation === "multiply") {
      return multiply(number1, number2)
  } else if (operation === "divide") {
      return divide(number1, number2)
  }
}


function showAnswer(answer) {
  document.querySelector('.showAnswer').innerHTML = `<h1>Answer: ${answer}</h1> `;
}


// Event Listeners


function applyEventListeners() {

  var buttons = document.querySelectorAll('button');
  var number1;
  var number2;
  var operation;

  for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event){
      event.preventDefault()

      // Get numbers
      number1 = parseInt(document.querySelector('input[name="number1"]').value)
      number2 = parseInt(document.querySelector('input[name="number2"]').value)

      // Get operation
      operation = event.target.classList[0]

      // Show the answer on the page
      console.log(performOperation(number1, number2, operation))
      showAnswer(performOperation(number1, number2, operation))

    })
  }
 }

 applyEventListeners()
