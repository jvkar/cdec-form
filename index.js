const gallery = document.getElementById("gallery");
const galleryContainer = document.getElementById("gallery-container");

const textGallery=document.getElementById("text-gallery");

const scrollSpeed = 0.5; 
const scrollDelay = 20;
let scrollDirection = 1;

function scrollGallery() {
    let scrollAmount = 0;

    const scrollInterval = setInterval(function () {
        gallery.scrollLeft += scrollDirection * scrollSpeed;
        scrollAmount += scrollSpeed;

        if (scrollDirection === 1 && gallery.scrollLeft >= gallery.scrollWidth - galleryContainer.offsetWidth) {
            clearInterval(scrollInterval);

            scrollDirection = -1;

            setTimeout(scrollGallery, scrollDelay);
        } else if (scrollDirection === -1 && gallery.scrollLeft <= 0) {
            clearInterval(scrollInterval);


            scrollDirection = 1;


            setTimeout(scrollGallery, scrollDelay);
        }
    }, scrollDelay);
}


scrollGallery();
var facebook =document.getElementById('facebook');
var instagarm =document.getElementById('instagram');
var linkedin =document.getElementById('linkedin');
var tiktok =document.getElementById('tiktok');
var youtube =document.getElementById('youtube');
var contact=document.querySelector('.contact')

facebook.addEventListener('mouseover',()=>{
    facebook.style.background = "linear-gradient(to right, 	#4267B2, 	#4267B2)";

});
instagarm.addEventListener('mouseover',()=>{
    instagarm.style.background = "linear-gradient(to bottom left, 	#405DE6, 	#833AB4,#FCAF45)";

});

linkedin.addEventListener('mouseover',()=>{
    linkedin.style.background = "linear-gradient(to right, 	#0a66c2, 	#004182)";

});

tiktok.addEventListener('mouseover',()=>{
    tiktok.style.background = "linear-gradient(to bottom right, 	#ff0050,#000000,#00f2ea)";

});


facebook.addEventListener("mouseout",()=>{
    facebook.style.background="black";
})
instagarm.addEventListener("mouseout",()=>{
    instagarm.style.background="black";
})

linkedin.addEventListener("mouseout",()=>{
    linkedin.style.background="black";
})

tiktok.addEventListener("mouseout",()=>{
    tiktok.style.background="black";
})


