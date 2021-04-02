// toggles hidden content
function show(button_id) {
    document.getElementById(button_id).classList.toggle("show");
}

// allows user to modify options (flavor, quantity)
// replaces photo with updated version
function replace(button_id, value) {
    // replaces the value and text in the button to reflect the new choice
    document.getElementById(button_id).value = value;
    document.getElementById(button_id).innerHTML = value;

    // if flavor changes, changes large photo to represent the roll
    if (button_id == 'flavor-button') {
        document.getElementById('id_large_roll').src = "images/" + value.toLowerCase() + "-roll.png";
    }

    // if quantity changes, changes the title to represent the new number of rolls selected
    if (button_id == 'quantity-button') {
        if (value == '1') {
            document.getElementById('roll_title').innerHTML = "PUMPKIN SPICE";
        }
        else {
            document.getElementById('roll_title').innerHTML = "PUMPKIN SPICE " + value + "-PACK";
        }
    }


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

// used when loading page, checks contents to show cart notification if items are in the cart
function checkCartStatus() {
    var cart_full = localStorage.getItem('cart');
    var num_in_cart = localStorage.getItem('num_in_cart');
    if (cart_full == "true") {
        document.getElementById("cart_indication").style.display = "block";
        document.getElementById('cart_indication').innerHTML = num_in_cart.toString();
    }
}

// sets cart having items to true
// resets the value to update number in cart with every item added
function addToCart() {
    var cart_full = localStorage.getItem('cart');
    var num_in_cart = localStorage.getItem('num_in_cart');
    if (cart_full == 'true') {
        var new_num_in_cart = parseInt(num_in_cart) + 1;
        document.getElementById('cart_indication').innerHTML = new_num_in_cart.toString();
        localStorage.setItem('num_in_cart', new_num_in_cart.toString());
    }
    else {
        // case that this is the first item to add to cart
        localStorage.setItem('cart', 'true');
        localStorage.setItem('num_in_cart', '1');
    }
}

// HW6B preliminary work

// var roll_clicked;
// function select_roll(roll) {
//     localStorage.setItem('roll_clicked', JSON.stringify(roll));
//     roll_clicked = roll;
//     console.log(roll_clicked);
// }
//
// function replaceRolls() {
//     console.log('here at all')
//     var roll = JSON.parse(localStorage.getItem("savedAnimal"));
//     console.log(roll_clicked, ' roll')
//     if (roll_clicked == 'pumpkin-spice') {
//         replaceImages('rolls-1', 'rolls-6', 'rolls-3', 'rolls-7');
//     }
//     else if (roll_clicked == 'original') {
//         console.log('made it in')
//         replaceImages('rolls-1', 'rolls-6', 'rolls-3', 'rolls-7');
//     }
//     else {
//         return;
//     }
//     console.log('replaced');
// }

// replace srcs of photos to match clicked on roll
// function replaceImages(large_photo, small_photo_1, small_photo_2, small_photo_3) {
//     console.log('here woo');
//     document.getElementById("id_large_roll").src = "images/" + large_photo;
//     document.getElementById("id_small_roll_1").src = "images/" + small_photo_1;
//     document.getElementById("id_small_roll_2").src = "images/" + small_photo_2;
//     document.getElementById("id_small_roll_3").src = "images/" + small_photo_3;
// }
