const SSE = new EventSource('http://localhost:3007/sse');

SSE.onmessage = (event) => {
  console.log('event: ', event);
  const data = JSON.parse(event.data);
  console.log('data: ', data);
};

// es.addEventListener(eventName, function (event) {
//   ...
// });
