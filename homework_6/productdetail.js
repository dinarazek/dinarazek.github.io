function show(button_id) {
    console.log('here')
    document.getElementById(button_id).classList.toggle("show");
}

function replace(button_id, element_id) {
    document.getElementById(button_id).classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropdown-content')) {
        var flavor = document.getElementById("flavors");
        var quantities = document.getElementById("quantities")
        if (flavor.classList.contains('show')) {
            flavor.classList.remove('show');
        }
        if (quantities.classList.contains('show')) {
            quantities.classList.remove('show');
        }
    }
}
