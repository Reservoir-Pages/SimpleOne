const btn = document.querySelector(".js-modal-btn");
const modal = document.querySelector(".js-modal");
const modalOverlay = document.querySelector(".js-modal-overlay");

btn.addEventListener("click", (e) => {
	e.preventDefault();

	modal.classList.add("active");
});

modalOverlay.addEventListener("click", (e) => {
	const target = e.target;

	if (
		target.classList.contains("js-modal-overlay") ||
		target.classList.contains("js-modal-close")
	) {
		modal.classList.remove("active");
	}
});

window.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		modal.classList.remove("active");
	}
});

// Header border
const modals = document.querySelectorAll(".js-modal");

modals.forEach((modal) => {
	const modalSubheader = modal.querySelector(".js-subheader");
	const modalContent = modal.querySelector(".js-form-wrapper");
	const modalFormTitle = modal.querySelector(".js-form-title");

	modalContent.addEventListener("scroll", (e) => {
		e.preventDefault();

		if (modalFormTitle.getBoundingClientRect().top < modalSubheader.offsetHeight) {
			modalSubheader.classList.add("active");
		} else {
			modalSubheader.classList.remove("active");
		}
	});
});
