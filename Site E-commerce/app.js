const wrapper = document.querySelector(".slider-wrapper")
const menuItems = document.querySelectorAll(".menu-item")

const products = [
    {
    id:1,
    title:"Air Force",
    price:671.59,
    },
    {
        id:2,
        title:"Air Jordan",
        price:840.90,
    },
    {
        id:3,
        title:"Blazer",
        price:615.15,
    },
    {
        id:4,
        title:"Crater",
        price:728.02,
    },
    {
        id:5,
        title:"Hippie",
        price:558.72,
    },
];

let choosenProduct = products[0]



menuItems.forEach((item, index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform =`translate(${-100* index}vw)`;

        choosenProduct=products[index];

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "R$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".button-product");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display = "flex";
});

close.addEventListener("click",()=>{
    payment.style.display = "none";
});