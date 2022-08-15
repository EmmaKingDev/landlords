
const products1 = document.getElementById('products1')
const products2 = document.getElementById('products2')
const products3 = document.getElementById('products3')

function card([title,img,price,desc]) {
    let code = `
    <div class="card">
    <h2>${title}</h2>
    <div class="pic1"><img src=${img} width="250" height="250"/></div>
    <h3>Price: ${price}</h3>
    <p>${desc}</p>
    </div>
    `
    return code
}

function spacing1(param) {
    products1.innerHTML += card(param)
}

function spacing2(param) {
    products2.innerHTML += card(param)
}

function spacing3(param) {
    products3.innerHTML += card(param)
}

let forest1 = ["Tree Hugger",
"https://images.unsplash.com/photo-1598100931767-979cdc7b0175?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
"250€",
"Five acres of protected Finnish forest and a certificate for the official title"];

let sea1 = ["Sea Witch",
"https://images.unsplash.com/photo-1621236453278-4f1e3a9c4730?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80",
"150€",
"Claim your own portion of the Baltic sea and a certificate for the official title"];

let space1 = ["Starlord",
"https://images.unsplash.com/photo-1534254910684-68bdc1d69cf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
"300€",
"Own a piece of the night sky and a certificate for the official title"];

let forest2 = ["Moss Kween",
"https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
"250€",
"Five acres of protected Finnish forest and a certificate for the official title"];

let sea2 = ["Merman",
"https://images.unsplash.com/photo-1577899885979-87f9b548e8cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
"150€",
"Claim your own portion of the Baltic sea and a certificate for the official title"];

let space2 = ["42",
"https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
"300€",
"Own a piece of the night sky and a certificate for the official title"];

let forest3 = ["Moss Bitch",
"https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
"250€",
"Five acres of protected Finnish forest and a certificate for the official title"];

let sea3 = ["Fish King",
"https://images.unsplash.com/photo-1577899885979-87f9b548e8cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
"150€",
"Claim your own portion of the Baltic sea and a certificate for the official title"];

let space3 = ["Black Hole",
"https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
"300€",
"Own a piece of the night sky and a certificate for the official title"];

spacing1(forest1)
spacing1(sea1)
spacing1(space1)
spacing2(forest2)
spacing2(sea2)
spacing2(space2)
spacing3(forest3)
spacing3(sea3)
spacing3(space3)