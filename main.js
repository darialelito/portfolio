const aboutBtn = document.querySelector(".aboutButton");
const aboutSection = document.querySelector(".section_about");

aboutBtn.addEventListener('click', function () {
    aboutSection.classList.toggle('on');
})

const portfolioBtn = document.querySelector(".portfolioButton");
const portfolioSection = document.querySelector(".section_portfolio");

portfolioBtn.addEventListener('click', function () {
    portfolioSection.classList.toggle('on');
})
