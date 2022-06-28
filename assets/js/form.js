
const $form = document.querySelector('#form');


$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {

  event.preventDefault();

  const form = new FormData(this);

  const response = await fetch(this.action, {

    method: this.method,
    body: form,

    headers: {
      'Accept': 'application/json'
    }
  })

  if (response.ok) {

    this.reset()

    swal('Gracias por contactarme', 'te escribiré pronto 😃', 'success')

  } else {
    swal('Error', '🤕Hubo un error al enviar tu mensaje', 'porfavor intenta nuevamente', 'error')
  }
}