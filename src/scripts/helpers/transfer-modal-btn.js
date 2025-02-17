const modals = document.querySelectorAll(".js-modal");

export function chooseDestination(root) {
	const form = root.querySelector(".js-form-data");
	const formBtns = root.querySelectorAll(".js-modal-btn");
	const formBtnClose = root.querySelector(".js-modal-close");

	if (window.innerWidth <= 767) {
		formBtns.forEach((btn) => {
			form.append(btn);
		});
	} else {
		formBtns.forEach((btn) => {
			formBtnClose.before(btn);
		});
	}
}

modals.forEach((modal) => {
	window.addEventListener("resize", (e) => {
		chooseDestination(modal);
	});

	chooseDestination(modal);
});
