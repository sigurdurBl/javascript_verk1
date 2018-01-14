//code for hello world
var locacion = document.getElementById("demo");
locacion.innerHTML = "Hello world!";


//code for to do list
var item1 = document.getElementById("demo1");
item1.innerHTML = "bread";
var item2 = document.getElementById("demo2")
item2.innerHTML  = "eggs";
var item3 = document.getElementById("demo3")
item3.innerHTML = "milk";
var item4 = document.getElementById("demo4")
item4.innerHTML = "chicken"
//code to add in to to do list
function todoList() {
    var item    = document.getElementById('todoInput').value
    var text    = document.createTextNode(item)
    var newItem = document.createElement('li')
    newItem.appendChild(text)
    document.getElementById('todoList').appendChild(newItem)
}