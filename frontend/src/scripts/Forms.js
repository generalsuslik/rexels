function clearForm() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
}

export default clearForm;
