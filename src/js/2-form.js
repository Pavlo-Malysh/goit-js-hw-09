
const formData = {
  email: "",
  message: "",
}

const form = document.querySelector(".feedback-form")

form.addEventListener("input", handlerFormData)

function handlerFormData(event) {
  const form = event.currentTarget.elements
  formData.email = form.email.value.trim();
  formData.message = form.message.value.trim();

  localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

if (localStorage.getItem("feedback-form-state")) {
  const storageData = JSON.parse(localStorage.getItem("feedback-form-state"))
  formData.email = storageData.email
  formData.message = storageData.message

  form.elements.email.value = formData.email
  form.elements.message.value = formData.message
}

form.addEventListener("submit", handlerFormSubmit)

function handlerFormSubmit(event) {
  event.preventDefault()

  if (!formData.email === "" || !formData.message === "") {
    alert("Fill please all fields")
  } else {
    console.log(formData);
    localStorage.removeItem("feedback-form-state")
    form.reset()
    Object.keys(formData).forEach(key => {
      formData[key] = "";
    })
  }
}

