const labels = document.querySelectorAll(".js-fieldset-label");

labels.forEach((label) => {
	const btn = label.querySelector("button");

	if (btn) {
		btn.addEventListener("click", (e) => {
			e.preventDefault();

			label.remove();
		});
	}
});
