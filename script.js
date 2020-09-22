var index1=0;
var index2=0;
var index3=0;
var index4=0;
var index5=0;
var index6=0;
var index7=0;
var index8=0;
function plusIndex1(n,val)
{
    index1+=n;
    funct(index1,val);

}
function plusIndex2(n,val)
{
    index2+=n;
    funct(index2,val);
}
function plusIndex3(n,val)
{
    index3+=n;
    funct(index3,val);
}

function plusIndex4(n,val)
{
    index4+=n;
    funct(index4,val);
}
function plusIndex5(n,val)
{
    index5+=n;
    funct(index5,val);
}

function plusIndex6(n,val)
{
    index6+=n;
    funct(index6,val);
}
function plusIndex7(n,val)
{
    index7+=n;
    funct(index7,val);
}
function plusIndex8(n,val)
{
    index8+=n;
    funct(index8,val);
}



 function funct(x,val)
 {  
     var doc;
     doc=document.getElementById("content-dropdown"+val);
     if(x%2!=0)
     {
     doc.style.display="block";
     }
     else
     {
        doc.style.display="none";
     }
 }