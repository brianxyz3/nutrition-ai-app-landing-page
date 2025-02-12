const accordionList =  document.querySelectorAll(".accordion");

const toggleShowAccordionClass = (target) => {
    target.firstElementChild.firstElementChild.classList.toggle("active");
    target.lastElementChild.firstElementChild.classList.toggle("show_desc");
};

accordionList.forEach((item) => {
    item.addEventListener("click", () => {
        toggleShowAccordionClass(item);
    });
});

