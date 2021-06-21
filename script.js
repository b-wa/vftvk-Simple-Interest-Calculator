function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years); 

 

    var result = document.getElementById("result");

    if (principal <= 0) {
        alert("Enter a positive number")
    } else {
        return result;
    }

    result.innerHTML = "If you deposit " + principal + " at an interest rate of " + rate + "% " + " you will receive an amount of " + interest + " in the year " + year
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval; 

}

function principal() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

        