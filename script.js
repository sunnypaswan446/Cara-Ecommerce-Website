const bar = document.getElementById("bar")
const nav = document.getElementById("nav-items")
const close = document.getElementById("close-nav")
const products = document.querySelectorAll('.product')


close.addEventListener('click',()=>{
    nav.classList.remove("visible")
    console.log("hello")
})

if (bar){
    bar.addEventListener('click',()=> {
        nav.classList.add('visible')
    })
}

products.forEach(product => {
    product.addEventListener("click",()=>{
        console.log('hello')
        window.location.href="sproduct.html";
    })
});

