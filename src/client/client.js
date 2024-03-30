const SSE = new EventSource('http://localhost:3007/sse');
const messageElement = document.querySelector('p');

SSE.onmessage = (event) => {
  const data = JSON.parse(event.data);
  messageElement.textContent = data.status;
};
