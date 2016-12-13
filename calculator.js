/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */



/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

 function applyEventListeners() {

  document.querySelector('.add').addEventListener('click', function(event){
    event.preventDefault()
    console.log("Add button clicked")
  })

  document.querySelector('.subtract').addEventListener('click', function(event){
    event.preventDefault()
    console.log("Subtract button clicked")
  })

  document.querySelector('.multiply').addEventListener('click', function(event){
    event.preventDefault()
    console.log("Multiply button clicked")
  })

  document.querySelector('.divide').addEventListener('click', function(event){
    event.preventDefault()
    console.log("Divide button clicked")
  })

 }

 applyEventListeners()
