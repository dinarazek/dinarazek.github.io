function show(button_id) {
    console.log('here')
    document.getElementById(button_id).classList.toggle("show");
}

// allows user to modify options (flavor, quantity)
function replace(button_id, value) {
    // replaces the value and text in the button to reflect the new choice
    document.getElementById(button_id).value = value;
    document.getElementById(button_id).innerHTML = value;

    // hides dropdown options
    var flavor = document.getElementById("flavors");
    var quantities = document.getElementById("quantities")
    if (flavor.classList.contains('show')) {
        flavor.classList.remove('show');
    }
    if (quantities.classList.contains('show')) {
        quantities.classList.remove('show');
    }
}

// replace srcs of photos to match clicked on roll
function replaceImages(large_photo, small_photo_1, small_photo_2, small_photo_3) {
    console.log('here woo')
    document.getElementById("flavor-button").innerHTML = "yeehaw";
    document.getElementById("id_large_roll").src = "images/" + large_photo;
    document.getElementById("id_small_roll_1").src = "images/" + small_photo_1;
    document.getElementById("id_small_roll_2").src = "images/" + small_photo_2;
    document.getElementById("id_small_roll_3").src = "images/" + small_photo_3;
}

function addToCart() {
    return;
}
