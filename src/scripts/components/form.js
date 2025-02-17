const forms = document.querySelectorAll(".js-form-data");

forms.forEach((form) => {
	const fieldset = form.elements.concordants;

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const formData = new FormData(form);

		let concordantInputs;

		if (fieldset) {
			concordantInputs = fieldset.elements;

			let concordants = [];

			for (let i = 0; i < concordantInputs.length; i++) {
				concordants.push(concordantInputs[i].value);
			}

			formData.set("concordants", JSON.stringify(concordants));
		}

		const values = Object.fromEntries(formData.entries());

		console.log(values);
	});
});
