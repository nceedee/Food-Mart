
let cancel = document.getElementById('cancel');
let bar = document.getElementById('bar');
let menu = document.getElementById('menuMobile');

function getBar() {
  if (bar) {
    bar.style.display = 'none';
    cancel.style.display = 'block';
    menu.style.height = '100%';
    menu.style.opacity='1'
  }

}


function getCancel() {
  if (cancel) {
    bar.style.display = 'block';
    cancel.style.display = 'none'
    menu.style.height = '0px';
    menu.style.opacity='0'
  }
}





let closeTwo = document.getElementById("closeTwo");
let allDeContent = document.getElementById("allDeContent");
let btnTwo = document.getElementById("open2")
let food = document.getElementById("food")


function viewModel() {
    if (btnTwo) {
      allDeContent.style.display = "block";
      food.style.animation='none'
    }
}

function hideContent() {
    if (closeTwo) {
      allDeContent.style.display = "none";
      menu.style.height = '0px';
      menu.style.opacity='0'
      cancel.style.display = 'none';
      bar.style.display='block'
    }
}




function scrollL() {
  let left = document.querySelector(".scroll-images");
  left.scrollBy(300, 0);
}

function scrollR() {
  let left = document.querySelector(".scroll-images");
  left.scrollBy(-300, 0);
}

let gallery = document.getElementById( 'gallery' );
let theGallery = document.getElementById("theGallery");

function getGallery()
{
  if ( gallery )
  {
    theGallery.style.display='block'
  }
}

let gCancel = document.getElementById( "gCancel" );

function galleryCancel()
{
  if ( gCancel )
  {
    theGallery.style.display = 'none';
    menu.style.height = "0px";
    menu.style.opacity = "0";
    cancel.style.display = "none";
    bar.style.display = "block";
  }
}

let closeLog = document.getElementById("close");
let openLog = document.getElementById("open");
let deModal = document.getElementById( "modal" );


function closed()
{
  if ( closeLog )
  {
    deModal.style.display = 'none';
    menu.style.height = "0px";
    menu.style.opacity = "0"; 
    cancel.style.display = "none";
    bar.style.display = "block";

  }
}


let getContact = document.getElementById( 'contacting' );
let contCancel = document.getElementById('conCancel');
let openContact = document.getElementById( "con" );



function openCon()
{
  if ( openContact )
  {
    getContact.style.display = "block";
  }
}

function contactCancel()
{
  if ( contCancel )
  {
    getContact.style.display = 'none';
    menu.style.height = "0px";
    menu.style.opacity = "0";
    cancel.style.display = "none";
    bar.style.display = "block";
  }
}

let formSheet = document.getElementById("formingSheet");

let confirmOrder = document.getElementById("confirmOrder");

function validateForm() {
  let notEmpty = document.getElementById("notEmpty");
  let notEmptyTwo = document.getElementById("notEmpty2");
  let notEmptyThree = document.getElementById( "notEmpty3" );
  let notEmptyFour = document.getElementById( "notEmpty4" );
  let x = document.forms["myForm"]["fName"].value;
  let y = document.forms["myForm"]["fDetail"].value;
  let z = document.forms["myForm"]["fOpt"].value;
  let a = document.forms["myForm"]["fText"].value;
  let theSubmit = document.forms[ "myForm" ][ "fSubmit" ].value;
  
  let nameOfPerson = document.getElementById( 'thankyou' );


  if (theSubmit === x , y , z , a) {
    
    confirmOrder.style.display = "block";
    confirmOrder.style.zIndex = '2000';
    nameOfPerson.innerHTML=`${x}, your order has been approved.`
  }

  if (x === null || x == "") {
    notEmpty.innerHTML = "Must provide name";
    notEmpty.style.color = "red";
    return false;
  } else {
    notEmpty.innerHTML = "Approved";
    notEmpty.style.color = "black";
  }

  if (y === null || y == "") {
    notEmptyTwo.innerHTML = "Must provide your details";
    notEmptyTwo.style.color = "red";
    return false;
  } else {
    notEmptyTwo.innerHTML = "Approved";
    notEmptyTwo.style.color = "black";
  }

  if (z === null || z == "") {
    notEmptyThree.innerHTML = "Must provide your order with details";
    notEmptyThree.style.color = "red";
  }
  if (a === null || a == "") {
    notEmptyFour.innerHTML = "Must provide your details";
    notEmptyFour.style.color = "red";
    return false;
  } else
  {
    notEmptyThree.innerHTML = "Approved";
    notEmptyThree.style.color = "black";
    notEmptyFour.innerHTML = "Approved";
    notEmptyFour.style.color = "black";
  }

  
}


function ex()
{
  if ( confirmOrder )
  {
    confirmOrder.style.display = "none";
  }
}


let createAccount = document.getElementById( 'createaccount' );
let createAccountTwo = document.getElementById("createaccountTwo");
let modelForm = document.getElementById("modelForm");


function createAcct()
{
  if ( createAccount )
  {
    deModal.style.display='block'
  }
}



let p = document.getElementById("p");
let sub = document.getElementById("sub");

function submitForm()
{
  const formN = document.forms["theForm"]["formName"].value;
  const formS = document.forms["theForm"]["formSub"];
  

  if ( sub )
  {
    deModal.style.display = 'none'
    createAccount.style.display = "none";
    createAccountTwo.style.display = "block";
    createAccountTwo.innerHTML = `Welcome ${ formN }`;
  }

}


