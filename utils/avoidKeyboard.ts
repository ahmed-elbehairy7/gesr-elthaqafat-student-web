const avoidKeyboard = () => {
	// listen to keyboard focus
	document.body.addEventListener(
		"focus",
		(event) => {
			const { target } = event;
			switch ((target as unknown as { tagName: string }).tagName) {
				case "INPUT":
				case "TEXTAREA":
				case "SELECT":
					document.body.classList.add("keyboard");
			}
		},
		true
	);
	document.body.addEventListener(
		"blur",
		() => {
			document.body.classList.remove("keyboard");
		},
		true
	);
};

export default avoidKeyboard;
