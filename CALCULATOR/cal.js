function bclick(val)
{
    document.getElementById("out").value+=val;
}
function cleard(){
    document.getElementById("out").value="";

}
function eqclicked ()
{
    var text =document.getElementById("out").value;
    var result = eval(text);
    document.getElementById("out").value=result;
}