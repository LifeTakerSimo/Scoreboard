

let homeScore = 0
let guestScore = 0
function addOne(a)
{   
    if(a==0)
    {
        homeScore+=1
        document.getElementById("homeScore").innerHTML=homeScore
    }
    else
    {
        guestScore+=1
        document.getElementById("guestScore").textContent=guestScore 
    } 
}

function addTwo(a)
{
    if(a==0)
    {
        homeScore+=2
        document.getElementById("homeScore").textContent=homeScore; 
    }
    else
    {
        guestScore+=2
        document.getElementById("guestScore").textContent=guestScore; 
    } 
}

function addThree(a)
{
    if(a==0)
    {
        homeScore+=3
        document.getElementById("homeScore").textContent=homeScore; 
    }
    else
    {
        guestScore+=3
        document.getElementById("guestScore").textContent=guestScore; 
    } 
}