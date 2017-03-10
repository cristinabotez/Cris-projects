function hello() {
    var name = document.getElementById("name").value;
    var greeting = "Hello, " + name + ", nice to meet you.";
    var div = document.createElement("div");
    var textNode = document.createTextNode(greeting);
    div.appendChild(textNode);
    document.body.appendChild(div);

}
