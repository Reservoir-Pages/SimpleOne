const header = document.querySelector(".js-main-header");
const panel = document.querySelector(".js-left-panel");
const explorer = document.querySelector(".js-explorer-btn");

function transferElement(element, to) {
	to.prepend(element);
}

function chooseDestination() {
	if (window.innerWidth <= 767) {
		transferElement(explorer, header);
	} else {
		transferElement(explorer, panel);
	}
}

window.addEventListener("resize", (e) => {
	chooseDestination();
});

chooseDestination();
