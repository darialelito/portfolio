const aboutBtn = document.querySelector(".aboutButton");
const aboutSection = document.querySelector(".section_about");
const footerArrowShow = document.querySelector(".footer-arrow")

aboutBtn.addEventListener('click', function () {
    aboutSection.classList.toggle('on');
    footerArrowShow.classList.add('on');
})

const portfolioBtn = document.querySelector(".portfolioButton");
const portfolioSection = document.querySelector(".section_portfolio");

portfolioBtn.addEventListener('click', function () {
    portfolioSection.classList.toggle('on');
    footerArrowShow.classList.add('on');
})

const contactBtn = document.querySelector(".contactButton");
const contactSection = document.querySelector(".section_contact");

contactBtn.addEventListener('click', function () {
    contactSection.classList.toggle('on');
    footerArrowShow.classList.add('on');
})

footerArrowShow.addEventListener('click', function () {
    window.scrollTo(0, 0);
})
