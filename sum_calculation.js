
function update()
{   var suma=0;
    var items=document.getElementsByClassName("shop-item-details");
    for(var i=0;i<items.length;i++)
    {
        var price=items[i].getElementsByClassName("price-shop")[0].innerHTML;
        var quantity=items[i].getElementsByClassName("quantity-shop")[0].value;
        var sumaCarte=price*quantity;
        suma=suma+sumaCarte;
    }
    document.getElementById("total-text").innerHTML=suma;
    console.log(items.length)
}