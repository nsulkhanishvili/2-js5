const display = document.querySelector('.display-none')
const form2 = document.getElementById('form2')
const input = document.querySelector('.input')
const box = document.getElementById('box');
const error = document.getElementById('error')


function modal() {
  display.classList.toggle('display-none');
  error.textContent = '';
}

form2.addEventListener('submit', function (event) {
  event.preventDefault();
  error.textContent = '';

  if (input.value.trim()) {
    box.classList.add('display-none')
    form2.reset();
  } else {
    error.style.display = 'block'
    error.textContent = 'Empty value provided'
  }
})
