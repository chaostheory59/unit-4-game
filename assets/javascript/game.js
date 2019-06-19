var count = "";
var ranNum = Math.floor(Math.random() * 120) +19;
var win = 0;
var losses = 0;




var randomNumbertext = document.getElementById("randomNumber");
var counter = document.getElementById("totalNumber");
var winText = document.getElementById("wins");
var loseText = document.getElementById("losses");

randomNumbertext.textContent = ranNum;
counter.textContent = count;
winText.textContent = "wins: " + win;
loseText.textContent = "losses: " + losses;

var gemRan1 = Math.floor(Math.random() * 19) +1;
var gemRan2 = Math.floor(Math.random() * 19) +1;
var gemRan3 = Math.floor(Math.random() * 19) +1;
var gemRan4 = Math.floor(Math.random() * 19) +1;

    $("#button-1").on("click", function()
    {
    
    count = gemRan1 + count;
    counter.textContent = count;
    console.log(gemRan1);
    done();
    });

    $("#button-2").on("click", function()
    {
    
    count = gemRan2 + count;
    counter.textContent = count;
    console.log(gemRan2);
    done();
    });

    $("#button-3").on("click", function()
    {
   
    count = gemRan3 + count;
    counter.textContent = count;
    console.log(gemRan3);
    done();
    });

    $("#button-4").on("click", function()
    {
    
    count = gemRan4 + count;
    counter.textContent = count;
    console.log(gemRan4);
    done();
    });

    function done(){
    if (count == ranNum)
    {
        win++;
        count = 0;
        ranNum = Math.floor(Math.random() * 120 +19);
        gemRan1 = Math.floor(Math.random() * 19) +1;
        gemRan2 = Math.floor(Math.random() * 19) +1;
        gemRan3 = Math.floor(Math.random() * 19) +1;
        gemRan4 = Math.floor(Math.random() * 19) +1;
        winText.textContent = "wins: " + win;
        counter.textContent = count;
        randomNumbertext.textContent = ranNum;
    }

    else if (count > ranNum)
    {
        losses++;
        count = 0;
        ranNum = Math.floor(Math.random() * 120 +19);
        gemRan1 = Math.floor(Math.random() * 19) +1;
        gemRan2 = Math.floor(Math.random() * 19) +1;
        gemRan3 = Math.floor(Math.random() * 19) +1;
        gemRan4 = Math.floor(Math.random() * 19) +1;
        loseText.textContent = "losses: " + losses;
        counter.textContent = count;
        randomNumbertext.textContent = ranNum;
    }
    else
    {
        loseText.textContent = "losses: " + losses;
        counter.textContent = count;
        randomNumbertext.textContent = ranNum;
    }
}




