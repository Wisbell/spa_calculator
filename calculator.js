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
  console.log("number1", number1)
  console.log("number1", number2)
  console.log("operation", operation)
  return `${operation}(${number1}, ${number2})`
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
      number1 = document.querySelector('input[name=number1]')
      number2 = document.querySelector('input[name=number2]')

      // Get operation
      operation = event.target.classList[0]

      console.log(performOperation(number1, number2, operation))
      performOperation(number1, number2, operation)




    })
  }

  // document.querySelector('.add').addEventListener('click', function(event){
  //   event.preventDefault()
  //   console.log("Add button clicked")
  // })

  // document.querySelector('.subtract').addEventListener('click', function(event){
  //   event.preventDefault()
  //   console.log("Subtract button clicked")
  // })

  // document.querySelector('.multiply').addEventListener('click', function(event){
  //   event.preventDefault()
  //   console.log("Multiply button clicked")
  // })

  // document.querySelector('.divide').addEventListener('click', function(event){
  //   event.preventDefault()
  //   console.log("Divide button clicked")
  // })

 }

 applyEventListeners()
