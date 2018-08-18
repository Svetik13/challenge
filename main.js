// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://my-json-server.typicode.com/airtame/kittens/kittens/1');
request.responseType = 'json';
request.send();
request.onload = function() {
    var firstKitten = request.response;

    alert("Size: "+ firstKitten.images);
}

//request.onload = function () {
    // Begin accessing JSON data here
    //$.getJSON("http://my-json-server.typicode.com/airtame/kittens/db", showFirst);

//}

function showFirst(data){
    var firstKitten = data;
    alert("Size: "+ firstKitten);

}

// Send request
//request.send();


var template= document.querySelector("#cat_template").content;
var myClone = template.cloneNode(true);
var container= document.querySelector(".container");

container.appendChild(myClone);



