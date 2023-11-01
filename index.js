const header = document.getElementById("headerBox");
const companyName = document.getElementById("companyName");
const navbarSmallScreen = document.getElementById("navbarSmallScreen");

window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
                header.classList ="bg-white fixed-top";
                companyName.classList = "logo text-decoration-none text-dark";
                navbarSmallScreen.classList = "col-12 d-flex justify-content-between d-md-block d-lg-none bg-white p-3";
        } else {
                header.classList ="fixed-top";
                companyName.classList = "logo text-decoration-none text-white";
                navbarSmallScreen.classList = "col-12 d-flex justify-content-between d-md-block d-lg-none bg-dark p-3";
        }
});