const { getStatus } = require('../status');

function createMessage(data) {
  const body = JSON.stringify(data);
  const header = 'data: ';
  const footer = '\n\n';
  return `${header}${body}${footer}`;
}

function sendSSE(res, message) {
  res.write(createMessage(message));
}

const sseEvents = (_, res) => {
  let currentStatus = getStatus();

  const headers = {
    'Content-Type': 'text/event-stream',
    Connection: 'keep-alive',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };

  res.writeHead(200, headers);

  res.socket.on('end', () => {
    console.log('Screen disconnected');
    res.end();
  });

  res.socket.on('connect', () => {
    console.log('Screen connected');
  });

  sendSSE(res, 'Connected');
  sendSSE(res, { status: currentStatus });

  setInterval(() => {
    const newStatus = getStatus();
    if (newStatus !== currentStatus) {
      sendSSE(res, { status: newStatus });
      currentStatus = newStatus;
    }
  }, 500);
};

module.exports = {
  sseEvents,

};
