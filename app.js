// variables
var i = 0; // index counter
var images = [];
var time = 3000;

// Image List
images[0] = 'Spath.jpg';
images[1] = 'dracena.jpg';
images[2] = 'pothos.jpg';

// Change Image
function changeImg(){
    document.slide.src = images[i];
    
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout ('changeImg()', time);
}

window.onLoad = changeImg();