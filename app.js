var count = 0;
setInterval(function () {
    count++;
    if (count == 2) {
        document.getElementById("a").style.width = '90%';
    }
    if (count === 4) {
        document.getElementById("a").style.width = '0';
        count = 0;
    }
}, 500)
function showSide() {
    document.getElementById("loginArea").className += ' displaySide';
}
function closeSide() {
    document.getElementById("loginArea").className = 'area';
}


function e() {
    document.getElementById("employeeLogin").className += ' displaySidee';
}
function closeSideOfEmployeeLogin() {
    document.getElementById("employeeLogin").className = 'employeePanelLogin';
}
function fun1() {
var str=document.getElementById("fullName").value
reg=/[0-9!@#$%^&*_+:=()[\]\.\-{}?,`~]/
if(reg.test(str)) {
alert('Invalid Name')
}
}
function fun2() {
var str1=document.getElementById("email").value
reg=/[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]/
if(reg.test(str1)) {
alert('Valid email')
}
else {
	alert('Invalid email')
}
}






function signUpEmployee() {
    var name = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var employeeAccount = {
        name: name,
        email: email,
        password: password
    }
    var a = localStorage.setItem("Employee_Account", JSON.stringify(employeeAccount));
    document.getElementById("display").style.display = 'block';
    setTimeout(function () {
        location = 'employelogin.html'
    }, 2000)

};

function employelogin() {
    var email = document.getElementById("emailM").value;
    var password = document.getElementById("passwordM").value;
    var b = JSON.parse(localStorage.getItem("Employee_Account"));
    if (email === b.email && password === b.password) {
        document.getElementById("display1").style.display = 'block';
        document.getElementById("error2").style.display = 'none';
        setTimeout(function () {
            location = 'employeepanel.html'
        }, 2000)
    }
    else {
        document.getElementById("error2").style.display = 'block';
    }

}

function logout() {
    var logoutArea = document.getElementById("container");
    var a = document.createElement("h1");
    a.setAttribute("class", "logout");
    var logoutFA = document.createElement("i");
    logoutFA.setAttribute("class", "fa fa-spinner");
    a.appendChild(logoutFA);
    var atext = document.createTextNode(" Logging Out...");
    a.appendChild(atext);
    logoutArea.appendChild(a);
    setTimeout(function () {
        location = 'index1.html';
    }, 2000)
}

function Products(category, name, price, color, stock, sizes) {
       // this.category = category,                                                                                   //
        this.name = name,
        this.price = price,
       // this.color = colors,                                                                                       //
        this.stock = stock,
        this.sizes = sizes
}

var products = {
    footwears: {
        parachute_oil: new Products("Footwears", "Parachute Oil", 200, "Brown/Blue", "Yes", "1 lt"),
        pears_soap: new Products("Footwears", "Pears Soap", 50, "Brown/Blue/Black", "Yes", "100 gm"),
        madhur_sugar: new Products("Footwears", "Madhur Sugar", 300, "Light-Blue", "Yes", "1 kg"),
        wheat_flour: new Products("Footwears", "Wheat Flour", 400, "Burgendy", "Yes", "2 kg"),
        surf_exel_soap: new Products("Footwears", "Surf Exel Soap", 15, "Black", "Yes", "15 gm"),
        lizol: new Products("Footwears", "Lizol", 500, "Black/Brown/Grey", "Yes", "1 lt"),
    },
    clothes: {
        gemini_oil: new Products("Clothes", "Gemini Oil", 2100, "Grey/Light-Red", "Yes", "5 kg"),
        red_label_tea: new Products("Clothes", "Red Label Tea", 150, "Blue/Off-White", "Yes", "1 kg"),
        almonds: new Products("Clothes", "Almonds", 650, "Green-Dark", "Yes", "250 gm"),
        salt: new Products("Clothes", "Salt", 100, "Red/Mehrun", "Yes", "5 kg"),
        onion: new Products("Clothes", "Onion", 120, "Black/Blue/Grey", "Yes", "5 kg"),
       coffee: new Products("Clothes", "Coffee", 400, "Blue/Dark-Blue", "Yes", "2 kg"),
    },
    watches: {
        apple: new Products("Watches", "Apple", 350, "Mehrun", "Yes", "2 kg"),
        complete_care_toothpaste: new Products("Watches", "Complete Care Toothpaste", 250, "Light-Yello", "Yes", "200 gm"),
        potato: new Products("Watches", "Potatoe", 125, "Grey", "Yes", "6 kg"),
        peanuts: new Products("Watches", "Peanuts", 350, "Light-Grey", "Yes", "3.5 kg"),
        ariel_washing_powder: new Products("Watches", "Ariel Washing Powder", 300, "Black", "Yes", "3 kg"),
        basmati_rice: new Products("Watches", "Basmati Rice", 730, "Black/Grey", "Yes", "7 kg")
    },
}

function details(productName, srcc) {
    var src = srcc;
    var name = productName;
    for (var key in products) {
        for (var key2 in products[key]) {
            if (name === key2) {
                swal({
                    title: "Name : " + products[key][key2].name,
                    text: 
                        " --- Stock  : ( " + products[key][key2].stock + " ) "
                        + " --- Size : ( " + products[key][key2].sizes + " ) "
                        + " --- Price : ( RS." + products[key][key2].price + " ) ",
                    textColor: "red",
                    imageUrl: src,
                    imageWidth: 300,
                    imageHeight: 250,
                    imageAlt: 'Custom image',
                    animation: false,
					 
                })
            }
            else if (name === products[key][key2].name) {
                swal({
                    title: "Name : " + products[key][key2].name,
                    text: 
                         " --- Stock  : ( " + products[key][key2].stock + " ) "
                        + " --- Size : ( " + products[key][key2].sizes + " ) "
                        + " --- Price : ( RS." + products[key][key2].price + " ) ",
                    textColor: "red",
                    imageUrl: src,
                    imageWidth: 300,
                    imageHeight: 250,
                    imageAlt: 'Custom image',
                    animation: false,
					 
                })
            }

        }
    }

}
function sellProductInfoGet(id) {
    var date = new Date();
    var todayDate = date.getDate();
    var todayMonth = date.getMonth() + 1;
    todayMonth = Number(todayMonth);
    var todayyear = date.getFullYear();
    for (var key in products) {
        for (var key2 in products[key]) {
            if (id === key2) {
                document.getElementById('productName').innerText = products[key][key2].name;
                document.getElementById("date").innerText = todayDate + "/" + todayMonth + "/" + todayyear;
                document.getElementById('priceOfProduct').innerText = products[key][key2].price;
                document.getElementById("mode").style.display = 'block';

            }
        }
    }
}
var counter = 0;
var sold = [];
//localStorage.setItem("sold", JSON.stringify(sold));
function sellProduct(id) {
    var nameProduct = id;
    for (var j = 0; j < nameProduct.length; j++) {
        if (nameProduct[j] === " ") {
            nameProduct = nameProduct.slice(0, j) + nameProduct.slice(j + 1);
        }
        else if (nameProduct[j] === "-") {
            nameProduct = nameProduct.slice(0, j) + nameProduct.slice(j + 1);
        }
    }
    nameProduct = nameProduct.toLowerCase();
    console.log(nameProduct);
    var quantity = document.getElementById("quantityOfProduct").value;

    var flag = false;
    for (var i = 0; i < quantity.length; i++) {
        if (quantity[i] === "-") {
            document.getElementById("errorinSaleInfo").innerHTML = "Please enter valid Quantity.";
            document.getElementById("errorinSaleInfo").style.display = 'block';
            document.getElementById("quantityOfProduct").value = "";
            flag = true;
        }
        quantity = Number(quantity);
        if (quantity > 9) {
            document.getElementById("errorinSaleInfo").innerHTML = "Qunatity Limit is 1 to 9.";
            document.getElementById("errorinSaleInfo").style.display = 'block';
            document.getElementById("quantityOfProduct").value = "";
            flag = true;
        }
        if (quantity === 0) {
            document.getElementById("errorinSaleInfo").innerHTML = "Quantity can't be 0.";
            document.getElementById("errorinSaleInfo").style.display = 'block';
            document.getElementById("quantityOfProduct").value = "";
            flag = true;
        }
        if (flag != true) {
            document.getElementById("errorinSaleInfo").style.display = 'none';
            document.getElementById("mode").style.display = 'none';
            document.getElementById("quantityOfProduct").value = "";
            for (var key in products) {
                
            }
        }
	  
	} 	

}


