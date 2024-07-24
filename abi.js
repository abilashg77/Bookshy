document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.querySelector(".overlay");
    var overlayBox = document.querySelector(".overebox");
    var addButton = document.querySelector(".wm");
    var cancelButton = document.getElementById("do");
    var addBookButton = document.getElementById("add");
    var container = document.querySelector(".container");
    var bookTitle = document.getElementById("abi");
    var bookAuthor = document.getElementById("lash");
    var bookDescription = document.getElementById("des");

    addButton.addEventListener("click", function() {
        overlay.style.display = "block";
        overlayBox.style.display = "block";
    });

    cancelButton.addEventListener("click", function(event) {
        event.preventDefault();
        overlayBox.style.display = "none";
        overlay.style.display = "none";
    });

    addBookButton.addEventListener("click", function(event) {
        event.preventDefault();
        var div = document.createElement("div");
        div.setAttribute("class", "book");
        div.innerHTML = `
            <h2>${bookTitle.value}</h2>
            <h4>${bookAuthor.value}</h4>
            <p>${bookDescription.value}</p>
           <button class="one" onclick="deletebook(event)">Delete</button>`
        ;
        container.append(div);
        overlayBox.style.display = "none";
        overlay.style.display = "none";
    });
});

function deletebook(event){
    event.target.parentElement.remove()
}
