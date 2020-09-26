function calcul()
{
    var quantity=document.getElementById("input-quantity").value;
    var pret=document.getElementById("price-item").innerHTML;
    document.getElementById("total-text").innerHTML=pret*quantity+"$";
    
}
function deleteQuantity()
{
    var doc=document.getElementById("input-quantity");
    if(doc.value>=0)
    {
    doc.value=doc.value-1;
    calcul();
    }
    else{
        doc.value=0;
        document.getElementById("total-text").innerHTML="0$";
    
    }
    
}
