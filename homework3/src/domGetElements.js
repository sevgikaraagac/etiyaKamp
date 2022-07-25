//getElementById
// alert("Reading with getElementById");
// var firstParagraph = document.getElementById("intro1");
// var message=document.getElementById("message");
// message.innerHTML = "Message : " +firstParagraph.innerHTML;


//getElementsByTagName
// var allUnorderedLists=document.getElementsByTagName("ul");
// var unorderedList =allUnorderedLists[0];
// var allListItems = unorderedList.getElementsByTagName("li");
// for(var i=0;i<allListItems.length;i++){
//     alert(allListItems[i].firstChild.data);
// }


//getElementByClassName
// var allItemsWithClassName = document.getElementsByClassName("intro1");
// alert(allItemsWithClassName[0].innerHTML);


//querySelectorAll
// var allItemsWithSelector=document.querySelectorAll("p.intro2");
// alert(allItemsWithSelector[0].innerHTML);


//getElementsByName
// var names = document.getElementsByName("customerName");
// alert(names[0].value);


//addEventListener && removeEventListener
// document.getElementById("tryIt").addEventListener('click', changeColor);
// function changeColor(){
//     document.getElementById("intro1").style.color = "blue";
// }
// document.getElementById("tryIt").removeEventListener('click', changeColor);


//working with nodes
// var nodeText = document.getElementById("nodes").childNodes[0].nodeValue;
// alert(nodeText);

var heading = document.createElement("h2");
var node = document.createTextNode("Hello JavaScript");
heading.appendChild(node);

var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");
div1.insertBefore(heading, p2);

alert("Removing P2");
div1.removeChild(p2);

alert("Replacing");
var heading2=document.createElement("h1");
var node2=document.createTextNode("This is a replacement");
heading2.appendChild(node2);

var p1=document.getElementById("p1");
div1.replaceChild(heading2, p1);



