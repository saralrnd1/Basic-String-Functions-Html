document.getElementById('clear').addEventListener('click', function() {
  clear();
});

document.getElementById('reset').addEventListener('click', function() {
  clear();
  document.getElementById('ddltype').value  = "0";
});
function clear(){
  document.getElementById('txtin').value = "";
  document.getElementById('txtout').value = "";
  document.getElementById('txtfind').value = "";
  document.getElementById('txtreplace').value = "";
  
}
document.getElementById('ddltype').addEventListener('change', function() {
  debugger;
  var dvreplace=document.getElementById("dvreplace");
  var ddltype=document.getElementById('ddltype');
  if (ddltype.value=="replacewith")
  {
    dvreplace.style.display = "block";
  }
  else
  {
    document.getElementById('txtreplace').value="";
    document.getElementById('txtfind').value = "";
    document.getElementById('txtreplace').value = "";
    dvreplace.style.display = "none";
  }

});

document.getElementById('proceed').addEventListener('click', function() {
var ddltype=document.getElementById('ddltype');
if (ddltype.value=="removespace")
{
removespace();
}
else if (ddltype.value=="lowercase")
{
lowercase();
}
else if (ddltype.value=="uppercase")
{
uppercase();
}
else if (ddltype.value=="count")
{
count();
}
else if (ddltype.value=="countwithoutspace")
{
countwithoutspace();
}
else if (ddltype.value=="replacewith")
{
  debugger;
  var rStr=document.getElementById("txtreplace").value;
  var fStr=document.getElementById("txtfind").value;
  replace(fStr,rStr);
}
  

});

function removespace()
{
  var inStr = document.getElementById("txtin").value;
  var OutStr = inStr.replace(/\s+/g, ''); // Removes all spaces
  document.getElementById("txtout").value=OutStr;
  CopyOut();
}
function lowercase()
{
  var inStr = document.getElementById("txtin").value;
  var OutStr = inStr.toLowerCase();
  document.getElementById("txtout").value=OutStr;
  CopyOut();
}
function uppercase()
{
  var inStr = document.getElementById("txtin").value;
  var OutStr = inStr.toUpperCase();
  document.getElementById("txtout").value=OutStr;
CopyOut();
}
function count()
{
  var inStr = document.getElementById("txtin").value;
  var OutStr = inStr.length;
  document.getElementById("txtout").value="Total Characters Count(With Space):: "+OutStr;
}
function countwithoutspace()
{
  var inStr = document.getElementById("txtin").value;
  inStr = inStr.replace(/\s/g, '');
  var OutStr = inStr.length;
  document.getElementById("txtout").value="Total Characters Count(Without Space):: "+OutStr;

}
function replace(fStr,rStr)
{
  debugger
  var inStr = document.getElementById("txtin").value;
  let regex = new RegExp(fStr, 'g'); 
  let OutStr = inStr.replace(regex, rStr);
  if (fStr=="." && rStr=="\n") OutStr = inStr.replace(/\./g, '\n'); 
  else if (fStr==";" && rStr=="\n") OutStr = inStr.replace(/\./g, '\n'); 
  else if (fStr=="," && rStr=="\n") OutStr = inStr.replace(/\./g, '\n'); 
  else if (fStr=="=" && rStr=="\n") OutStr = inStr.replace(/\=/g, '\n'); 
  else if (fStr==" " && rStr=="\n") OutStr = inStr.replace(/\./g, '\n'); 

  document.getElementById("txtout").value=OutStr;
  CopyOut();
}


function CopyOut() {
  debugger;
            // Get the textarea element
            var txtout = document.getElementById("txtout");
            // Select the text in the textarea
            txtout.select();
            txtout.setSelectionRange(0, 99999); // For mobile devices
            // Copy the text to the clipboard
            document.execCommand("copy");
            // Show a confirmation message
            alert("Text copied: " + txtout.value);
        }