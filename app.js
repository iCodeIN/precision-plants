// variables
var i = 0; // index counter
var image = [];
var time = 3000;

// Image List
image[0] = 'spath.jpg';
image[1] = 'dracena.jpg';
image[2] = 'marble_queen.jpg';

// Change Image
function changeImg(){
    document.slide.source = images[i];
    
    if (i < image.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout ("changeImg", time);
}

window.onLoad = changeImg();