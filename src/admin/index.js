const SSE = new EventSource('http://localhost:3007/sse');

SSE.onmessage = (event) => {
  const data = JSON.parse(event.data);
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
