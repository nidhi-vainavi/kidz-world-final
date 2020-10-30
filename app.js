var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

var addButtons=document.getElementsByClassName("button");

var items=[{
    name: "This was our pact",
    quantity: 0,
    dollar: 7,
    cents: 49,
},
{
    name: "The famous five",
    quantity: 0,
    dollar: 4,
    cents: 59,
},{
    name: "Matilda",
    quantity: 0,
    dollar: 6,
    cents: 80,
},{
    name: "Harry Potter",
    quantity: 0,
    dollar: 10,
    cents: 0,
},{
    name: "For Young Readers",
    quantity: 0,
    dollar: 7,
    cents: 29,
},{
    name: "Wimpy Kid - DIY",
    quantity: 0,
    dollar: 4,
    cents: 99,
},{
    name: "Dart Board",
    quantity: 0,
    dollar: 17,
    cents: 49,
},{
    name: "Connect 4",
    quantity: 0,
    dollar: 90,
    cents:  99,
},{
    name: "Jenga",
    quantity: 0,
    dollar: 20,
    cents:  99,
},{
    name: "Monopoly",
    quantity: 0,
    dollar: 19,
    cents:  49,
},
{
    name: "Bookmarks",
    quantity: 0,
    dollar: 17,
    cents:  49,
},
{
    name: "Birthday card",
    quantity: 0,
    dollar: 19,
    cents:  99,
},
{
    name: "Stuffed toys",
    quantity: 0,
    dollar: 15,
    cents:  99,
},
{
    name: "Dream catcher drawing",
    quantity: 0,
    dollar: 18,
    cents:  49,
}];

function updateCart(){
    let cart=0;
    for(index=0;index<items.length;index++){
        cart=cart+items[index].quantity;
    }

    cartValue.innerHTML=cart;
}

for(let i=0;i<addButtons.length;i++){
    addButtons[i].onclick=(e)=>{
        items[i].quantity++;
        updateCart();
    }
}

function updatePrice(){
    let totalPriceInCents=0;
    for(index=0;index<items.length;index++){
        totalPriceInCents=totalPriceInCents+items[index].quantity*(items[index].dollar*100+items[index].cents);
    }
        finalDollars=Math.floor(totalPriceInCents/100);
    finalCents=totalPriceInCents%100;

}

var whatsappLink="https://api.whatsapp.com/send?phone=919000000000&text=Order%20details";


function updateWhatsappLink(){
    for(let index=0;index<items.length;index++){
            if(items[index].quantity!=0) {
        whatsappLink+="%0A"+items[index].name+"%20"+items[index].quantity;
    }

    }
        whatsappLink+="%0A"+"Total%20Price:%20$"+finalDollars+"%20"+finalCents+"c";

}

cartButton.onclick=()=>{
    updatePrice();
    updateWhatsappLink();
    window.open(whatsappLink,"_blank");
};


