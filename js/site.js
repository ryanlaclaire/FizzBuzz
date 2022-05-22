//Get the values from the Page
//Start of Controller function
function getValues() {
    //get values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //Validate data from input
    //attempt to parse into INT
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //if statement to validate data
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        //All is good and continue
        //call fizzBuzz()
        let fizzArray = fizzBuzz(fizzValue, buzzValue);
        //call displayFizzBuzz()
        displayFizzBuzz(fizzArray);

    }else{
        alert("You must enter valid numbers.")
    }

}

//Generate #s from 1-100 and evaluate for the FizzBuzz Challenge
//Logic function(s)
function fizzBuzz(fValue, bValue) {
    //create empty array
    let fizzArray = [];

    //we want to get all numbers from 1-100 and check values.
    for (let i = 1; i <= 100; i++){
        //loops until conditions are true
        if(i % fValue == 0 && i % bValue == 0){
            fizzArray.push('FizzBuzz');
        }else if(i % fValue == 0){
            fizzArray.push('Fizz');
        }else if(i % bValue == 0){
            fizzArray.push('Buzz');
        }else{
            fizzArray.push(i);
        }
    }

    return fizzArray;
}

//Display numbers and set Classes for 'Fizz', 'Buzz' or 'FizzBuzz'
//Display or view functions
function displayFizzBuzz(fizzArray) {  

    //Get table element
    let tableBody = document.getElementById("results");
    //Get template element
    let templateRow = document.getElementById("fbTemplate");
    //clear table first to ensure correct data is displayed
    tableBody.innerHTML = "";

    for (let index = 0; index < fizzArray.length; index += 5) {

            let tableRow = document.importNode(templateRow.content, true);
            //grab just <td> and put them into an array to count them
            let rowCols = tableRow.querySelectorAll("td");

            rowCols[0].classList.add(fizzArray[index]);
            rowCols[0].textContent = fizzArray[index];

            rowCols[1].classList.add(fizzArray[index + 1]);
            rowCols[1].textContent = fizzArray[index + 1];

            rowCols[2].classList.add(fizzArray[index + 2]);
            rowCols[2].textContent = fizzArray[index + 2];

            rowCols[3].classList.add(fizzArray[index + 3]);
            rowCols[3].textContent = fizzArray[index + 3];

            rowCols[4].classList.add(fizzArray[index + 4]);
            rowCols[4].textContent = fizzArray[index + 4];

            tableBody.appendChild(tableRow);
        }

}