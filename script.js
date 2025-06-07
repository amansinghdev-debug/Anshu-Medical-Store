document.getElementById('buyNow').addEventListener("click", function(){
    window.location.href = "medicine.html"; 
});

const navLinks = document.getElementById('navLinks');

function navOpen(){
    navLinks.classList.add('active');
}
function CloseNav(){
    navLinks.classList.remove('active');
}
