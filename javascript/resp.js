let navbar = document.getElementById("navbar")
let logo = document.getElementById("mainlogo")
let hamburg = document.getElementById("hamburger")

hamburg.addEventListener("click", function run(){
    if (navbar.style.display != "none"){
        navbar.style.display = "none"
        
    }
    else if (navbar.style.display = "none"){
        navbar.style.display = "flex"
    }
    // alert("You clicked logo")
})

// let closer = document.getElementById("close")
// closer.addEventListener("click", function run(){
//     if (navbar.style.display != "none"){
//         navbar.style.display = "none"
//     }
// })