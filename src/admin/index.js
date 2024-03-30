window.onload = () => {
  const SSE = new EventSource('http://localhost:3007/sse');

  const statusElement = document.querySelector('.display-status');
  const formElement = document.querySelector('form');
  const selectElement = document.querySelector('select');
  const buttonElement = document.querySelector('input[type="button"]');

  buttonElement.addEventListener('click', () => {
    fetch('http://localhost:3007/change', {
      method: 'POST',
      body: 'status=libre',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  });

  selectElement.addEventListener('change', (event) => {
    const status = event.target.value;
    fetch('http://localhost:3007/change', {
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
    console.log(status);
    fetch('http://localhost:3007/change', {
      method: 'POST',
      body: `status=${status}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  });
};
