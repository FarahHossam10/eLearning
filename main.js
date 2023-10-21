// navbar bars icon
let nav = document.getElementById("nav");
let navDropdown = document.querySelector(".nav_dropdown");
let barsIcon = document.querySelector(".bars_icon");
let menuOpen = false;
barsIcon.addEventListener("click", () => {
    if(!menuOpen){
        navDropdown.style.height = "400px";
        menuOpen = true;
    }
    else{
        navDropdown.style.height = "0";
        menuOpen = false;
    }
});


// Pages link dropdown
let dropdownLink = document.querySelector(".dropdown_link");
let dropdown = document.querySelector(".dropdown");
dropdownLink.addEventListener("click", ()=>{ 
    if(!dropdown.classList.contains("open_link")) dropdown.classList.add("open_link");
    else dropdown.classList.remove("open_link");
})


// navbar scroll behaviour
document.addEventListener("scroll", () => {
    let navBar = document.querySelector("#nav");
    let distanceFromTop = Math.abs(document.body.getBoundingClientRect().top);
    if(distanceFromTop >= 110) navBar.classList.add("fixed");
    else navBar.classList.remove("fixed");    
});


// Reviews Slider
let review_info = [
    {
        imgSrc : "images/testimonial-2.jpg",
        reviewerName : "John Doe",
        reviewerProf : "Influencer",
        reviewText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. accusantium quam nihil laudantium sit! Itaque nulla vel aut!" 
    },
    {
        imgSrc : "images/testimonial-1.jpg",
        reviewerName : "Jane Doe",
        reviewerProf : "Doctor",
        reviewText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil laudantium sit! Itaque nulla vel aut!" 
    },
    {
        imgSrc : "images/testimonial-3.jpg",
        reviewerName : "John Doe",
        reviewerProf : "Gamer",
        reviewText : "Lorem ipsum dolor sit amet Quasi ipsum veniam accusantium quam nihil laudantium sit! Itaque nulla vel aut!" 
    },
    {
        imgSrc : "images/testimonial-4.jpg",
        reviewerName : "Jane Doe",
        reviewerProf : "Prgrammer",
        reviewText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsum veniam accusantium quam nihil laudantium sit!!" 
    }
]
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let review = document.querySelector(".review");
let index = 0;
function updateInfo(){
    review.querySelector("img").src = review_info[index].imgSrc;
    review.querySelector(".reviewer_name").textContent = review_info[index].reviewerName;
    review.querySelector(".reviewer_prof").textContent = review_info[index].reviewerProf;
    review.querySelector(".review_text").textContent = review_info[index].reviewText;
}
next.addEventListener("click", () => {
    index++;
    if(index == review_info.length) index = 0;
    updateInfo();
})
prev.addEventListener("click", () => {
    index--;
    if(index < 0) index = review_info.length - 1;
    updateInfo();
});
