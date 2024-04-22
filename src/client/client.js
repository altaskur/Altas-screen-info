const serverAddress = `http://${window.location.hostname}:3007`;
const messageElement = document.querySelector('p');

try {
  const SSE = new EventSource(`${serverAddress}/sse`);
  SSE.onopen = () => {
    messageElement.textContent = 'Connected';
  };

  SSE.onmessage = (event) => {
    const data = JSON.parse(event.data);
    messageElement.textContent = data.status;
  };
} catch (error) {
  messageElement.textContent = `Error ${error}`;
  console.log('Error:', error);
}
