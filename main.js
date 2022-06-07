let amount = document.getElementById("amount");
let friends = document.getElementById("friends");
let result;
let resultAlt = "Per Person";
let mainBar = document.getElementById("mainBar");
let mainResult;
let errorResult;
let resultH1;
let resetBtn;
let resultApp;

function calc() {
  if (amount.value !== "" && friends.value !== "") {
    //calculation function
    result = eval(`${amount.value} /${friends.value}`);

    //div creation
    mainResult = document.createElement("div");
    mainResult.setAttribute("class", "mainResult mx-3 rounded-md");
    resultH1 = document.createElement("h1");
    resultH1.setAttribute("class", "text-white  text-3xl");
    resultApp= Math.round(result);
    resultH1.innerText = `${resultApp} ${resultAlt}`;

    // reset button
    resetBtn = document.createElement("button");
    resetBtn.innerText = "Reset";
    resetBtn.setAttribute("class", "resetBtn");
    resetBtn.setAttribute("onclick", "resetF()");

    //append
    mainResult.appendChild(resultH1);
    mainResult.appendChild(resetBtn);
    mainBar.appendChild(mainResult);

    clear();
  } else if (amount.value === "") {
    //div creation
    errorResult = document.createElement("div");
    errorResult.setAttribute("class", "errorResult mx-3 rounded-md");
    resultH1 = document.createElement("h1");
    resultH1.setAttribute("class", "text-white  text-3xl");
    resultH1.innerText = "Please Enter Amount";

    // reset button
    resetBtn = document.createElement("button");
    resetBtn.innerText = "Close";
    resetBtn.setAttribute("class", "resetBtn");
    resetBtn.setAttribute("onclick", "resetF()");

    //append
    errorResult.appendChild(resultH1);
    errorResult.appendChild(resetBtn);
    mainBar.appendChild(errorResult);
  } else if (friends.value === "") {
    //div creation
    errorResult = document.createElement("div");
    errorResult.setAttribute("class", "errorResult mx-3 rounded-md");
    resultH1 = document.createElement("h1");
    resultH1.setAttribute("class", "text-white  text-3xl");
    resultH1.innerText = "Please Enter Number Of Friends";

    // reset button
    resetBtn = document.createElement("button");
    resetBtn.innerText = "Close";
    resetBtn.setAttribute("class", "resetBtn");
    resetBtn.setAttribute("onclick", "resetF()");

    //append
    errorResult.appendChild(resultH1);
    errorResult.appendChild(resetBtn);
    mainBar.appendChild(errorResult);
  }
}

//clearing input values
function clear() {
  amount.value = "";
  friends.value = "";
}

//Reset Button
function resetF() {
  mainBar.innerHTML = "";
}
