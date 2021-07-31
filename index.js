function display(val)
{
    document.getElementById("ans").value+=val;
}
function evaluat()
{
   let x= document.getElementById("ans").value;
   let y=eval(x);
   console.log(y);
   document.getElementById("ans").value=y;
}
function clr()
{
    document.getElementById("ans").value="";
}