const fixBtn = document.querySelector(".js-fix-btn");

if (fixBtn) {
	fixBtn.addEventListener("click", (e) => {
		fixBtn.classList.toggle("active");
	});
}
