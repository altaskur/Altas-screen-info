window.onload = () => {
  const serverAddress = `http://${window.location.hostname}:3007`;
  console.log(serverAddress);
  const SSE = new EventSource(`${serverAddress}/sse`);

  const statusElement = document.querySelector('.display-status');
  const formElement = document.querySelector('form');
  const selectElement = document.querySelector('select');
  const buttonElement = document.querySelector('input[type="button"]');

  buttonElement.addEventListener('click', () => {
    fetch(`${serverAddress}/change`, {
      method: 'POST',
      body: 'status=Libre',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  });

  selectElement.addEventListener('change', (event) => {
    const status = event.target.value;
    fetch(`${serverAddress}/change`, {
      method: 'POST',
      body: `status=${status}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  });

  SSE.onmessage = (event) => {
    const data = JSON.parse(event.data);
    statusElement.textContent = data.status;
  };

  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(formElement);
    const status = formData.get('status');

    fetch(`${serverAddress}/change`, {
      method: 'POST',
      body: `status=${status}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  });
};
