const header = document.querySelector(".js-main-header");
const subheader = document.querySelector(".js-subheader");
const content = document.querySelector(".js-form-wrapper");
const formTitle = document.querySelector(".js-form-title");

const topOffset = header.offsetHeight + subheader.offsetHeight;

content.addEventListener("scroll", (e) => {
	e.preventDefault();

	if (form.getBoundingClientRect().top < topOffset) {
		subheader.classList.add("active");
	} else {
		subheader.classList.remove("active");
	}
});
