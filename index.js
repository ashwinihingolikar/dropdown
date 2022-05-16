const navElement = document.querySelectorAll(".nav-element");
const dropdown = document.querySelectorAll(".dropdown")
const navIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

for(i=0; i<navElement.length; i++){
    navElement[i].addEventListener("click", function(e){
        const id = e.target.dataset.id;
        if(id){
                const element = document.getElementById(id);
                element.classList.toggle("active");

        }
        
    })
    
}
navIcon.addEventListener("click", function(e){
 navbar.classList.toggle("open");
});

