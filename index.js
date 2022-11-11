let slider = document.getElementById('slides');
// hold images in an array

let image = ['car1','car2','car3','car4','car5','car6'];
let caption = ['Image One','Image Two','Image Three', 'Image Four','Image Five','Image Six']

let i = image.length;

// function for the next image

function nextImage(){
    if(i < image.length) {
        i = i + 1;
    } else{
        i = 1
    }
    slider.innerHTML = "<img src="+image[i-1]+".jpg>"  + "<h1>"+caption[i-1]+"</h1>"
 }
// function for the previous image
 function prevImage(){
    if(i < image.length + 1 && i>1) {
        i = i - 1;
    } else{
        i = image.length
    }
    slider.innerHTML = "<img src="+image[i-1]+".jpg>" + "<h1>"+caption[i-1]+"</h1>"
 }

 