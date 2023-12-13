// Assigning a function to the onscroll event of the window
window.onscroll = function() {
    scrollFunction();
};

// The scrollFunction() is called whenever the user scrolls
function scrollFunction() {
    // Get a reference to the navbar element by its ID
    var header = document.getElementById("header");

    // Check if the vertical scroll position is greater than 200 pixels
    if (document.documentElement.scrollTop > 300) {
        // If the scroll position is greater than 200 pixels, change the background color of the navbar to "#555"
        
        // Add the class "static" to the navbar using classList
        header.classList.add("static");
    } else {
        // If the scroll position is less than or equal to 200 pixels, change the background color of the navbar to "#333"
    
        
        // Remove the class "static" from the navbar using classList
        header.classList.remove("static");
    }
}



document.addEventListener("DOMContentLoaded", function () {
    let close_icon = document.getElementById('bars');
    let side_menu = document.getElementById('side_menu');
    
    bars.addEventListener("click", function () {
        console.log("Click event fired");
        side_menu.classList.add('show_menu');
    });
    });


    document.addEventListener("DOMContentLoaded", function () {
        let close_icon = document.getElementById('close_icon');
        let side_menu = document.getElementById('side_menu');
    
        close_icon.addEventListener("click", function () {
            console.log("Click event fired");
            side_menu.classList.remove('show_menu');
        });
    });


//    const slides =  document.querySelectorAll(".slide")
//     let counter = 0;

//     slides.forEach(
//         (slide,index) => {
//         slide.style.left = `${index * 100}%`
//     });