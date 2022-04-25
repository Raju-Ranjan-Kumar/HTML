//Calculate Tip
function calculateTip()
{
  var billamt = document.getElementById("billamt ").value;
  var servicequal = document.getElementById("servicequal ").value;
  var numOfPeople = document.getElementById("peopleamt ").value;
  
  //validate bill amount
  if (billamt === "")
  {
    alert("Please enter your bill amount");
    return;
  }
  //check how many % you want to give tip
  // if (servicequal === "")
  // {
  //   alert("Please select atleast one option");
  //   return;
  // }
  //Check to see if this input is empty or less than or equal to 1
  if (numOfPeople === "" || numOfPeople < 1){
    alert("Please select atleast 1 people");
  }else if(numOfPeople == 1) {
    document.getElementById("each").style.display = "none";
  }else {
    document.getElementById("each").style.display = "block";
  }
  //Calculate tip
  var total = (billamt * servicequal) / 100;
  //round to two decimal places
  let totalper = Math.round(total);
  total = totalper/ numOfPeople;
  //Display the tip
  document.getElementById("totaltip ").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

//Hide the tip amount on load
// document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate ").onclick = function(){
  calculateTip();

  setTimeout( function(){
    document.getElementById("tip").innerHTML = "0.00";
  },10000)
}