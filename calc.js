var orderCount = 0;
var profit = 0;
var yearsPay = 3.00;
var percentage = 0.75;
var orderEntries = "";

// toggles display property between inline and none
function toggleDisplayButton(id) {
    let item = document.getElementById(id);

    if(item.style.display == 'none'){
        item.style.display = 'inline';
    }
    else{
        item.style.display = 'none';
    }
}

function add() {
    let miles75;
    let miles = document.getElementById("miles").value;
    let tips = document.getElementById("tips").value;
    
    //which year selected determines base pay for first 5 miles
    let yearsWorked = document.getElementById("years").value;

    switch(parseInt(yearsWorked)){
        case 0:
            yearsPay = 3.00;
            break;
        case 1:
            yearsPay = 3.50;
            break;
        case 2:
            yearsPay = 3.75;
            break;
        case 3:
            yearsPay = 4.00;
            break;
        case 4:
            yearsPay = 4.25;
            break;
        case 5:
            yearsPay = 4.50;
            break;
        case 6:
            yearsPay = 4.75;
            break;
        case 7:
            yearsPay = 5.00;
            break;
    }
    
    //input validation for cash sign
    if(tips.startsWith("$")){
        tips = tips.replace("$","");
    }
    
    milesFloat = parseFloat(miles);
    tipsFloat = parseFloat(tips);
    
    if(isNaN(milesFloat) || isNaN(tipsFloat)){
        alert("Please enter numbers only!");
        reset();
        return
    }
    
    //assuming drivers get yearsPay of first 5 miles, then percentage for each mile after 5 miles
    if (milesFloat > 5){
        miles75 = milesFloat - 5;
        profit += yearsPay + (miles75 * percentage);
    }
    else{
        profit += yearsPay;
    }
    
    profit += tipsFloat;
    
    orderCount+=1;
    document.getElementById("orderCount").innerHTML = "Order Count: " + orderCount;

    //add entries to table
    orderEntries = "<tr><td>" + milesFloat + "</td><td>$" + tipsFloat + "</td></tr>"
    document.getElementById("orderDisplayTable").innerHTML += orderEntries;
    
    document.getElementById("miles").value = "";
    document.getElementById("tips").value = "";

    document.getElementById("totalProfit").innerHTML = "Total Profit: $" + profit.toFixed(2);
}

function reset() {
    orderCount = 0;
    profit = 0;
    orderEntries = "";
    document.getElementById("miles").value = "";
    document.getElementById("tips").value = "";
    document.getElementById("orderCount").innerHTML = "Order Count: " + orderCount;
    document.getElementById("totalProfit").innerHTML = "Total Profit: $" + profit;
    document.getElementById("orderDisplayTable").innerHTML = "<tr><th>Miles</th><th>Tips</th></tr>";
}