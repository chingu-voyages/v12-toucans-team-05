"use strict";

let products = [
    {
        id : 1,
        img : 'Pictures\\Clocks\\narrow base clock 2.jpg',
        name : 'Narrow Clock',
        category : 'Clocks',
        price : 0,
        desc : 'A lovely narrow clock',
        stock : 4
    },
    {
        id : 2,
        img : 'Pictures\\Clocks\\wide base clock 2.jpg',
        name : 'Wide Base Clock',
        category : 'Clocks',
        price : 0,
        desc : 'A lovely wide base clock',
        stock : 2
    },
    {
        id : 3,
        img : 'Pictures\\Clocks\\cuckoo clock 2.jpg',
        name : 'Cuckoo Clock',
        category : 'Clocks',
        price : 0,
        desc : 'A lovely wide base clock',
        stock : 2
    },

    {
        id : 4,
        img : 'Pictures\\Paintings\\blunstone picture 2.jpg',
        name : 'Blunstone Picture',
        category : 'Paintings',
        price : 0,
        desc : 'X',
        stock : 2
    },

    {
        id : 5,
        img : 'Pictures\\Paintings\\map 2.jpg',
        name : 'Map',
        category : 'Paintings',
        price : 0,
        desc : 'X',
        stock : 2
    },

    {
        id : 6,
        img : 'Pictures\\Paintings\\countryside painting 2.jpg',
        name : 'Countryside Painting',
        category : 'Paintings',
        price : 0,
        desc : 'X',
        stock : 2
    },

    {
        id : 7,
        img : 'Pictures\\Paintings\\pciture of lady 2.jpg',
        name : 'Picture of Lady',
        category : 'Paintings',
        price : 0,
        desc : 'X',
        stock : 2
    },

    {
        id : 8,
        img : 'Pictures\\Paintings\\fruit picture 2.jpg',
        name : 'Fruit Picture',
        category : 'Paintings',
        price : 0,
        desc : 'X',
        stock : 2
    },

    {
        id : 9,
        img : 'Pictures\\Paintings\\street picture 2.jpg',
        name : 'Street Picture',
        category : 'Paintings',
        price : 0,
        desc : 'X',
        stock : 2
    },

    {
        id : 10,
        img : 'Pictures\\Plates\\decorative edge plate 2.jpg',
        name : 'Decorative edge plate',
        category : 'Plates',
        price : 0,
        desc : 'X',
        stock : 2
    },

    {
        id : 11,
        img : 'Pictures\\Plates\\flower plate 2.jpg',
        name : 'Flower plate',
        category : 'Plates',
        price : 0,
        desc : 'X',
        stock : 2
    },

    {
        id : 12,
        img : 'Pictures\\Plates\\moses plate 2.jpg',
        name : 'Moses plate',
        category : 'Plates',
        price : 0,
        desc : 'X',
        stock : 2
    },

    {
        id : 13,
        img : 'Pictures\\Various\\Beatles 2.jpg',
        name : 'Beatles',
        category : 'Various',
        price : 0,
        desc : 'X',
        stock : 2
    },

    {
        id : 14,
        img : 'Pictures\\Various\\figurines 2.jpg',
        name : 'Figurines',
        category : 'Various',
        price : 0,
        desc : 'X',
        stock : 2
    },

    {
        id :15,
        img : 'Pictures\\Various\\pens 2.jpg',
        name : 'Pens',
        category : 'Various',
        price : 0,
        desc : 'X',
        stock : 2
    },

    {
        id : 16,
        img : 'Pictures\\Various\\coins 2.jpg',
        name : 'Coins',
        category : 'Various',
        price : 0,
        desc : 'X',
        stock : 2
    },

    {
        id : 17,
        img : 'Pictures\\Various\\vases 2.jpg',
        name : 'Vases',
        category : 'Various',
        price : 0,
        desc : 'X',
        stock : 2
    },

    {
        id : 18,
        img : 'Pictures\\Various\\glass 2.jpg',
        name : 'Glass',
        category : 'Various',
        price : 0,
        desc : 'X',
        stock : 2
    },

    {
        id : 19,
        img : 'Pictures\\Various\\cutlery 2.jpg',
        name : 'Cutlery',
        category : 'Various',
        price : 0,
        desc : 'X',
        stock : 2
    },

    {
        id : 20,
        img : 'Pictures\\Various\\piano 2.jpg',
        name : 'Piano',
        category : 'Various',
        price : 0,
        desc : 'X',
        stock : 2
    },
];

/*
FUNCTION GROUP - for carousel
*/

var picIndex=0;
function carousel() {

    imageclear();
    displayitem(picIndex,"sec1");
    picIndex++;
    if(picIndex+1>Object.keys(products).length)
        picIndex=0;
    setTimeout(carousel, 2000); 


}

/*
FUNCTION GROUP - for shopping cart
function sendReserveList()
function removeReserveList(i)
function clearReserveList()
function showReserveList()
function addReserveList(i)
*/




function sendReserveList(){
    
    let ReserveList=JSON.parse(sessionStorage.getItem("ReserveList"));
    
    let elOne = document.getElementById("div1");
    let elTwo = document.createElement('div');
  
    let ReserveListdiv1  = document.createElement('div');
    ReserveListdiv1.append(document.createTextNode("The products you would like to reserve are ..."));
    elTwo.appendChild(ReserveListdiv1);

    for(let i=0;i<4;i++){
        let ReserveListdiv2  = document.createElement('div');
        let stringlist="";
        stringlist=products[i].name
        ReserveListdiv2.append(document.createTextNode(stringlist));    
        elTwo.appendChild(ReserveListdiv2);
    }

    let ReserveListdiv3  = document.createElement('div');
    ReserveListdiv3.append(document.createTextNode("Please note,"
    +"these are individual products, so their current avaliability has to be confirmed first. "
    +"In order to do this, you can either press submit, which will open up your email browser "
    +"with all the details already included. "
    +"Or you can send an email yourself to the below address"));
    elTwo.appendChild(ReserveListdiv3);

    let buttonCl  = document.createElement('button');
    buttonCl.setAttribute("type", "button");
    buttonCl.setAttribute("onclick", "closebox()");
    buttonCl.setAttribute("id", "butclose");
    let stringCl = 'Press To Close';
    buttonCl.append(document.createTextNode(stringCl));
    elTwo.appendChild(buttonCl);

    let buttonOr  = document.createElement('button');
    buttonOr.setAttribute("type", "button");
//    let stringOrClick="addReserveList("+i+")";
//    buttonOr.setAttribute("onclick", stringOrClick);
    buttonOr.setAttribute("id", "butadd");
    let stringWords = 'Send me';
    buttonOr.append(document.createTextNode(stringWords));
    elTwo.appendChild(buttonOr);



    elTwo.setAttribute("id", "bigbox");  
    elOne.appendChild(elTwo);
}


/*
removeReserveList(i)
Deletes ReserveList from shopping cart
*/

function removeReserveList(i){

    let ReserveList=JSON.parse(sessionStorage.getItem("ReserveList"));
    ReserveList.splice(ReserveList.findIndex(x=>(x==i)),1);
    sessionStorage.setItem("ReserveList",JSON.stringify(ReserveList));
    showReserveList();
    closebox();

}

/*
function clearReserveList()
Clears out the whole shopping cart
*/

function clearReserveList(){
    imageclear();
    sessionStorage.clear();
    alert("Reserve List cleared");
}

/*
function showReserveList()
Like imageprinty, sets up products to be displayed by 'displayImage'
but here it is the shopping cart
*/
function showReserveList(){

    imageclear();

    if(sessionStorage.getItem("ReserveList")==null){
        alert('There are no items on the Reserve List');
        return 0;        
    }

    let ReserveList=JSON.parse(sessionStorage.getItem("ReserveList"));
    var sizeOfReserveList = ReserveList.length;

    let text=['sec1','sec2','sec3'];
    let holdernext=[1,2,0];
    let holdercurrent=0;

    let j=0;
    while(j<sizeOfReserveList){
        displayitem(ReserveList[j],text[holdercurrent]);
        holdercurrent=holdernext[holdercurrent];
        j++;

    }
    let orTest = document.getElementById("sec1");
    orTest.setAttribute("ReserveList", "yes");
}
 
/*
function addReserveList(i)
Adds the ReserveList to shopping cart
*/
function addReserveList(i){

    if(sessionStorage){
        let ReserveList=[];
        if(sessionStorage.getItem("ReserveList")==null){
            sessionStorage.setItem("ReserveList",JSON.stringify(ReserveList));
        }

        ReserveList=JSON.parse(sessionStorage.getItem("ReserveList"));

        if((ReserveList.find(x=>(x==i)))!=undefined){
            alert("Product already on Reserve List");
            closebox();
        }else{
            ReserveList.push(i);
            sessionStorage.setItem("ReserveList",JSON.stringify(ReserveList));
            alert('Product added');
            closebox();
        }
    } else{
        alert("Sorry, your browser does not allow the Reserve List to be saved.");
    }
}


/*
FUNCTION GROUP - for display box
function closebox()
function bigbox(i)
*/


/*
function closebox()
Closes the display box
*/
function closebox(){

    let child = document.getElementById("bigbox");
    child.parentNode.removeChild(child);
}

/*
function bigbox(i)
displays the big box with product discription, priee and other buttons
*/
function bigbox(i){

    let elOne = document.getElementById("div1");
  
    let elTwo = document.createElement('div');

    let img2  = document.createElement('img');
    img2.src=products[i].img;
    img2.setAttribute("id", "img2");
    elTwo.appendChild(img2);

    let buttonCl  = document.createElement('button');
    buttonCl.setAttribute("type", "button");
    buttonCl.setAttribute("onclick", "closebox()");
    buttonCl.setAttribute("id", "butclose");
    let stringCl = 'Press To Close';
    buttonCl.append(document.createTextNode(stringCl));
    elTwo.appendChild(buttonCl);

    let orTest = document.getElementById("sec1");
    if((orTest.getAttribute("ReserveList"))=="yes"){

        let buttonOr  = document.createElement('button');
        buttonOr.setAttribute("type", "button");
        let stringOrClick="removeReserveList("+i+")";
        buttonOr.setAttribute("onclick", stringOrClick);
        buttonOr.setAttribute("id", "butadd");
        let stringWords = 'Remove from Reserve List';
        buttonOr.append(document.createTextNode(stringWords));
        elTwo.appendChild(buttonOr);
   
    }else{

        let buttonOr  = document.createElement('button');
        buttonOr.setAttribute("type", "button");
        let stringOrClick="addReserveList("+i+")";
        buttonOr.setAttribute("onclick", stringOrClick);
        buttonOr.setAttribute("id", "butadd");
        let stringWords = 'Add To Reserve List';
        buttonOr.append(document.createTextNode(stringWords));
        elTwo.appendChild(buttonOr);
    }

    let textpProd  = document.createElement('p');
    let stringpProd = products[i].name;
    textpProd.append(document.createTextNode(stringpProd));
    textpProd.setAttribute("id", "boxtitle");
    elTwo.appendChild(textpProd);

    let textDis  = document.createElement('div');
    let stringDis = "XXXX XXXX XXX XXX XXXXX XXXX XXXX XXXX XXXX XXXXXXX XXXX XX XXXX XX XXXXX XXXXX XXXX XXX XXXXXXX XXXX XX XX XXXX XXXX XXXXXXX XXXX XXX XX XX XXXXX XXXXXX XXXXX XXXXX X XXXXX XXXXX XX XXXX XXXXX X";
    textDis.append(document.createTextNode(stringDis));
    textDis.setAttribute("id", "proddes");
    elTwo.appendChild(textDis);
    
    elTwo.setAttribute("id", "bigbox");  
    elOne.appendChild(elTwo);
 }

 /*
 FUNCTION GROUP - displays products in given category
function nextItem(i,category)
function displayitem(i,secval)
function findFirstItem(category)
function imageclear()
function imageprinty(category)
*/

/*
nextItem(i,category)
finds the next product in the object in that category
*/
function nextItem(i,category){
    i++;
    if(category=='All'){
        return i;
    }

    let sizeOfProducts = Object.keys(products).length;

    while((i<sizeOfProducts)&&(products[i].category!=category)){
        i++;
    }
    return i;
}


/*
displayitem(i,secval)
displays item given its object index and column position
*/
function displayitem(i,secval){

    let sec = document.getElementById(secval);

    let divcont=document.createElement('div');
    divcont.setAttribute("class", "image-cont");

    let textpt  = document.createElement('p');
    textpt.setAttribute("class", "image-title");
    let stringpt = products[i].name;
    textpt.append(document.createTextNode(stringpt));
    divcont.appendChild(textpt);

    let img1  = document.createElement('img');
    img1.src=products[i].img;
    let stringi="bigbox("+i+")";
    img1.setAttribute("onclick", stringi);
    img1.classList.add("img1");
    divcont.appendChild(img1);

    let textpd  = document.createElement('p');
    let stringpd ="Price £ " + products[i].price;
    textpd.append(document.createTextNode(stringpd));
    divcont.appendChild(textpd);

    sec.appendChild(divcont);

}

/*
findFirstItem(category)
Finds first item in product list according to category
*/

function findFirstItem(category){
    if(category=='All'){
        return 0;
    }
    
    let i=0;
    var sizeOfProducts = Object.keys(products).length;
    while((i<sizeOfProducts)&&(products[i].category!=category)){
        i++;
    }
    return i;
}


/*
imageclear()
Deletes all the images
*/
function imageclear(){

    let list1 = document.getElementById("sec1");
    if(list1!==null){
        while (list1.hasChildNodes()) {   
            list1.removeChild(list1.firstChild);
        }
    }

    let list2 = document.getElementById("sec2");
    if(list2!==null){
        while (list2.hasChildNodes()) {   
            list2.removeChild(list2.firstChild);
        }
    }

    let list3 = document.getElementById("sec3");
    if(list3!==null){    
        while (list3.hasChildNodes()) {   
            list3.removeChild(list3.firstChild);
        }
    }
}

/*
imageprinty(category)
Sets creats variables for 'itemDisplay' according to category
*/
function imageprinty(category){

    imageclear();

    var sizeOfProducts = Object.keys(products).length;
    let i=0;
    i=findFirstItem(category);

    let text=['sec1','sec2','sec3'];
    let holdernext=[1,2,0];
    let holdercurrent=0;

    while(i<sizeOfProducts){
        displayitem(i,text[holdercurrent]);
        holdercurrent=holdernext[holdercurrent];                
        i=nextItem(i,category);
    }
    let orTest = document.getElementById("sec1");
    orTest.setAttribute("ReserveList", "no");
}
