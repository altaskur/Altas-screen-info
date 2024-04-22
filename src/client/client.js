const serverAddress = `http://${window.location.hostname}:3007`;
const iElement = document.querySelector('i');
const messageElement = document.querySelector('p');

try {
  const SSE = new EventSource(`${serverAddress}/sse`);
  SSE.onopen = () => {
    iElement.textContent = 'Connected';
  };
  SSE.onmessage = (event) => {
    iElement.textContent = console.log('Hello from client');
    const data = JSON.parse(event.data);
    messageElement.textContent = data.status;
  };

  iElement.textContent = 'Connected';
} catch (error) {
  console.log('Error:', error);
  iElement.textContent = error;
}

iElement.textContent = 'Connected';
