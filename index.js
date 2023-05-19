window.onload=()=>{
    loading.style.display="block"
    loading.style.transition="all 0.3s ease"
    general.style.display="none"
    loading.innerHTML+=`
    <div style="  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;">
    <img src="./Image folder/loading-waiting.gif" alt="" style=" width:200px">
    <h1 style="color:navy; text-align:center; font-size:45px">Loading</h3>
    </div>
    <div style="width:100%; height:100%; position:absolute; top:0%; left:0%; background-color: rgba(0, 0, 128, 0.213)">

    </div>
    `
    setTimeout(function(){general.style.display="block", loading.style.display="none"}, 2000)
}
let allActivities=[]
    let eachUser = {
        cart: [],
        eachCart:"",
        Price: Number()
    }
    allActivities.push(eachUser)
let womanWear = [
    {
        id: 6,
        price: 203000,
        unitAdd: 28,
        description: `
        <div>
        <p>Iphone XX max ₦203,000<br>Available in white</p>
        <div class="d-flex">
        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i></i></div>
        <p></p>
        </div>
        `,
        image: `<img src="./Image folder/xx max.jpg"/>`,
    },
    {
        id: 7,
        price: 755625,
        unitAdd: 34,
        description: `
        <div>
        <p>Iphone 14Pro  max ₦755,625<br>Available in white</p>
        <div class="d-flex">
        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i></i></div>
        <p></p>
        </div>
        `,
        image: `<img src="./Image folder/girlcompletcloth1-removebg-preview.jpg" style="height:230px"/>`,
    },
    {
        id: 8,
        price: 104500,
        unitAdd: 59,
        description: `
         <div>
         <p>Spark10  max ₦104,500<br>Available in white</p>
         <div class="d-flex">
         <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i></i></div>
         <p></p>
         </div>
         `,
        image: `<img src="./Image folder/spark10.png"/>`,
    },
    {
        id: 9,
        price: 170000,
        unitAdd: 39,
        description: `
           <div>
           <p>Infinix  max ₦170,000<br>Available in white</p>
           <div class="d-flex">
           <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i></i></div>
           <p></p>
           </div>
           `,
        image: `<img src="./Image folder/infinix.jpg"/>`,
    },
    {
        id: 10,
        price: 550000,
        unitAdd: 60,
        description: `
        <div>
        <p>Iphone 13 ₦450,450<br>Available in white</p>
        <div class="d-flex">
        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i></i></div>
        <p></p>
        </div>
        `,
        image: `<img src="./Image folder/Phone band.PNG" style="height:220px"/>`,
    },
]
let allWatch = [
    {
        id: 21,
        price: 7500,
        unitAdd: 120,
        description: `
        <div class="mt-4">
        <p>Black max ₦7,500<br>Available in black</p>
        </div>
        `,
        image: `<img src="./Image folder/watch2.webp"/>`,
    },
    {
        id: 22,
        price: 10500,
        unitAdd: 80,
        description: `
        <div class="mt-3">
        <p>Gold max ₦10,500<br>Available in black</p>
        </div>
        `,
        image: `<img src="./Image folder/watch9.jpg "/>`,
    },
    {
        id: 23,
        price: 5000,
        unitAdd: 95,
        description: `
        <div class="mt-4">
        <p>Smart WATCH ₦5,500<br>Available in black</p>
        </div>
        `,
        image: `<img src="./Image folder/clock2.webp"/>`,
    },
    {
        id: 24,
        price: 9000,
        unitAdd: 79,
        description: `
        <div style="margin-top:28px">
        <p>Gold max ₦9,000<br>Available in Gold</p>
        </div>
        `,
        image: `<img src="./Image folder/clock1.jpg"/>`,
    },
    {
        id: 25,
        price: 6000,
        unitAdd: 118,
        description: `
        <div class="mt-3">
        <p>Smart WATCH ₦6,000<br>Available in black</p>
        </div>
        `,
        image: `<img src="./Image folder/watch7.jpg"/>`
    },
    {
        id: 27,
        price: 7500,
        unitAdd: 67,
        description: `
        <div class="mt-3">
        <p>Gold max ₦9,000<br>Available in black$gold</p>
        </div>
        `,
        image: `<img src="./Image folder/watch4.jpg"/>`,
    },
]
let allbags = [
    {
        id: 55,
        price: 10000,
        unitAdd: 50,
        description: "Available at ₦10,000",
        image: `<img src="./Image folder/bag1.jpg"/>`
    },
    {
        id: 57,
        price: 7500,
        unitAdd: 110,
        description: "Available at ₦7,500",
        image: `<img src="./Image folder/bag3.jfif"/>`
    },
    {
        id: 58,
        price: 15000,
        unitAdd: 80,
        description: "Available at ₦15,000",
        image: `<img src="./Image folder/bag4.PNG" style="width:217px"/>`
    },
    {
        id: 59,
        price: 17000,
        unitAdd: 40,
        description: "Available at ₦17,000",
        image: `<img src="./Image folder/bag5.PNG" style="width:225px"/>`
    },
]
let imageGif = [
    {
        id: 34,
        price: 0,
        unitAdd: 0,
        image: `<img src="./Image folder/gif 3.gif"/>`
    },
    {
        id: 35,
        price: 0,
        unitAdd: 0,
        image: `<img src="./Image folder/gif1.gif" style="height:375px" class="gif1"/>`
    },
]
for (let index = 0; index < womanWear.length; index++) {
    dispwomanWear.innerHTML += `
    <div class="p-2">
    <div class="innerScroll p-2">
       ${womanWear[index].image}
       <div class="d-flex">
       ${womanWear[index].description}
       </div>
       <div style="display:flex; justify-content:center; margin-top:px">
       <button class="btn  btn-light" onclick="cartTwo(${index})" id="${womanWear[index].id}" style="color:white; background-color:navy; height:40px;">Add to cart</button>
       <button class="btn  btn-light" onclick="cartTwoi(${index})" style="color:white; background-color:navy; height:40px;">View</button>
       </div>
    <div>
    </div>
`
}
allWatch.map((clock, i) => {
    dispclock.innerHTML += `
    <div class="clockDiv container">
    <h1 style="text-align:center">
    ${clock.image}
    <div class="">
    ${clock.description}
    <div class="clocking">
    <div style="display:flex; justify-content:center; margin-top:px">
    <button class="form-control btn" onclick="cartThree(${i})" id="${clock.id}" style="background-color: navy; color: white;">Add to cart</button>
    <button class="form-control btn" onclick="cartThreei(${i})" style="background-color: navy; color: white;">View</button>
    <div>
    </div>
    <h1>
    </div>
    `
})


imageGif.map((gif, i) => {
    dispGif.innerHTML += `
    <div class="container">
      ${gif.image}
    </div>
    `
})

allbags.map((bag, i) => {
    dispbag.innerHTML += `
    <div class="container">
    ${bag.image} 
    <p>${bag.description}</p>
    
    <button class="form-control btn" onclick="cartFive(${i})" id="purse" style="background-color: navy; color: white;">Add to cart</button>
    </div>
    `
})
const cart = () => {
    loading.style.display="block"
    loading.style.transition="all 0.3s ease"
    general.style.display="none"
    loading.innerHTML=`
    <div style="  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;">
    <img src="./Image folder/loading-waiting.gif" alt="" style=" width:200px">
<h1 style="color:navy; text-align:center; font-size:45px">Loading</h3>
    </div>
    <div style="width:100%; height:100%; position:absolute; top:0%; left:0%; background-color:rgba(0, 0, 0, 0.409)">

    </div>
    `
    setTimeout(function(){window.location.href = "cart.html"}, 1500)
    
}
let getBack=JSON.parse(localStorage.getItem('Eachuser'))
console.log(getBack[0].cart);
const cartTwo = (Iphone) => {
    if(document.getElementById(womanWear[Iphone].id).innerHTML=="Add to cart"){
        getBack[0].cart.push(womanWear[Iphone])
        console.log(getBack[0].cart);
        console.log(getBack);
        localStorage.setItem('Eachuser', JSON.stringify(getBack))
        document.getElementById(womanWear[Iphone].id).innerHTML="Already in cart"
    }
    else if(document.getElementById(womanWear[Iphone].id).innerHTML=="Already in cart"){
       // just dont do anything //
    }
}
const cartThree = (clok) => {
    if(document.getElementById(allWatch[clok].id).innerHTML=="Add to cart"){
        getBack[0].cart.push(allWatch[clok])
        localStorage.setItem('Eachuser', JSON.stringify(getBack))
        document.getElementById(allWatch[clok].id).innerHTML="Already in cart"
    }
    else if( document.getElementById(allWatch[clok].id).innerHTML="Already in cart"){
        // just dont do anything //
    }
}
const cartFive = (bag) => {
    getBack[0].cart.push(allbags[bag])
    localStorage.setItem('Eachuser', JSON.stringify(getBack))
}
function bod(){
    if(getBack[0].cart==""){
        dot.style.display="none"
        dot2.style.display="none"
    }
    else{
        getBack[0].cart.map((allcart, i)=>{
            dot.innerHTML=i+1
            dot2.innerHTML=i+1
        })
        dot.style.display="block"
        dot2.style.display="block"
    }
}