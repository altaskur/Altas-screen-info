const SSE = new EventSource('http://localhost:3007/sse');

const statusElement = document.querySelector('.display-status');

SSE.onmessage = (event) => {
  const data = JSON.parse(event.data);
  statusElement.textContent = data.status;
  console.log('Event', data);
};

const formElement = document.querySelector('form');

formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(formElement);
  const status = formData.get('status');
  fetch(`http://localhost:3007/change?status=${status}`, {
    method: 'POST',
  });
});
