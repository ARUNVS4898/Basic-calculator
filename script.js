function buttonClick(val)
{
    document.getElementById("textTab").value+=val
}
function clearText()
{
   document.getElementById("textTab").value="" 
}
function equalButtonClick()
{
    var text=document.getElementById("textTab").value
    var result=eval(text)
    document.getElementById("textTab").value=result
}
console.log("working")







