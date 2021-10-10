//Show Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const getLink = document.querySelector(".nav-link");
const fade = document.querySelector(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const articles = document.querySelector(".hided-articles");
const articleBtn = document.querySelector(".article-Button");

getLink.classList.add(".fixed-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

//Fixed navbar
const navbar = document.querySelector('.navbar');
 window.addEventListener("scroll", () => {
     const scrollHeight = window.pageYOffset;
     const navHeight = navbar.getBoundingClientRect().height;

     if(scrollHeight > navHeight) {
         navbar.classList.add("fixed-nav");
     } else {
         navbar.classList.remove("fixed-nav");
     }      
 });

//Stop the page to scroll to the top when a link is clicked
 function socialLinks(event) {
    event.preventDefault();
 }

 //Make elements appear while scrolling
 const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -110px 0px"
 };

 const appearOnScroll = new IntersectionObserver(function(
     entries,
     appearOnScroll
 ) {
     entries.forEach(entry => {
         if (!entry.isIntersecting) {
             return;
         } else {
             entry.target.classList.add("appear");
             appearOnScroll.unobserve(entry.target);
         }
     });
 },appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})
//Hide or show articles
articleBtn.addEventListener("click", toggleArticle);

function toggleArticle() {
    if(articles.style.display === "none") {
        articles.style.display = "block";
        articleBtn.innerHTML = "Read Less";
    } else {
        articles.style.display = "none";
        articleBtn.innerHTML = "Read More";
    }
}