// selecting input
var a=document.getElementById("inbox")
var b=document.getElementById("anspara")
var c=document.getElementById("result")
var guess=3
// generate random
var ran=Math.floor(Math.random()*10)+``
if(ran>5)
{
    ran=ran-1
}
// event handler
function add()
{
    if(a.value==ran)
    {
        alert("correct")
        b.textContent="Won"
    }
    else{
        alert("wrong number is" + ran)
        c.textContent="Loss" 
        guess=guess-1
        b.textContent="Availavle guess :" +guess
    }
}