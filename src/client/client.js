window.onload = () => {
  const serverAddress = `${window.location.hostname}:3007`;

  const SSE = new EventSource(`${serverAddress}/sse`);
  const messageElement = document.querySelector('p');

  SSE.onmessage = (event) => {
    const data = JSON.parse(event.data);
    messageElement.textContent = data.status;
  };
};
