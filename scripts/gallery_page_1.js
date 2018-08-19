
var counter = 1;
var viewer = document.getElementById("viewer");
viewer.onclick = function() {
    if(counter == 0) {
        document.getElementById("viewer").src === "images/coast-23.jpg";
        counter++;
    }
    else if(counter == 1) {
        document.getElementById("viewer").src == "images/coast-15.jpg";
        counter++;
    }
    else if(counter == 2) {
        document.getElementById("viewer").src == "images/coast-17.jpg";
        counter++;
    }
}
                       