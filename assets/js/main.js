// const declaration
const modalTitle = document.getElementById("modal-title");
const loginButton = document.getElementById("connexion-button");
const closeModalButton = document.getElementById("close-modal-btn");
const loginModal = document.getElementById("login-modal");
const submitForm = document.getElementById("login-form");
// listeners

loginButton.addEventListener("click", () => {
	loginModal.classList.toggle("hidden");
});

closeModalButton.addEventListener("click", () => {
	loginModal.classList.add("hidden");
});

submitForm.addEventListener("submit", async ($event) => {
	$event.preventDefault();
	const data = {
		firstname: document.getElementById("input-firstname").value,
		lastname: document.getElementById("input-lastname").value,
		email: document.getElementById("input-email").value,
		password: document.getElementById("input-password").value,
	};
	console.log(data);
	const response = await axios.post("http://localhost:3000/login", data);

	modalTitle.innerText = `${response.data.message}`;
});
