if(document.readyState='loading')
{
    document.addEventListener('DOMContentLoaded',ready());
}
else{
    ready();
}

function ready()
{
    var removeButtons=document.getElementsByClassName("delete-button-shop");
    for(var i=0;i<removeButtons.length;i++)
    {
        var button=removeButtons[i];
         button.addEventListener('click',removeItem);
    }
    var inputsQuantity=document.getElementsByClassName("quantity-shop");
    for(var i=0;i<inputsQuantity.length;i++)
    {
        var input=inputsQuantity[i];
        input.addEventListener('change',quantityChange)
    }

    var buyButtons=document.getElementsByClassName("btn-book");
    for(var i=0;i<buyButtons.length;i++)
    {
        var buyButton=buyButtons[i];
        buyButton.addEventListener('click',addItemToShop);
    }
    document.getElementsByClassName("final-button")[0].addEventListener('click',purchase);

}
function purchase(event)
{
   alert('Thank you for your order');
   var shop=document.getElementsByClassName("shop")[0];
   while(shop.hasChildNodes())
   {
       shop.removeChild(shop.firstChild);
   }
   update();



}
function addItemToShop(event)
{
    var buttonClicked=event.target;
    var item=buttonClicked.parentElement.parentElement;
    var srcImg=item.getElementsByClassName("book-img")[0].src;
    var price=item.getElementsByClassName("book-price")[0].innerText;
    buildItemShop(srcImg,price);
    update();
}

function buildItemShop(srcImg,price)
{
    var itemRow=document.createElement('div');
    var shop=document.getElementsByClassName("shop")[0];


    var imgSrcNames=shop.getElementsByClassName("img-shop");
    for(var i=0;i<imgSrcNames.length;i++)
    {
        var imgSrcName=imgSrcNames[i];
        if(imgSrcName.src==srcImg)
        {
            alert("this book is already added");
            return;
        }
    }
    var itemContent=`<img src="${srcImg}" width="100px" class="img-shop item-shop">
    <span class="price-shop item-shop" id="price-item">${price}</span>
    <span class="um">$</span>
    <input type="number" value="1" class="quantity-shop item-shop"id="input-quantity" 
    min="0"
    >
    <button type="button" class="delete-button-shop item-shop" >DELETE</button>`
    itemRow.innerHTML=itemContent;
    itemRow.classList.add("shop-item-details");
    shop.append(itemRow);
    itemRow.getElementsByClassName("delete-button-shop")[0].addEventListener('click',removeItem);
    itemRow.getElementsByClassName("quantity-shop")[0].addEventListener('change',quantityChange);

}

function quantityChange(event)
{
    var input=event.target;
    if(isNaN(input.value)|| input.value<=0)
    {
        input.value=1;
    }
    update();
}

function removeItem(event)
{
    var buttonClicked=event.target;
    buttonClicked.parentElement.remove();
    update();

}
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
    document.getElementById("total-text").innerHTML=suma+"$";

}